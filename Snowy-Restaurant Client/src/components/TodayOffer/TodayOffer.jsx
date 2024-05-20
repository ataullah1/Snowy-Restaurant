import SingleProduct from '../SingleProduct/SingleProduct';

const TodayOffer = () => {
  return (
    <div className="my-16">
      <div className="grid grid-rows-1 lg:grid-cols-2 gap-5 my-10">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
      <div className="w-[366px] hover:bg-gray-800 text-gray-800 hover:text-white  mx-auto h-16 px-[30px] py-5 rounded-lg border-b-2 border-gray-800 justify-start items-start gap-2.5">
        <div className="text-center text-xl font-medium font-['Inter'] uppercase">
          ORDER YOUR FAVOURITE FOOD
        </div>
      </div>
    </div>
  );
};

export default TodayOffer;
