import React from 'react'


import { Link, useNavigate } from 'react-router-dom'
function Drmenu() {

 const Navigate=useNavigate();

    const specialityData = [
        {
            speciality: 'General physician',
            image: 'General_physician.svg'
        },
        {
            speciality: 'Gynecologist',
            image: 'Gynecologist.svg'
        },
        {
            speciality: 'Dermatologist',
            image: 'Dermatologist.svg'
        },
        {
            speciality: 'Pediatricians',
            image: 'Pediatricians.svg'
        },
        {
            speciality: 'Neurologist',
            image: 'Neurologist.svg'
        },
        {
            speciality: 'Gastroenterologist',
            image: 'Gastroenterologist.svg'
        },
    ]
  return (
      <div onClick={() => { Navigate('/doctors'); scrollTo(0, 0) }} className= "bg-blue-200 text-center py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id='spaciality'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Find by Speciality
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
          </p>

          <div onClick={() => { Navigate('/doctors') }} className= "mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {specialityData.map((item, index) => (
                  <Link  
                   to={`/doctocr/${item.speciality}`}
                      key={index}
                      className="flex flex-col items-center transition-all duration-300 hover:scale-105 p-4 border border-gray-100 rounded-4xl shadow-sm bg-white hover:shadow-md hover:border-primary-100"
                  >
                    
                      <div className="  w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 bg-primary-50 rounded-full flex items-center justify-center">
                          <img
                              src={item.image}
                              alt={item.speciality}
                              className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                          />
                      </div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800 text-center">
                          {item.speciality}
                      </h3>
                  </Link>
              ))}
          </div>

          <button className="mt-10 px-6 py-2.5 border border-primary-500 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-300 text-sm sm:text-base">
              View All Specialities
          </button>
      </div>
  )
};
  


export default Drmenu
