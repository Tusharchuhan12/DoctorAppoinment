import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContex';

function TopDoctor() {
  const Navigate=useNavigate();
  const {assets} =useContext(AppContext)
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Top Specialists</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Book appointments with our trusted medical professionals</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {assets.slice(0, 8).map((doctor) => (
          <div
            onClick={() => Navigate(`/Appoinment/${doctor._id}`)}
            key={doctor._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="relative h-56 w-full">
              <img
                src={doctor.image}
                alt={doctor.name}
                className=" bg-blue-100 w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/default-doctor.jpg';
                }}
              />
             
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{doctor.name}</h2>
                  <p className="text-gray-600">{doctor.speciality}</p>
                </div>
                
              </div>

              <div className="mt-4 flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{doctor.address.line1}</span>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">4.8 (120)</span>
                </div>
              
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button onClick={()=>{Navigate('/doctors');scrollTo(0,0)}} className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300">
          More Doctors
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TopDoctor;