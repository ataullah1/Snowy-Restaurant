import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';
import ChefRecommendCard from './ChefRecommendCard';

const ChefRecommendsSec = () => {
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
  // console.log(data);
  const popular = data.filter((dta) => dta.category === 'popular');
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popular.map((dta) => (
        <ChefRecommendCard key={dta._id} data={dta} />
      ))}
    </div>
  );
};

export default ChefRecommendsSec;
