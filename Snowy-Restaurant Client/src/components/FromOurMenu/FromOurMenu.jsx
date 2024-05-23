import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';
import SingleProduct from '../SingleProduct/SingleProduct';

const FromOurMenu = () => {
  const axios = useAxios();
  const { data = [] } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/menu`
      );
      return data;
    },
    queryKey: ['menus'],
  });
  const popular = data.filter((dta) => dta.category === 'popular');
// console.log(popular);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {popular.map((dta) => (
          <SingleProduct key={dta._id} data={dta} />
        ))}
      </div>
      <div className="mx-auto w-full text-center mt-5">
        <button className="w-[236px] mx-auto h-16 px-[30px] py-5 rounded-lg border-b-2 border-gray-800 justify-start items-start gap-2.5 mt-10 hover:bg-black hover:text-white duration-300 cursor-pointer text-center text-lg font-medium font-['Inter'] uppercase">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default FromOurMenu;
