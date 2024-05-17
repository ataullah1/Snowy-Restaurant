const Heading = ({ text, hed }) => {
  return (
    <div className="text-center mt-32 mb-12">
      <div className="text-yellow-600 text-xl font-normal font-['Inter']">
        {text}
      </div>
      <h1 className="border-y-4 border-gray-200 py-3 mt-3 inline-block px-5 text-neutral-900 text-[40px] font-normal">
        {hed}
      </h1>
    </div>
  );
};

export default Heading;
