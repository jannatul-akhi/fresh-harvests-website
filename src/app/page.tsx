import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import FruitBundle from "@/components/FruitBundle";
import ProductComponent from "@/components/ProductComponent";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <div className="bg-white">
    
      <div className="">
        <Banner></Banner>
        <ProductComponent></ProductComponent>
        <FruitBundle></FruitBundle>
        <Testimonial></Testimonial>
        <Blogs></Blogs>
      </div>
    </div>
  );
}
