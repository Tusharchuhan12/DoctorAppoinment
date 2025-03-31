import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function BenefitOnline() {
    const benefits = [
        {
            title: "Consult Top Doctors 24x7",
            description: "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor."
        },
        {
            title: "Convenient and Easy",
            description: "Start an instant consultation within 2 minutes or do video consultation at the scheduled time."
        },
        {
            title: "Similar Clinic Experience",
            description: "Experience clinic-like consultation through a video call with the doctor. Video consultation is available only on the Practo app."
        },
        {
            title: "Free Follow-up",
            description: "Get a valid digital prescription and a 7-day, free follow-up for further clarifications."
        },
        {
            title: "100% Safe Consultations",
            description: "Be assured that your online consultation will be fully private and secured."
        }
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                        Benefits of <span className='text-blue-600'>Online Consultation</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                                <div className="flex-shrink-0 mt-1">
                                    <FaCheckCircle className="text-green-500 text-2xl mr-4" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h2>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional CTA */}
                   
                </div>
            </div>
        </div>
    );
}

export default BenefitOnline;