import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import BubbleHover from '../component/BubbleHover'

import WebDevBg from '/images/webDev.jpg'
import AppDev from '/images/AppDev.jpg'

export default function App() {
    return (
        <div className="h-screen bg-gray-200 mx-20"> {/* This replaces body and #app background and height */}
            <Swiper
                className="w-full h-full"
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <Swiper
                        className="w-full h-full"
                        direction={'vertical'}
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide
                            className="flex justify-center items-center text-center text-lg bg-cover bg-center"
                            style={{ backgroundImage: `Url()` }}>
                                <BubbleHover text={"Web Development"}/>
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center bg-gray-200 text-center text-lg">HTML, CSS and JS</SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center bg-gray-200 text-center text-lg">React and Next.js</SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center bg-gray-200 text-center text-lg">Framer Motion</SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center bg-gray-200 text-center text-lg">Vertical Slide 5</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className="w-full h-full"
                        direction={'vertical'}
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide
                            className="flex justify-center items-center text-center text-lg bg-cover bg-center"
                            style={{ backgroundImage: `Url()` }}>
                                <BubbleHover text={"Application Development"}/>
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center bg-gray-200 text-center text-lg">HTML, CSS and JS</SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center bg-gray-200 text-center text-lg">React and Next.js</SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center bg-gray-200 text-center text-lg">Framer Motion</SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center bg-gray-200 text-center text-lg">Vertical Slide 5</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

// const WebDevelopment = (bgImage) => {
//     return (
//         <>
//             <div className=''
//                 style={{ backgroundImage: `Url(${bgImage})` }}>

//             </div>
//         </>
//     );
// }
