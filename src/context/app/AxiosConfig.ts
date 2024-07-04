
import { allowedList } from '@/modules/app/components/Pages';
import { rootStore } from '@/modules/app/store';
import { setCurrentUser } from '@/modules/users/store/UserStore';
import Axios,{ InternalAxiosRequestConfig, AxiosInterceptorOptions }  from 'axios';

// Function to get the current URL path
const getCurrentUrlPath = (): string => {
  const pathname = window.location.pathname;
  return pathname.split('/')[1];
};

Axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    //Check if connection is still valid
    const url = getCurrentUrlPath();
    if (localStorage.getItem(`auth-left-Servitia`) !== null && allowedList.indexOf(url) === -1) {
      rootStore.dispatch<any>(setCurrentUser(undefined));
      throw new Axios.Cancel('Disconnected');
    }
    let accessToken =  localStorage.getItem(`auth-tokens-Servitia`);
    if (accessToken === null){
        accessToken = '';
    }
    // set authorization header
    if (accessToken.length > 0) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
  {} as AxiosInterceptorOptions
);
