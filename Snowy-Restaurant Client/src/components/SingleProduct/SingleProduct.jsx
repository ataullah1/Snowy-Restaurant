const SingleProduct = () => {
  return (
    <div className="flex items-start gap-5">
      <div className="min-w-[118px] h-[104px] bg-zinc-300 rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]" />
      <div>
        <div className="text-neutral-900 text-xl font-normal font-['Cinzel']">
          ROAST DUCK BREAST ------------------
        </div>
        <div className="max-w-[443px] text-neutral-500 text-base font-normal font-['Inter'] leading-relaxed">
          Roasted duck breast (served pink) with gratin potato and a griottine
          cherry sauce
        </div>
      </div>
      <div className="text-yellow-600 text-xl font-normal font-['Inter'] leading-relaxed">
        $14.5
      </div>
    </div>
  );
};

export default SingleProduct;
