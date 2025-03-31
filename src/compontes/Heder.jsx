import React from 'react'

import { useNavigate } from 'react-router-dom';
function Heder() {
    
   
    return (
        <div>
            <body className="bg-gray-100">
                <div className="flex items-center justify-center min-h-scree">
                    <div className="container mx-auto px-4 py-16">
                        <div className="bg-blue-500 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    Book Appointment
                                    <br />
                                    With Trusted Doctors
                                </h1>
                                <div className="flex items-center justify-center md:justify-start mb-4">
                                    <img alt="Doctor 1" className="w-10 h-10 rounded-full border-2 border-white -ml-2" height="40" src="https://storage.googleapis.com/a1aa/image/QHYp8mg53OYf4Vw1ZcKCCyLznQG4vlev7uj3uTXokCk.jpg" width="40" />
                                    <img alt="Doctor 2" className="w-10 h-10 rounded-full border-2 border-white -ml-2" height="40" src="https://storage.googleapis.com/a1aa/image/Pa3D9qybfrrElN_HXwOyp7IAnNdnnrujSLtCbtYttFU.jpg" width="40" />
                                    <img alt="Doctor 3" className="w-10 h-10 rounded-full border-2 border-white -ml-2" height="40" src="https://storage.googleapis.com/a1aa/image/hgCxUcDO_-5N_YjtZwrieKoHcOEXzaCBMkamjvVpTNo.jpg" width="40" />

                                    <p className="text-white ml-4">
                                        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                                    </p>
                                </div>
                                
                                <a  href ="#spaciality"className="bg-white text-blue-500 font-semibold py-3 px-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                                    Book appointment
                                    <i className="fas fa-arrow-right ml-2">
                                    </i>
                                </a>
                            </div>
                            <div className="md:w-[700px] rounded-2xl mt-8 md:mt-0 flex justify-center">
                                <img alt="Group of doctors" className="w-full h-auto" height="400" src='header_img.png' width="400" />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Heder
