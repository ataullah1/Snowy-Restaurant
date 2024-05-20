import img1 from '../../assets/home/chef-service.jpg';
const MiddleBanner = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center w-full md:h-[572px] mt-28 flex items-center justify-center"
      style={{
        backgroundImage: 'url(' + `${img1}` + ')',
      }}
    >
      <div className="w-10/12 mx-auto h-[333.67px] bg-white text-center flex flex-col items-center justify-center">
        <h1 className="max-w-[320.51px] h-[58.78px] text-neutral-900 text-[45px] font-normal font-['Cinzel'] mx-auto">
          Bistro Boss
        </h1>
        <p className="max-w-[762px] h-[74.36px] text-center text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default MiddleBanner;
