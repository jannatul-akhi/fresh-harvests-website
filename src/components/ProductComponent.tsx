"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardComponent from "./shared/CardComponent";

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

const ProductComponent = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const filters = ["All", "Fruits", "Vegetable", "Salad"];

  useEffect(() => {
    fetch("https://code-commando.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full mt-6">
      {/* Leaf Decoration */}
      <div className="flex justify-between px-20">
        <div className="mt-20">
          <Image
            src="/images/leaf1.png"
            alt="Leaf"
            width={80}
            height={20}
            className="rounded-full object-cover -rotate-80"
          />
        </div>
        <div>
          <Image
            src="/images/leaf1.png"
            alt="Leaf"
            width={80}
            height={20}
            className="rounded-full object-cover -rotate-45"
          />
        </div>
      </div>

      {/* Heading and Filters */}
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <p className="text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
            Our Products
          </p>
          <h2 className="text-[2rem] md:text-[2rem] lg:text-[3rem] font-semibold text-gray-900 leading-tight">
            Our Fresh Products
          </h2>
          <p className="text-[#4A4A52] text-[.6rem] lg:text-[.87rem] font-normal mt-4">
            At Fresh Harvests, we are passionate about providing you with the
            freshest <br /> and most flavorful fruits and vegetables.
          </p>
          <ul className="flex gap-2 md:gap-4 lg:gap-6 justify-center mt-4">
            {filters.map((filter) => (
              <li
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`border border-[#D9D9D9] px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#749B3F] text-white"
                    : "text-[#A6A6A6] bg-transparent"
                }`}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-6 w-11/12 mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.slice(0, 8).map((product) => (
              <CardComponent key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* See All Products Button */}
        <div className="text-center mt-8">
          <Link href="/all-products">
            <button className="text-[#FF6A1A] cursor-pointer border border-[#FF6A1A] px-4 py-2 rounded-lg font-semibold">
              See All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;