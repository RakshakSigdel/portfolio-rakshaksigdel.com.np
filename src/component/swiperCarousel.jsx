import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules'; // Import Autoplay module

const SwiperCarousel = ({ images }) => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      initialSlide={3} // Show the fourth slide initially
      loop={true} // Enable infinite loop
      autoplay={{
        delay: 3000, // Change slide every 3 seconds
        disableOnInteraction: false, // Keep autoplay even when user interacts
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={false} // No pagination
      modules={[EffectCoverflow, Autoplay]} // Add Autoplay module
      className="w-full pt-12 pb-12 mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="bg-center bg-cover w-[300px] h-[300px]">
          <img
            className="block w-full h-full object-cover user-select-none" // Disable selection with Tailwind's user-select-none
            style={{ userSelect: 'none' }} // Inline style fallback to disable selection
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
