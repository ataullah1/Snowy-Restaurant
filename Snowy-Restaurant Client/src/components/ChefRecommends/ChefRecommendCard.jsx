const ChefRecommendCard = ({ data, handleCard }) => {
  return (
    <div className="w-full bg-zinc-100 rounded-md shadow-xl shadow-slate-200">
      <div
        className="w-full h-[250px] rounded-t-md bg-red-400 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url(' + `${data?.image}` + ')',
        }}
      ></div>
      <div className="py-5 flex gap-2 flex-col items-center justify-between rounded-b-md h-60">
        <h3 className="text-center text-neutral-900 text-2xl font-semibold font-['Inter']">
          {data?.name}
        </h3>
        <p className="max-w-[345px] mx-auto px-3 text-center text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
          {data?.recipe.slice(0, 110)}
        </p>
        <button
          onClick={() =>
            handleCard(data._id, data.image, data.name, data.price)
          }
          className="py-2 px-5 bg-gray-200 hover:bg-transparent duration-300 rounded-lg border-2 border-b-yellow-600 hover:border-yellow-600 mt-2 text-yellow-600 text-lg font-medium font-['Inter'] uppercase"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ChefRecommendCard;
