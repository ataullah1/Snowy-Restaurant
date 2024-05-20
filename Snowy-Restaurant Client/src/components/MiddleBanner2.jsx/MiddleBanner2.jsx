import featuredImg from '../../assets/home/featured.jpg';
import Heading from '../Heading/Heading';
const MiddleBanner2 = () => {
  return (
    <div
      className="mt-32 w-full min-h-[800px] bg-neutral-900/opacity-70 bg-no-repeat bg-cover bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(#00000095, #00000095),url(' + `${featuredImg}` + ')',
      }}
    >
      <div className="w-10/12 mx-auto">
        <div className="pt-1 text-white">
          <Heading text="---Check it out---" hed="FROM OUR MENU" />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 pb-32">
          <div
            className="bg-no-repeat bg-cover h-[400px] w-full md:w-1/2"
            style={{
              backgroundImage: 'url(' + `${featuredImg}` + ')',
            }}
          ></div>
          <div className="w-full md:w-1/2 text-white">
            <div className="max-w-[604px]">
              <span className=" text-2xl font-normal font-['Inter'] leading-9">
                March 20, 2023
                <br />
                WHERE CAN I GET SOME?
                <br />
              </span>
              <p className=" text-base font-['Inter'] leading-[30px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="w-[196px] h-14 bg-transparent hover:bg-gray-800 duration-300 rounded-lg border-b-2 border-white hover:border-gray-800 mt-4 flex justify-center items-center text-center text-white text-xl font-medium font-['Inter'] uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner2;
