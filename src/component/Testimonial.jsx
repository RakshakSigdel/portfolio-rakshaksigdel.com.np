import React from "react";
// IMPORTS FOR SWIPER JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// ICONS IMPORT
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa";

const Testimonial = ({ testimonials }) => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center">Testimonials</h2>
      <p className="text-center mt-2 text-gray-400">What others say?</p>

      <div className="mt-10 max-w-2xl mx-auto relative">
        <div className="p-8 bg-gray-800 rounded-lg">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            className="swiper-container"
            onSwiper={(swiper) => setTimeout(() => swiper.update(), 100)} // Ensures swiper recognizes custom buttons
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} >
                <p className="text-xl text-center">"{testimonial.testimonial}"</p>
                <div className="flex items-center justify-center mt-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                  <div className="ml-3 text-center">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>

              </SwiperSlide>
            ))}

          </Swiper>
          <div className="flex justify-center mt-8 space-x-4 text-secondary">
            <FaArrowLeftLong className="custom-prev cursor-pointer text-2xl " />
            <FaArrowRightLong className="custom-next cursor-pointer text-2xl " />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Testimonial;
