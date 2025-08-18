

import React from 'react'
import bgImage from '../assets/gradientBackground.png'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="
        px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center
        bg-cover bg-no-repeat min-h-screen
        animate-fadeIn opacity-0
      "
    >
      {/* Heading + Subheading */}
      <div className="text-center mb-6">
        <h1
          className="
            text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl
            font-extrabold mx-auto leading-[1.2]
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            drop-shadow-xl
            animate-fadeInUp opacity-0
            transition-all duration-700 ease-in-out
            hover:scale-105 hover:tracking-wider
          "
        >
          Create Amazing Content <br />
          with <span className="text-[var(--primary-color)] animate-pulse">AI Tools</span>
        </h1>

        <p
          className="
            mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto
            max-sm:text-xs text-gray-600
            animate-fadeIn opacity-0 delay-300
          "
        >
          Transform your content creation with our suite of Premium Tools.  
          Write Articles, Generate Images, and much more with ease.
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        className="
          flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs
          animate-fadeInUp opacity-0 delay-500
        "
      >
        <button
          onClick={() => navigate('/ai')}
          className="
            bg-[var(--primary-color)] text-white px-10 py-3 rounded-lg
            transition-all duration-500 ease-out
            hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]
            active:scale-95
            animate-bounce-slow
          "
        >
          Start Creating Now
        </button>

        <button
          onClick={() => navigate('/ai')}
          className="
            bg-white px-10 py-3 rounded-lg border border-gray-200 text-gray-800
            transition-all duration-500 ease-out
            hover:scale-105 hover:shadow-lg
            active:scale-95
            animate-bounce-slow delay-200
          "
        >
          Watch Demo
        </button>
      </div>

      {/* Trusted Users */}
      <div
        className="
          flex items-center gap-4 text-gray-600 mt-10 mx-auto
          animate-fadeIn opacity-0 delay-700
        "
      >
        <img src={assets.user_group} alt="" className="h-8 animate-float" />
        Trusted by over <span className="font-semibold text-gray-800">100,000+</span> users
      </div>
    </div>
  )
}

export default Hero



