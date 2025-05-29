import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

const singleProduct = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div>
          <Image
            src="/images/testimony2.webp"
            alt="Testimony"
            width={60}
            height={80}
            className="relative z-10 rounded-full w-2/3 left-20"
          />
        </div>
      </div>
    </div>
  );
};

export default singleProduct;
