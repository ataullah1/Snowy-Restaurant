import img1 from '../../assets/home/slide1.jpg';
const ChefRecommendCard = () => {
  return (
    <div className="w-full bg-zinc-100">
      <div
        className="w-full h-[300px] bg-red-400 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url(' + `${img1}` + ')',
        }}
      ></div>
      <div className="py-5 flex flex-col items-center justify-center">
        <h3 className="text-center text-neutral-900 text-2xl font-semibold font-['Inter']">
          Caeser Salad
        </h3>
        <p className="max-w-[345px] mx-auto px-3 text-center text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <button className="py-2 px-5 bg-gray-200 hover:bg-gray-800 duration-300 rounded-lg border-b-2 border-yellow-600 hover:border-gray-800 mt-4 flex justify-center items-center text-center text-yellow-600 text-lg font-medium font-['Inter'] uppercase">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ChefRecommendCard;
