import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import CommonCover from '../../components/CommonCover/CommonCover';
import './shop.css';
import ChefRecommendCard from '../../components/ChefRecommends/ChefRecommendCard';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const Shop = () => {
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
  const soup = data.filter((dta) => dta.category === 'soup');
  const pizza = data.filter((dta) => dta.category === 'pizza');
  const dessert = data.filter((dta) => dta.category === 'dessert');
  const drinks = data.filter((dta) => dta.category === 'drinks');
  const salad = data.filter((dta) => dta.category === 'salad');
  console.log(soup);

  return (
    <div>
      <CommonCover heding="OUR SHOP" des="Would you like to try a dish?" />

      <div className="w-10/12 mx-auto">
        <Tabs>
          <TabList className="mt-14 mb-6 flex items-center justify-center gap-6 text-slate-800 font-semibold text-xl">
            <Tab className="outline-none cursor-pointer border-transparent px-1">
              Salad
            </Tab>
            <Tab className="outline-none cursor-pointer border-transparent px-1">
              Pizza
            </Tab>
            <Tab className="outline-none cursor-pointer border-transparent px-1">
              Soups
            </Tab>
            <Tab className="outline-none cursor-pointer border-transparent px-1">
              Desserts
            </Tab>
            <Tab className="outline-none cursor-pointer border-transparent px-1">
              Drinks
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9">
              {salad.map((dta) => (
                <ChefRecommendCard key={dta._id} data={dta} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9">
              {pizza.map((dta) => (
                <ChefRecommendCard key={dta._id} data={dta} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9">
              {soup.map((dta) => (
                <ChefRecommendCard key={dta._id} data={dta} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9">
              {dessert.map((dta) => (
                <ChefRecommendCard key={dta._id} data={dta} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9">
              {drinks.map((dta) => (
                <ChefRecommendCard key={dta._id} data={dta} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
