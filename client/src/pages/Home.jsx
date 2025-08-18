import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonials from '../components/Testimonials'
import Plan from '../components/Plan'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    
    <Navbar />
    <Hero />
    <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: '30s' }}>
        <div className="flex">
          <img alt="slack" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg" />
          <img alt="framer" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg" />
          <img alt="netflix" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg" />
          <img alt="google" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg" />
          <img alt="linkedin" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg" />
          <img alt="instagram" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg" />
          <img alt="facebook" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg" />
          <img alt="slack" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg" />
          <img alt="framer" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg" />
          <img alt="netflix" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg" />
          <img alt="google" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg" />
          <img alt="linkedin" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg" />
          <img alt="instagram" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg" />
          <img alt="facebook" className="w-full h-full object-cover mx-6" draggable="false" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg" />
        </div>
      </div>
    <AiTools />
    <Testimonials />
    <Plan />
    <Footer />
    
    </>
  )
}

export default Home
