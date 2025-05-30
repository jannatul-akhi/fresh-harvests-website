import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

const CardComponent = ({ product }: { product: Product }) => {
  return (
    <div>
      <Link
        href={`/product-details/${product.id}`}
        className="rounded-[1.3rem] p-4 shadow hover:shadow-md transition duration-300 flex flex-col justify-between"
      >
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.images[0]}
            alt={product.productName}
            fill
            className="object-cover rounded-2xl bg-[#F4F6F6]"
          />
        </div>
        <div className="flex-1 justify-center">
          <h2 className="text-[#212337] text-lg font-semibold font-rubik text-center">
            {product.productName}
          </h2>
          <p className="text-lg text-[#4A4A52] font-normal mb-4 font-questrial text-center">
            ${product.price}/kg
          </p>
        </div>
        <button className="bg-transparent border border-[#D9D9D9] text-[#212337] px-4 py-2 rounded-lg w-full font-normal text-lg hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] transition">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default CardComponent;