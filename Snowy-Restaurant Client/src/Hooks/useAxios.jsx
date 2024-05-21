import axios from 'axios';

const axiosSec = axios.create({
  baseURL: 'https://snowy-restaurant-server.vercel.app',
});
const useAxios = () => {
  return axiosSec;
};

export default useAxios;
