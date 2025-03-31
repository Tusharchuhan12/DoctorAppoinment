import React from 'react'
import { useNavigate } from 'react-router-dom';

function Banner() {
    const Navigate =useNavigate();
  return (
      <div className="relative overflow-hidden">
          <div className="px-4 py-12 sm:px-6 lg:px-8 max-w-9xl h-9xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-500 opacity-20"></div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-400 opacity-15"></div>

                  {/* Text content */}
                  <div className="relative z-10 flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                          Book Appointment Instantly
                      </h1>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-100">
                          Connect with 100+ Trusted Specialists
                      </h2>
                      <p className="text-blue-100 max-w-lg">
                          Skip the waiting room - Get personalized care from top doctors in minutes
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                          
                          <button  onClick={()=>(Navigate('/login'),screenTo(0,0))}className="border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                              Create Acount
                          </button>
                      </div>
                  </div>

                  {/* Image */}
                  <div className="relative z-10 flex-shrink-0">
                      <img
                          alt="A smiling doctor pointing to the text"
                          className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto object-contain drop-shadow-2xl"
                          src="appointment_img.png"
                          onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/default-doctor.png';
                          }}
                      />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Banner
