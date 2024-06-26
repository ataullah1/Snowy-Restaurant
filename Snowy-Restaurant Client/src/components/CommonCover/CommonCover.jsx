import img1 from '../../assets/menu/banner3.jpg';

const CommonCover = ({ heding, des }) => {
  return (
    <div
      className="py-24 flex items-center justify-center w-full bg-no-repeat bg-cover bg-fixed"
      style={{
        backgroundImage: 'url(' + `${img1}` + ')',
      }}
    >
      <div className="w-9/12 mx-auto py-12 bg-[#00000091] text-center flex flex-col items-center justify-center gap-2 px-10 rounded-md">
        <h1 className="text-white text-7xl font-bold font-['Cinzel'] uppercase">
          {heding}
        </h1>
        <p className="text-white text-2xl font-['Cinzel']">{des}</p>
      </div>
    </div>
  );
};

export default CommonCover;
