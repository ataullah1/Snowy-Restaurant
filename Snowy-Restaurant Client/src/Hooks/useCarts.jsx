import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import useAuth from './useAuth';

const useCarts = () => {
  const axioss = useAxios();
  const { userDta } = useAuth();
  const { data: carts = [], refetch } = useQuery({
    queryKey: ['carts'],
    queryFn: async () => {
      const { data } = await axioss.get(`/carts?email=${userDta.email}`);
      //   console.log(data);
      return data;
    },
  });
  return [carts, refetch];
};

export default useCarts;
