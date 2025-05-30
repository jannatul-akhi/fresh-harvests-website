"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";
import CardComponent from "./shared/CardComponent";
import Navbar from "./shared/Navbar";

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

const DetailedProduct = ({ productId }: { productId: string }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    slideTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  const clearAutoSlide = () => {
    if (slideTimerRef.current) clearInterval(slideTimerRef.current);
  };

  useEffect(() => {
    fetch(`https://code-commando.com/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((err) => console.error("Error loading product:", err));

    fetch("https://code-commando.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.data || []))
      .catch((err) => console.error("Error loading related:", err));

    startAutoSlide();
    return () => clearAutoSlide();
  }, [productId]);

  const handleQuantity = (type: "inc" | "dec") => {
    setQuantity((prev) => (type === "inc" ? prev + 1 : Math.max(1, prev - 1)));
  };

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div className="w-11/12  px-4 py-10 max-w-7xl mx-auto">
      {/* Image Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div className="rounded-xl overflow-hidden border relative">
          <div
            className="relative w-full aspect-square bg-white"
            onMouseEnter={clearAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={product.images[0]} // Always show first image
                alt={`Slide ${currentIndex}`}
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-4 pb-1">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex % 3 === idx
                    ? "bg-green-600 scale-110"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div className="space-y-4">
          <span className="text-sm text-green-600 font-medium">
            {product.categoryId || "Category"}
          </span>
          <h1 className="text-3xl font-bold text-[#191A1C]">
            {product.productName}
          </h1>
          <p className="text-[#FF6A1A] text-xl font-semibold">
            ${product.price}/kg
          </p>
          <p className="text-sm text-gray-600">{product.description}</p>

          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Quantity</span>
            <button
              onClick={() => handleQuantity("dec")}
              className="px-2 border rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => handleQuantity("inc")}
              className="px-2 border rounded"
            >
              +
            </button>
            <span className="ml-2">kg</span>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-gray-100 text-sm font-medium px-4 py-2 rounded-md shadow-sm">
              Save as favorite
            </Button>
            <Button className="bg-[#FF6A1A] text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-orange-500">
              Add to cart
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Description */}
      <div className="mt-10 bg-gray-100 p-4 rounded-lg text-base text-gray-700">
        {product.description}
      </div>

      {/* Related Products */}
      <div className="mt-16 text-center">
        <span className="text-sm text-green-600 font-medium">Our Products</span>
        <h2 className="text-2xl font-bold text-[#191A1C] mt-1 mb-6">
          Related products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allProducts
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((item) => (
              <CardComponent key={item.id} product={item} />
            ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailedProduct;
