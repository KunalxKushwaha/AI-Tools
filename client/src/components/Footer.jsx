
import { assets } from "../assets/assets";
import React, { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Footer() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <footer ref={ref} className="px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-gray-500 mt-20 opacity-0 translate-y-5">
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-200 pb-8">
        <div className="md:max-w-96">
          <img className="h-9" src={assets.logo} alt="Logo" />
          <p className="mt-6 text-sm leading-relaxed">
            Experience the future of content creation with our AI-powered Tools. From writing to Image Generation, we have everything you need to elevate your content game.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div className="hover:scale-105 transition-transform">
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-indigo-500">Home</a></li>
              <li><a href="#" className="hover:text-indigo-500">About us</a></li>
              <li><a href="#" className="hover:text-indigo-500">Contact us</a></li>
              <li><a href="#" className="hover:text-indigo-500">Privacy policy</a></li>
            </ul>
          </div>

          <div className="hover:scale-105 transition-transform">
            <h2 className="font-semibold text-gray-800 mb-5">Subscribe</h2>
            <p className="text-sm">Get the latest news, articles, and resources weekly.</p>
            <div className="flex items-center gap-2 pt-4">
              <input
                className="border border-gray-300 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-indigo-600 w-24 h-9 text-white rounded shadow hover:bg-indigo-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-6 text-center text-xs md:text-sm">
        © 2025 <a href="https://prebuiltui.com" className="hover:text-indigo-500">Kunal Kushwaha</a>. All Rights Reserved.
      </p>
    </footer>
  )
}

