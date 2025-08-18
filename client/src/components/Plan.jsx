import React, { useRef } from 'react'
import { PricingTable } from '@clerk/clerk-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Plan = () => {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <div ref={ref} className="max-w-2xl mx-auto z-20 my-30 opacity-0 translate-y-5">
      <div className="text-center">
        <h2 className="text-[42px] font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Start for Free and Scale up as you grow. Find the Perfect Plan for your content creation needs.
        </p>
      </div>

      <div className="mt-14 max-sm:mx-8 hover:scale-105 transition-all duration-500">
        <PricingTable />
      </div>
    </div>
  )
}

export default Plan
