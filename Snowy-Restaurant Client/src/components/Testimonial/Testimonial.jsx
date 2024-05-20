// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import quotation from '../../assets/icon/quotation .png';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Loding from '../../pages/Loding/Loding';

export default function Testimonial() {
  const axios = useAxios();
  const { data: review = [], isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/reviews`
      );
      return data;
    },
    queryKey: ['reviews'],
  });
  // console.log(data);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {review.map((dta) => (
          <SwiperSlide key={dta._id}>
            <div className="pb-9 px-16 flex flex-col items-center justify-center">
              <div>
                <Rating style={{ maxWidth: 180 }} value={dta.rating} readOnly />
              </div>
              <img className="my-5" src={quotation} alt="" />
              <p className=" text-center text-neutral-700 text-xl font-normal">
                {dta.details}
              </p>
              <div className="text-center text-yellow-600 text-[32px] font-medium font-['Inter']">
                {dta.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
