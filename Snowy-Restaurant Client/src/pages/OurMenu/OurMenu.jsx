import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';
import CommonCover from '../../components/CommonCover/CommonCover';
import Heading from '../../components/Heading/Heading';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

const OurMenu = () => {
  const axios = useAxios();
  const { data = [] } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(`/menu`);
      return data;
    },
    queryKey: ['menus'],
  });
  // console.log(data);
  const offered = data.filter((dta) => dta.category === 'offered');
  const soup = data.filter((dta) => dta.category === 'soup');
  const pizza = data.filter((dta) => dta.category === 'pizza');
  const dessert = data.filter((dta) => dta.category === 'dessert');
  const drinks = data.filter((dta) => dta.category === 'drinks');
  const salad = data.filter((dta) => dta.category === 'salad');
  console.log(offered);

  return (
    <div>
      <CommonCover heding="Our Menu" des="Would you like to try a dish?" />
      <div className="w-10/12 mx-auto">
        <Heading text="---Don't miss---" hed="TODAY'S OFFER" />

        <div className="my-16">
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-5 my-10">
            {offered.map((dta) => (
              <SingleProduct key={dta._id} data={dta} />
            ))}
          </div>
          <div className="w-[366px] hover:bg-gray-800 text-gray-800 hover:text-white  mx-auto h-16 px-[30px] py-5 rounded-lg border-b-2 border-gray-800 justify-start items-start gap-2.5">
            <div className="text-center text-xl font-medium font-['Inter'] uppercase">
              ORDER YOUR FAVOURITE FOOD
            </div>
          </div>
        </div>
      </div>
      {/* =========== */}
      <CommonCover
        heding="DESSERTS"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <div className="w-10/12 mx-auto">
        <div className="my-16">
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-5 my-10">
            {dessert.map((dta) => (
              <SingleProduct key={dta._id} data={dta} />
            ))}
          </div>
          <div className="w-[366px] hover:bg-gray-800 text-gray-800 hover:text-white  mx-auto h-16 px-[30px] py-5 rounded-lg border-b-2 border-gray-800 justify-start items-start gap-2.5">
            <div className="text-center text-xl font-medium font-['Inter'] uppercase">
              ORDER YOUR FAVOURITE FOOD
            </div>
          </div>
        </div>
      </div>

      {/* ================ */}
      <CommonCover
        heding="PIZZA"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="w-10/12 mx-auto">
        <div className="my-16">
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-5 my-10">
            {pizza.map((dta) => (
              <SingleProduct key={dta._id} data={dta} />
            ))}
          </div>
          <div className="w-[366px] hover:bg-gray-800 text-gray-800 hover:text-white  mx-auto h-16 px-[30px] py-5 rounded-lg border-b-2 border-gray-800 justify-start items-start gap-2.5">
            <div className="text-center text-xl font-medium font-['Inter'] uppercase">
              ORDER YOUR FAVOURITE FOOD
            </div>
          </div>
        </div>
      </div>

      {/* ================ */}
      <CommonCover
        heding="SALADS"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="w-10/12 mx-auto">
        <div className="my-16">
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-5 my-10">
            {salad.map((dta) => (
              <SingleProduct key={dta._id} data={dta} />
            ))}
          </div>
          <div className="w-[366px] hover:bg-gray-800 text-gray-800 hover:text-white  mx-auto h-16 px-[30px] py-5 rounded-lg border-b-2 border-gray-800 justify-start items-start gap-2.5">
            <div className="text-center text-xl font-medium font-['Inter'] uppercase">
              ORDER YOUR FAVOURITE FOOD
            </div>
          </div>
        </div>
      </div>

      {/* ================ */}
      <CommonCover
        heding="SOUPS"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="w-10/12 mx-auto">
        <div className="my-16">
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-5 my-10">
            {soup.map((dta) => (
              <SingleProduct key={dta._id} data={dta} />
            ))}
          </div>
          <div className="w-[366px] hover:bg-gray-800 text-gray-800 hover:text-white  mx-auto h-16 px-[30px] py-5 rounded-lg border-b-2 border-gray-800 justify-start items-start gap-2.5">
            <div className="text-center text-xl font-medium font-['Inter'] uppercase">
              ORDER YOUR FAVOURITE FOOD
            </div>
          </div>
        </div>
      </div>
      {/* ================ */}
      <CommonCover
        heding="DRINK"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="w-10/12 mx-auto">
        <div className="my-16">
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-5 my-10">
            {drinks.map((dta) => (
              <SingleProduct key={dta._id} data={dta} />
            ))}
          </div>
          <div className="w-[366px] hover:bg-gray-800 text-gray-800 hover:text-white  mx-auto h-16 px-[30px] py-5 rounded-lg border-b-2 border-gray-800 justify-start items-start gap-2.5">
            <div className="text-center text-xl font-medium font-['Inter'] uppercase">
              ORDER YOUR FAVOURITE FOOD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
