import axios from 'axios';

const axiosSec = axios.create({
  // baseURL: 'https://snowy-restaurant-server.vercel.app',
  baseURL: 'http://localhost:3000',
});
const useAxios = () => {
  return axiosSec;
};

export default useAxios;
