import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function CategorisSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="max-h-full" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-full" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-full" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-full" src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-full" src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
