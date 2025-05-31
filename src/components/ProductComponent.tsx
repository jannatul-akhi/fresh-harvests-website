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

interface Category {
  id: string;
  categoryName: string;
}

const ProductComponent = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch both products and categories
    const fetchData = async () => {
      try {
        const [productRes, categoryRes] = await Promise.all([
          fetch("https://code-commando.com/api/v1/products"),
          fetch("https://code-commando.com/api/v1/category"),
        ]);

        const productData = await productRes.json();
        const categoryData = await categoryRes.json();

        setProducts(productData?.data || []);
        setCategories(categoryData?.data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get current filter category ID based on activeFilter name
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) =>
          categories.find(
            (cat) =>
              cat.categoryName.toLowerCase() === activeFilter.toLowerCase() &&
              cat.id === product.categoryId
          )
        );

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

          <ul className="flex gap-2 md:gap-4 lg:gap-6 justify-center mt-4 flex-wrap">
            <li
              key="All"
              onClick={() => setActiveFilter("All")}
              className={`border border-[#D9D9D9] px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                activeFilter === "All"
                  ? "bg-[#749B3F] text-white"
                  : "text-[#A6A6A6] bg-transparent"
              }`}
            >
              All
            </li>
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => setActiveFilter(category.categoryName)}
                className={`border border-[#D9D9D9] px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeFilter === category.categoryName
                    ? "bg-[#749B3F] text-white"
                    : "text-[#A6A6A6] bg-transparent"
                }`}
              >
                {category.categoryName}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-6 w-11/12 mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : filteredProducts.length > 0 ? (
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.slice(0, 8).map((product) => (
              <CardComponent key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
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
