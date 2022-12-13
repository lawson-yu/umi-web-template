import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import Cookie from 'js-cookie';
import { RESPONSE_CODE } from '@/constants';

const http = axios.create({
  timeout: 30 * 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

const tokenInterceptor = (config: AxiosRequestConfig) => {
  const token = Cookie.get('token');
  if (token) {
    config.headers = {
      ...config.headers,
      Accept: 'application/json',
      Authorization: token,
    };
  }

  return config;
};

const IS_DEBUG = process.env.NODE_ENV === 'development';
const responseInterceptor = (response: AxiosResponse) => {
  const { config, data } = response;

  if (IS_DEBUG) {
    console.info('request', config.method, config.url, config.headers, config.data);
    console.info('response', response.status, response.data);
  }

  const { code, info } = data || {};
  if (code === RESPONSE_CODE.UNAUTHORIZED) {
    Cookie.remove('token');
    //TODO: 跳转授权登录页
    return;
  }

  const hasInfo = typeof code !== 'undefined' || typeof info !== 'undefined';
  return {
    ...(data || {}),
    info: hasInfo ? `${info}[${code}]` : '',
  };
};

const errorInterceptor = (error: AxiosError) => {
  const { config = {}, response, code, message, constructor } = error || {};
  console.info(
    'request',
    config.method,
    config.url,
    JSON.stringify(config.headers),
    JSON.stringify(config.data),
  );
  if (response) {
    console.info('error', response.status, JSON.stringify(response.data));
  }

  if (!response) {
    console.info('network error', JSON.stringify(config));
    throw new Error('网络异常');
  }

  if (code === 'ECONNABORTED' || message === 'Failed to fetch') {
    throw new Error('系统繁忙');
  } else if (message?.includes('timeout')) {
    throw new Error('系统繁忙，请稍后再试。');
  } else if (constructor === axios.Cancel) {
    throw new Error();
  }

  throw new Error('错误码：' + response.status);
};

const rejector = (error: any) => {
  throw error;
};

http.interceptors.request.use(tokenInterceptor, rejector);
http.interceptors.response.use(responseInterceptor, errorInterceptor);

export default http;
