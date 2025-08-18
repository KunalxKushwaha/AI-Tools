import React, { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Testimonials = () => {
  const ref = useRef(null)
  useScrollAnimation(ref)

  const cardsData = [
    { image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200', name: 'Briar Martin', handle: '@neilstellar', date: 'April 20, 2025' },
    { image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200', name: 'Avery Johnson', handle: '@averywrites', date: 'May 10, 2025' },
    { image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60', name: 'Jordan Lee', handle: '@jordantalks', date: 'June 5, 2025' },
  ]

  return (
    <div ref={ref} className="opacity-0 translate-y-5">
      <div className="text-center">
        <h2 className="text-[42px] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
          Loved by Creators
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">Don't just take our word for it. Here's what our users are saying.</p>
      </div>

      <div className="relative overflow-hidden max-w-6xl mx-auto mt-10">
        <div className="marquee flex gap-6 animate-marquee">
          {[...cardsData, ...cardsData].map((card, i) => (
            <div key={i} className="p-4 rounded-lg mx-4 shadow hover:shadow-xl transition-all duration-300 w-72 shrink-0 bg-white">
              <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt="User" />
                <div>
                  <p className="font-medium">{card.name}</p>
                  <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
              </div>
              <p className="text-sm py-4 text-gray-700 italic">“Radiant made undercutting all of our competitors an absolute breeze.”</p>
              <span className="text-xs text-slate-500">{card.date}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Testimonials
