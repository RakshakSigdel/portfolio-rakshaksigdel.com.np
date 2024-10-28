// Testimonial.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = ({ testimonials }) => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center">Testimonials</h2>
      <p className="text-center mt-2 text-gray-400">
        What others say?
      </p>

      <div className="mt-10 max-w-2xl mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          className="swiper-container"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="p-8 bg-gray-800 rounded-lg">
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
      </div>
    </div>
  );
};

export default Testimonial;
