/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

const AuthModal = ({ isOpen, onClose, onLoginSuccess }: AuthModalProps) => {
  const [isRegister, setIsRegister] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = isRegister
        ? "https://test-2-tan-chi.vercel.app/api/v1/users/register"
        : "https://test-2-tan-chi.vercel.app/api/v1/auth/login";

      const payload = isRegister
        ? { fullName, email, password }
        : { email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Something went wrong");

      toast.success(
        isRegister ? "Registration successful!" : "Login successful!"
      );

      localStorage.setItem("authUser", JSON.stringify(data));
      onLoginSuccess();
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
      setError(err.message || "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-md pt-10 pb-8 px-6 sm:px-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              <IoMdClose />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 relative inline-block pb-1">
                {isRegister ? "Register" : "Login"}
                <span className="block w-12 h-1 bg-[#FF6A1A] mx-auto mt-1 rounded"></span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                  />
                </div>
              )}

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                />
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#FF6A1A] text-white font-semibold py-2 rounded-lg transition ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loading
                  ? isRegister
                    ? "Registering..."
                    : "Logging in..."
                  : isRegister
                  ? "Register"
                  : "Login"}
              </button>
            </form>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-300" />
              <p className="text-sm text-gray-500 whitespace-nowrap">
                Or sign {isRegister ? "up" : "in"} with
              </p>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm">
                <FaGoogle className="text-red-500" /> Google
              </button>
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm">
                <FaFacebook className="text-blue-600" /> Facebook
              </button>
            </div>

            <p className="text-center text-sm text-gray-600">
              {isRegister
                ? "Already have an account?"
                : "Don’t have an account?"}{" "}
              <span
                onClick={() => setIsRegister(!isRegister)}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                {isRegister ? "Log in" : "Register"}
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
