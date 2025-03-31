import React from 'react';

const Consultation = () => {
    // Extract just the video ID from the URL
    const youtubeVideoId = "4cT6GE5g8aw"; // Only the ID part from the URL

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Experience <span className="text-blue-600">Online Doctor Consultations</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get expert medical advice from the comfort of your home with our certified doctors
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        "Consult a doctor instantly",
                        "Get prescriptions online",
                        "24/7 availability"
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">#HelloDoctor</h3>
                            </div>
                            <p className="text-gray-600">{feature}</p>
                        </div>
                    ))}
                </div>

                {/* Video Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Consult with Top Doctors</h2>
                            <p className="text-gray-600 mb-6">
                                Connect instantly with our network of certified healthcare professionals through secure video calls.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "No waiting rooms",
                                    "Private and confidential",
                                    "Prescriptions delivered digitally",
                                    "Insurance accepted"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors self-start">
                                Book Consultation Now
                            </button>
                        </div>
                        <div className="md:w-1/2 bg-gray-900">
                            {/* YouTube Video Embed - Corrected */}
                            <div className="aspect-w-16 aspect-h-9 w-full">
                                <iframe
                                    className="w-full h-full min-h-[420px]"
                                    /*src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}*/
                                    title="Online Doctor Consultation Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                
            </div>
        </div>
    );
};

export default Consultation;