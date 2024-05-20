import SingleProduct from '../SingleProduct/SingleProduct';

const FromOurMenu = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
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
