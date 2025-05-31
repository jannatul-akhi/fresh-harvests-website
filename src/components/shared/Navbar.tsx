"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/full-logo.png";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart, HiMenu, HiX } from "react-icons/hi";
import { Button, Link } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import AuthModal from "../AuthModal";
import { toast } from "sonner";

const tabs = ["Home", "Shop", "About us", "Blog"];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (user) setIsAuthenticated(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setIsAuthenticated(false);
    toast.success("You have been logged out successfully.");
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowModal(false);
  };

  return (
    <>
      <nav className="w-full bg-transparent border-gray-200 z-50 relative">
        <div className="flex items-center justify-between py-3 md:py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image alt="logo" src={logo} width={160} height={50} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex gap-x-[4rem]">
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
                      className="absolute bottom-0 right-2 h-[.13rem] w-2/4 rounded-[.6rem] bg-[#749B3F]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Icons and Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-5 text-white z-50">
            <div className="flex items-center gap-3">
              <FaHeart className="w-[1rem] h-[1rem] text-white" />
              <p className="text-[.9rem] font-normal text-white">Favorites</p>
            </div>
            <div className="flex items-center gap-3 relative">
              <div className="relative">
                <HiShoppingCart className="w-[1.3rem] h-[1.3rem] text-white" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[0.65rem] w-4 h-4 flex items-center justify-center rounded-full">
                  2
                </span>

                
              </div>
                <p className="text-[.9rem] font-normal text-white">Cart</p>
            </div>

            {isAuthenticated ? (
              <Button
                className="bg-transparent border border-white text-white rounded-[4px]"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="bg-transparent border border-white text-white rounded-[4px]"
                onClick={() => setShowModal(true)}
              >
                Sign in
              </Button>
            )}
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <HiX />
              ) : (
                <HiMenu className="text-[#212337]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white px-6 py-4 shadow-md"
            >
              <ul className="flex flex-col gap-4 text-[#4A4A52] font-medium">
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className="cursor-pointer"
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#4A4A52]">
                  <FaHeart className="text-[#4A4A52]" />
                  <span>Favorites</span>
                </div>
                <div className="flex items-center gap-2 text-[#4A4A52]">
                  <HiShoppingCart className="text-[#4A4A52]" />
                  <span>Cart</span>
                </div>
                {isAuthenticated ? (
                  <Button
                    className="border border-[#4A4A52] text-[#4A4A52] mt-2"
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    className="border border-[#4A4A52] text-[#4A4A52] mt-2"
                    onClick={() => {
                      setShowModal(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign in
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Navbar;
