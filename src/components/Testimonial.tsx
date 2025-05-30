import Image from "next/image";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto max-w-[1920px] py-30">
      <div className="text-center">
        <p className="   text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
          Testimonial
        </p>
        <h2 className="text-[2rem] md:text-[2rem] lg:text-[3rem] font-semibold text-gray-900 leading-tight">
          Our Customers Say
        </h2>
        <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
          At Fresh Harvests, we are passionate about providing you with the
          freshest <br /> and most flavorful fruits and vegetables.
        </p>
      </div>

      {/* leaf  */}
      <div className="flex justify-between">
        <div className="-mt-20">
          <Image
            src="/images/leaf1.png"
            alt="Leaf"
            width={80}
            height={20}
            className="rounded-full object-cover -rotate-80"
          />
        </div>
        <div className="-mt-10">
          <Image
            src="/images/leaf1.png"
            alt="Leaf"
            width={80}
            height={20}
            className="rounded-full object-cover -rotate-45"
          />
        </div>
      </div>

      {/* testimony  */}
      <TestimonialSlider></TestimonialSlider>
    </div>
  );
};

export default Testimonial;
