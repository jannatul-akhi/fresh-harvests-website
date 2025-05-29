'use client'; // for Next.js if using app router

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

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
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="flex items-center justify-center gap-6">
          <div className="w-1/2">
            <Image
              src="/images/testimony2.webp"
              alt="Testimony"
              width={60}
              height={80}
              className="relative z-10 rounded-full w-2/3 left-20"
            />
          </div>
          <div className="bg-[#F4F6F6] rounded-lg w-1/2 px-6 pt-4 pb-6">
            <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sint,
              itaque, illum incidunt explicabo odit rerum architecto impedit ex
              necessitatibus esse nostrum dolorum consequatur quis ratione error
              aliquam expedita fuga repellat, odio accusantium ad enim animi
              voluptas.
            </p>
            <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
              <span className="font-semibold">John Doe -</span> Professional Chef
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="flex items-center justify-center gap-6">
          <div className="w-1/2">
            <Image
              src="/images/testimony2.webp"
              alt="Testimony"
              width={60}
              height={80}
              className="relative z-10 rounded-full w-2/3 left-20"
            />
          </div>
          <div className="bg-[#F4F6F6] rounded-lg w-1/2 px-6 pt-4 pb-6">
            <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
              Another amazing testimonial! The freshness and flavor of the fruit
              bundle made my day. Excellent service and presentation!
            </p>
            <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
              <span className="font-semibold">Jane Smith -</span> Nutritionist
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="flex items-center justify-center gap-6">
          <div className="w-1/2">
            <Image
              src="/images/testimony2.webp"
              alt="Testimony"
              width={60}
              height={80}
              className="relative z-10 rounded-full w-2/3 left-20"
            />
          </div>
          <div className="bg-[#F4F6F6] rounded-lg w-1/2 px-6 pt-4 pb-6">
            <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
              Another amazing testimonial! The freshness and flavor of the fruit
              bundle made my day. Excellent service and presentation!
            </p>
            <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
              <span className="font-semibold">Jane Smith -</span> Nutritionist
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default TestimonialSlider;
