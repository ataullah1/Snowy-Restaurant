// import { useQuery } from '@tanstack/react-query';
// import useAxios from './useAxios';

// const useMenu = () => {
//   const axios = useAxios();
//   const {
//     data = [],
//     isError,
//     error,
//     isLoading,
//   } = useQuery({
//     queryFn: async () => {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_SERVER_URL}/menu`
//       );
//       return data;
//     },
//     queryKey: [data, isError, error, isLoading],
//   });
//   // console.log(data);
//   return [data];
// };

// export default useMenu;
