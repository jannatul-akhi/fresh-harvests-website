
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="w-8/12 mx-auto max-w-[1920px] py-30">
      <div className="text-center">
        <p className="   text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
          Testimonial
        </p>
        <h2 className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-semibold text-gray-900 leading-tight">
          Our Customers Say
        </h2>
        <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
          At Fresh Harvests, we are passionate about providing you with the
          freshest <br /> and most flavorful fruits and vegetables.
        </p>
      </div>

      {/* testimony  */}
      <TestimonialSlider></TestimonialSlider>
    </div>
  );
};

export default Testimonial;
