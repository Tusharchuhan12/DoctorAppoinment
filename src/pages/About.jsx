import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

function About() {
  const Navigate =useNavigate();
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            ABOUT US
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <img
              alt="Two doctors smiling and standing side by side in a medical office"
              className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
              src="https://storage.googleapis.com/a1aa/image/2bBf3YI_2WAhTBlRPXUNcfwtQF8AYOC9b-cu4W3h_6k.jpg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 w-full space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
            </p>

            {/* Vision Card */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                
                Our Vision
              </h2>
              <p className="text-gray-700">
                Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
              </p>
            </div>

            {/* CTA Button */}
              <button onClick={() => Navigate('/Service')}className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center w-full sm:w-auto">
              Learn More About Our Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  <div>
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                WHY CHOOSE US
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Efficiency Card */}
              <div className="bg-blue-600 text-white p-8 rounded-xl shadow-md 
              transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  EFFICIENCY
                </h3>
                <p className="text-blue-100">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
              </div>

              {/* Convenience Card */}
              <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm 
              transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:border-blue-300">
                <h3 className="text-lg font-bold mb-3 flex items-center text-gray-800">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  CONVENIENCE
                </h3>
                <p className="text-gray-600">Access to a network of trusted healthcare professionals in your area.</p>
              </div>

              {/* Personalization Card */}
              <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm 
              transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:border-blue-300">
                <h3 className="text-lg font-bold mb-3 flex items-center text-gray-800">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  PERSONALIZATION
                </h3>
                <p className="text-gray-600">Tailored recommendations and reminders to help you stay on top of your health.</p>
              </div>
            </div>
          </div>
        </div>
  </div>
    </>
  );
}

export default About;