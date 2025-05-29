"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineEmail,
  MdOutlineFacebook,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F4F6F6] border-t  py-10 px-4 text-sm">
      <div className="w-11/12 max-w-[1920px] mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-rubik">
        <div className="space-y-4">
          <div className="flex-shrink-0">
            <Link href="/" className="">
              <Image
                alt=""
                src="/images/full-logo.png"
                width={210}
                height={210}
              ></Image>
            </Link>
            {/* Download App */}
            <div className="relative mt-30">
              <div className=" ">
                <h3 className="text-[#4A4A52] text-[.88rem] font-normal mb-4">
                  DOWNLOAD APP:
                </h3>
                <div className=" flex gap-4 pb-8">
                  <Image
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    width={135}
                    height={40}
                  />
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                    alt="Google Play"
                    width={135}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[#212337] text-[1.15rem] font-medium">
            Quick Links 1
          </h3>
          <ul className="text-[#4A4A52] text-[.88rem] font-normal space-y-2.5">
            <li>Home</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Detail Blog</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-[#212337] text-[1.15rem] font-medium">
            Quick Links 1
          </h3>
          <ul className="text-[#4A4A52] text-[.88rem] font-normal space-y-2.5">
            <li>Favorites</li>
            <li>Cart</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        <div className="space-y-4 ">
          <h3 className="text-[#212337] text-[1.15rem] font-medium">
            Contact us
          </h3>
          <div className="text-[#4A4A52] space-y-2.5">
            <div className="flex gap-2 items-center">
              <MdOutlineLocalPhone className="text-[#749B3F] w-4 h-4" />
              <p className="text-[.88rem] font-normal">1234 5678 90</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineEmail className="text-[#749B3F] w-4 h-4" />
              <p className="text-[.88rem] font-normal">
                fresherharvest@gmail.com
              </p>
            </div>
            <div className="flex gap-2 items-baseline-last">
              <MdOutlineLocationOn className="text-[#749B3F] w-6 h-6" />
              <p className="text-[.88rem] font-normal">
                Tanjuan Shari street, Pantianak, Indonesia
              </p>
            </div>
          </div>
          <h3 className="text-[#212337] text-[.75rem] font-medium">
            Accepted Payment Method
          </h3>
          <div className="flex gap-4">
            <Image alt="" src="/images/visa.jpg" width={68} height={48}></Image>
            <Image
              alt=""
              src="/images/Paypal.png"
              width={68}
              height={48}
            ></Image>
            <Image alt="" src="/images/pay.png" width={68} height={48}></Image>
          </div>
        </div>
      </div>

      <hr className=" text-[#D9D9D9] my-4" />
      <div className="text-[#212337] flex justify-between items-center">
        <div>
          <p>© Copyright 2025, All right preserved by Jannatul Ferdous</p>
        </div>
        <div className="flex gap-2">
          <AiFillTwitterCircle className="w-6 h-6" />
          <MdOutlineFacebook className="w-6 h-6" />
          <FaInstagramSquare className="w-6 h-6" />
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
