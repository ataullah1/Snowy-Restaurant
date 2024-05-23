import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSec = axios.create({
  // baseURL: 'https://snowy-restaurant-server.vercel.app',
  baseURL: 'http://localhost:3000',
});
const useAxios = () => {
  const { logOutAcc } = useAuth();
  const naviget = useNavigate();

  // Request interceptor
  axiosSec.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      console.log('request stopped by interceptor', token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  // Response Interceptor
  axiosSec.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      console.log('Status Error in the interceptor: ', err);
      const status = err.response.status;
      console.log(status);
      if (status === 401 || status === 403) {
        logOutAcc();
        naviget('/login');
      }
      return Promise.reject(err);
    }
  );
  return axiosSec;
};

export default useAxios;
