import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useAdmin = () => {
  const axioss = useAxios();
  const { userDta } = useAuth();
  const { data: isAdmin } = useQuery({
    queryKey: ['isAdmin', userDta.email],
    queryFn: async () => {
      const { data } = await axioss.get(`/user/admin/${userDta?.email}`);
      return data.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
