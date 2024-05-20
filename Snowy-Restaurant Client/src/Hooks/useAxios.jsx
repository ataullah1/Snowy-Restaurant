import axios from 'axios';

const axiosSec = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
});
const useAxios = () => {
  return axiosSec;
};

export default useAxios;
