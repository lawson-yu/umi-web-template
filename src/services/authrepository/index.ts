import http from '@/utils/http';

export const getUserInfo = async () => {
  return http.get<AUTHORIZATION_API.CurrentUser>('/api/users');
};

export const getBlogList = async () => {};
