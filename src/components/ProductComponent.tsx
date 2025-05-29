"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  images: string[];
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
  console.log(products);

  return (
    // Leave section
    <div className="w-full mt-6">
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
            className="rounded-full object-cover -rotate-45 "
          />
        </div>
      </div>

      {/* main product container  */}

      {/* button  */}
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <p className="   text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
            Our Products
          </p>
          <h2 className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-semibold text-gray-900 leading-tight">
            Our Fresh Products
          </h2>
          <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
            At Fresh Harvests, we are passionate about providing you with the
            freshest <br /> and most flavorful fruits and vegetables.
          </p>

          <div>
            <ul className="flex gap-6 justify-center mt-4">
              {filters.map((filter) => (
                <li
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`border border-[#D9D9D9] px-5 py-2 rounded-lg inline-block cursor-pointer transition-all duration-200
            ${
              activeFilter === filter
                ? "bg-[#749B3F] text-white"
                : "text-[#A6A6A6] bg-transparent"
            }
          `}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Product show */}

      <div className="py-6 w-11/12 mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className=" rounded-[1.3rem] p-4 shadow hover:shadow-md transition duration-300 flex flex-col justify-between"
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
                <button className="bg-transparent border-1 border-[#D9D9D9] text-[#212337] px-4 py-2 rounded-lg w-full font-normal text-lg hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <button className="text-[#FF6A1A] border-1 border-[#FF6A1A] px-4 py-2 rounded-lg font-semibold">
            {" "}
            See All Products
          </button>
        </div>
      </div>

      {/* About Us section  */}
      {/* <section>
        <div className="flex items-center gap-10">
          <div className="w-1/2 ">
            <Image
              src="/images/about-us.png"
              alt=""
              width={770}
              height={880}
              className=""
            />
            <div>
              <Image
                src="/images/full-logo.png"
                alt=""
                width={200}
                height={100}
                className="rounded-sm"
              />
              <div className="w-1/4 rounded-[1.3rem] p-2 shadow hover:shadow-md transition duration-300 flex flex-col justify-between">
                <div className="relative w-full h-48 mb-2">
                  <Image
                    src="/images/latus.png"
                    alt="latus"
                    fill
                    className="object-cover rounded-2xl bg-[#F4F6F6]"
                  />
                </div>
                <div className="flex-1 justify-center">
                  <h2 className="text-[#212337] text-sm font-semibold font-rubik text-center">
                    Mushroom
                  </h2>

                  <p className="text-sm text-[#4A4A52] font-normal mb-4 font-questrial text-center">
                    $2.3/kg
                  </p>
                </div>
                <button className="bg-transparent border-1 border-[#D9D9D9] text-[#212337] px-4 py-2 rounded-lg w-full font-normal text-sm hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="w-1/2 text-start">
            <p className="   text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
              About us
            </p>
            <h2 className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-semibold text-gray-900 leading-tight">
              About Fresh Harvest
            </h2>
            <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables.At Fresh
              Harvests, we are passionate about providing you with the freshest
              and most flavorful fruits and vegetables.At Fresh Harvests, we are
              passionate about providing you with the freshest and most
              flavorful fruits and vegetables.
            </p>
            <button className="text-[#FF6A1A] border-1 border-[#FF6A1A] px-4 py-2 rounded-lg font-semibold mt-6">
              {" "}
              Read More
            </button>
          </div>
        </div>
      </section> */}

      <section className="pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side - Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            {/* Background Shape */}
            <div className="absolute w-[300px] h-[300px] bottom-0 right-26 bg-[#749B3F] rounded-full z-0"></div>

            {/* Man Image */}
            <Image
              src="/images/about-us.png"
              alt="Happy man holding veggies"
              width={900}
              height={800}
              className="relative z-10 rounded-b-4xl"
            />

            {/* Logo & Product Card Container */}
            <div className="absolute bottom-6 right-12 z-20 flex flex-col gap-3">
              <Image
                src="/images/full-logo.png"
                alt="Fresh Harvest logo"
                width={180}
                height={60}
                className="rounded-sm bg-white"
              />

              {/* Product Card */}
              <div className="w-40 rounded-[1.3rem] p-2 shadow hover:shadow-md bg-white transition duration-300 flex flex-col justify-between">
                <div className="relative w-full h-32 mb-2">
                  <Image
                    src="/images/latus.png"
                    alt="Lettuce"
                    fill
                    className="object-cover rounded-2xl bg-[#F4F6F6]"
                  />
                </div>
                <h2 className="text-[#212337] text-sm font-semibold font-rubik text-center">
                  Mushroom
                </h2>
                <p className="text-sm text-[#4A4A52] font-normal mb-2 font-questrial text-center">
                  $2.3/kg
                </p>
                <button className="bg-transparent border border-[#D9D9D9] text-[#212337] px-4 py-2 rounded-lg w-full font-normal text-sm hover:bg-[#FF6A1A] hover:text-white hover:border-[#FF6A1A] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Text Section */}
          <div className="w-full lg:w-1/2 text-start">
            <div className="lg:w-3/4">
              <p className="text-[#749B3F] text-[1.3rem] bg-[#749B3F1A] px-3 py-1 rounded-lg font-medium mb-2 inline-block">
                About us
              </p>
              <h2 className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-semibold text-gray-900 leading-tight">
                About Fresh Harvest
              </h2>
              <p className="text-[#4A4A52] text-[.87rem] font-normal mt-4">
                Welcome to Fresh Harvest, your premier destination for
                high-quality and fresh produce. We are passionate about
                providing you with the finest fruits, vegetables, and salad
                ingredients to nourish your body and delight your taste buds.
                With a commitment to excellence, sustainability, and customer
                satisfaction, Fresh Harvest is here to revolutionize your
                grocery shopping experience.
              </p>
              <button className="text-[#FF6A1A] border border-[#FF6A1A] px-4 py-2 rounded-lg font-semibold mt-6">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ProductComponent;
