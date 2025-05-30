import About from "@/components/About";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import FruitBundle from "@/components/FruitBundle";
import ProductComponent from "@/components/ProductComponent";
// import SeasonalFruitBundle from "@/components/SeasonalFruitBundle";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <div className="bg-white">
    
      <div className="">
        <Banner></Banner>
        <ProductComponent></ProductComponent>
        <About></About>
        <FruitBundle></FruitBundle>
        {/* <SeasonalFruitBundle></SeasonalFruitBundle> */}
        <Testimonial></Testimonial>
        <Blogs></Blogs>
      </div>
    </div>
  );
}
