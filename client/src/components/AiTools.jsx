import React, { useEffect } from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {
  const navigate = useNavigate()
  const { user } = useUser()

  useEffect(() => {
    const cards = document.querySelectorAll('.tool-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fadeInUp')
        })
      },
      { threshold: 0.2 }
    )
    cards.forEach((card) => observer.observe(card))
  }, [])

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      <div className="text-center opacity-0 animate-fadeInUp">
        <h2 className="text-[42px] font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Powerful AI Tools
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mt-4">
          Everything you need to create, enhance, and optimize your content with cutting-edge AI Technology.
        </p>
      </div>

      <div className="flex flex-wrap mt-12 justify-center gap-6">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="tool-card bg-[#FDFDFE] rounded-2xl p-8 max-w-xs w-full shadow-lg border border-gray-100 
                       opacity-0 transition-all duration-500 ease-out cursor-pointer
                       hover:-translate-y-3 hover:scale-105 hover:shadow-2xl
                       hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => user && navigate(tool.path)}
          >
            <div
              className="w-14 h-14 flex items-center justify-center text-white rounded-xl shadow-md animate-float"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            >
              <tool.Icon className="w-8 h-8" />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-slate-800 transition-colors duration-300 hover:text-indigo-600">
              {tool.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AiTools

