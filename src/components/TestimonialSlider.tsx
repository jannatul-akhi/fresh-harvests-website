'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const testimonials = [
  {
    name: "Jane Smith",
    title: "Nutritionist",
    message:
      "Another amazing testimonial! The freshness and flavor of the fruit bundle made my day. Excellent service and presentation!Another amazing testimonial! The freshness and flavor of the fruit bundle made my day. Excellent service and presentation!",
    image: "/images/testi.png",
  },
  {
    name: "Mark Wilson",
    title: "Health Coach",
    message:
      "I've recommended this to all my clients. Top-notch quality and service! Another amazing testimonial! The freshness and flavor of the fruit bundle made my day. Excellent service and presentation!",
    image: "/images/testi.png",
  },
  {
    name: "Emily Johnson",
    title: "Dietitian",
    message:
      "Impressed with the taste and packaging. A must-try for healthy living! Another amazing testimonial! The freshness and flavor of the fruit bundle made my day. Excellent service and presentation!",
    image: "/images/testi.png",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      className="mt-10"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <div className="w-full lg:w-1/2">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={80}
                className="relative z-10 rounded-full lg:w-2/3 left-10 lg:left-20"
              />
            </div>
            <div className="bg-[#F4F6F6] rounded-lg w-full lg:w-1/2 px-2 lg:px-6 pt-4 pb-6">
              <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
                {testimonial.message}
              </p>
              <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
                <span className="font-semibold">{testimonial.name} -</span> {testimonial.title}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
