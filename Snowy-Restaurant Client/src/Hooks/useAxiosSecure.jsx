import axios from 'axios';

const axiosSec = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
});
const useAxiosSecure = () => {
  return axiosSec;
};

export default useAxiosSecure;
