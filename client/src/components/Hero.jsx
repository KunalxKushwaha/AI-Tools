import React from 'react'
import bgImage from '../assets/gradientBackground.png'

const Hero = () => {
  return (
     <div   style={{ backgroundImage: `url(${bgImage})` }}
 className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
      
    </div>
    
  )
}

export default Hero
