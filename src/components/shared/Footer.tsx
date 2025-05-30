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
    <footer className="w-full bg-[#F4F6F6] py-10 px-4 text-sm">
      <div className="w-11/12 max-w-[1920px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 font-rubik">
          {/* Logo & App Download */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                alt="Fresh Harvests Logo"
                src="/images/full-logo.png"
                width={210}
                height={210}
              />
            </Link>
            <div className="">
              <h3 className="text-[#4A4A52] text-[.88rem] font-normal mb-2 lg:mt-30">
                Download App:
              </h3>
              <div className="flex gap-4">
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* Quick Links + Contact - Row layout on mobile */}
          <div className="col-span-1 lg:col-span-3 w-full">
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start text-left mt-10 lg:mt-0">
              {/* Quick Links 1 */}
              <div className="space-y-4">
                <h3 className="text-[#212337] text-[1.15rem] font-medium">Quick Links 1</h3>
                <ul className="text-[#4A4A52] text-[.88rem] space-y-2.5">
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Detail Blog</li>
                </ul>
              </div>

              {/* Quick Links 2 */}
              <div className="space-y-4">
                <h3 className="text-[#212337] text-[1.15rem] font-medium">Quick Links 2</h3>
                <ul className="text-[#4A4A52] text-[.88rem] space-y-2.5">
                  <li>Favorites</li>
                  <li>Cart</li>
                  <li>Login</li>
                  <li>Register</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-[#212337] text-[1.15rem] font-medium">Contact us</h3>
                <div className="text-[#4A4A52] space-y-2.5">
                  <div className="flex gap-2 items-center">
                    <MdOutlineLocalPhone className="text-[#749B3F] w-4 h-4" />
                    <p className="text-[.88rem]">1234 5678 90</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineEmail className="text-[#749B3F] w-4 h-4" />
                    <p className="text-[.88rem]">freshharvests@gmail.com</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <MdOutlineLocationOn className="text-[#749B3F] w-6 h-6" />
                    <p className="text-[.88rem] leading-snug">
                      Tanjung Sari Street, Pontianak, Indonesia
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#212337] text-[.75rem] font-medium">
                    Accepted Payment Methods:
                  </h3>
                  <div className="flex gap-4 pt-2">
                    <Image alt="Visa" src="/images/visa.jpg" width={50} height={32} />
                    <Image alt="Paypal" src="/images/Paypal.png" width={50} height={32} />
                    <Image alt="Apple Pay" src="/images/pay.png" width={50} height={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-[#D9D9D9] my-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-[#212337] text-xs gap-4">
          <p>© Copyright 2025, All right preserved by Jannatul Ferdous</p>
          <div className="flex gap-3 text-xl">
            <AiFillTwitterCircle />
            <MdOutlineFacebook />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
