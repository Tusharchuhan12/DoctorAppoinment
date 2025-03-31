import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const Navigation=useNavigate()
  return (
    <div>
      <div className="flex items-center justify-center min-h-scree">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl max-w-6xl w-full mx-4 my-8">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-10 text-blue-800">
            CONTACT US
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                alt="Doctor giving a vaccine to a young girl while a woman stands by"
                className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                src="https://storage.googleapis.com/a1aa/image/2kelUQJ36y4CnfYuZzQfO4osgz9Bnz5xdLDFSYqeUQc.jpg"
              />
            </div>

            {/* Contact Info Section */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* Office Info */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  OUR OFFICE
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    12345 Medical Center Drive, Suite 200, Seattle, WA 98101
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    8630116843
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Tusharchahan1201025@gmail.com
                  </p>
                </div>
              </div>

              {/* Careers Section */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  CAREERS AT PRESCRIPTO
                </h2>
                <p className="text-gray-600 mb-4">
                  Join our team of healthcare professionals and make a difference in patients' lives every day.
                </p>
                <button  onClick={()=>Navigation('/from')}className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center">
                  CONTACT
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
