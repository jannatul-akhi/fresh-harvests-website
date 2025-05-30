"use client";

import { useEffect, useState } from "react";
import CardComponent from "@/components/shared/CardComponent";

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

const AllProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-3xl font-semibold text-center mb-6">All Products</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProductsPage;
