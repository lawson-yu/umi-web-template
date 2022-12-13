import axios from 'axios';

declare module 'axios' {
  export interface AxiosResponse {
    code: number;
    info: string;
  }
}

export default axios;
