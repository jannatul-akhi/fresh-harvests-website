"use client";

import { Button, Link } from "@nextui-org/react";
import logo from "../../../public/images/full-logo.png";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = ["Home", "Shop", "About us", "Blog"];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <nav className="w-full bg-transparent border-gray-200 z-50">
      <div className=" flex items-center justify-between  py-3 md:py-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="">
            <Image alt="" src={logo} width={200} height={200}></Image>
          </Link>
        </div>

        {/* Center: Main Menu (desktop only) */}
        <div>
          <ul className="relative mx-auto flex w-fit gap-x-[4rem]">
            {tabs.map((tab) => (
              <li
                key={tab}
                className="relative cursor-pointer pb-2 text-[#4A4A52] text-[.9rem] font-normal"
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0  right-2 h-[.13rem] w-2/4  rounded-[.6rem] bg-[#749B3F]"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Search bar */}
       
        <div className="flex items-center gap-5 text-white z-50">
          <div className="flex items-center gap-3 text-white">
            <FaHeart className="w-[1rem] h-[1rem] text-white" />
            <p className="text-[.9rem] font-normal text-white">Favorites</p>
          </div>
          <div className="flex items-center gap-3 text-white">
            <HiShoppingCart className="w-[1.3rem] h-[1.3rem] text-white" />
            <p className="text-[.9rem] font-normal text-white">Cart</p>
          </div>

          <Button className="bg-transparent border border-white text-white rounded-[4px]">
            Sign in
          </Button>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
