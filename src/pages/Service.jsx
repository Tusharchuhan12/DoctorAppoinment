import React from 'react';

function Service() {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        WE PUT THE <span className="text-blue-600">CARE</span> IN HEALTHCARE
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive healthcare services designed for your convenience and well-being.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                    {/* Service Card 1 */}
                    <div className="group relative">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full flex flex-col">
                            <div className="p-6 pb-0 flex-grow">
                                <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        alt="Person holding a phone showing a doctor on a video call"
                                        className="object-cover w-full h-full"
                                        src="https://storage.googleapis.com/a1aa/image/k43uIJq1dY2oKTVTNSX_6hDVRAIXv39X3p7MqVx4rLk.jpg"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
                                    Online Consultations
                                </h3>
                                <p className="mt-2 text-gray-600 text-center">
                                    Connect with doctors instantly from anywhere
                                </p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 text-center">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
                                    Available 24/7
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 2 */}
                    <div className="group relative">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full flex flex-col">
                            <div className="p-6 pb-0 flex-grow">
                                <div className="w-32 h-32 mx-auto rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        alt="Doctor holding a clipboard and smiling"
                                        className="object-cover w-full h-full"
                                        src="https://storage.googleapis.com/a1aa/image/qusvcn1D8NOsj8Evw5Ej6uGQnmPrWlqe0owHG42TJ_U.jpg"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
                                    Offline Consultations
                                </h3>
                                <p className="mt-2 text-gray-600 text-center">
                                    Personalized in-person care from specialists
                                </p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 text-center">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
                                    500+ Clinics
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 3 */}
                    <div className="group relative">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full flex flex-col">
                            <div className="p-6 pb-0 flex-grow">
                                <div className="w-32 h-32 mx-auto rounded-full bg-purple-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        alt="MediBuddy branded clinic reception area"
                                        className="object-cover w-full h-full"
                                        src="https://storage.googleapis.com/a1aa/image/yn2pXPcWbWv4RB_kTEfvu4koekljAFsl4gASJxge7xk.jpg"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
                                    MediBuddy Clinics
                                </h3>
                                <p className="mt-2 text-gray-600 text-center">
                                    Premium healthcare facilities with advanced equipment
                                </p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 text-center">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full">
                                    State-of-the-art
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 4 */}
                    <div className="group relative">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full flex flex-col">
                            <div className="p-6 pb-0 flex-grow">
                                <div className="w-32 h-32 mx-auto rounded-full bg-green-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        alt="Person delivering a package of medicine"
                                        className="object-cover w-full h-full"
                                        src="https://storage.googleapis.com/a1aa/image/W9TCyNl9Eq3GV_SO7aLqC_NF61IgQkteyCTGPgOWRbE.jpg"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
                                    Medicine Delivery
                                </h3>
                                <p className="mt-2 text-gray-600 text-center">
                                    Get prescribed medicines delivered to your doorstep
                                </p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 text-center">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                                    2-Hour Delivery
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 5 */}
                    <div className="group relative">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full flex flex-col">
                            <div className="p-6 pb-0 flex-grow">
                                <div className="w-32 h-32 mx-auto rounded-full bg-yellow-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        alt="Lab technician conducting a test at home"
                                        className="object-cover w-full h-full"
                                        src="https://storage.googleapis.com/a1aa/image/xNfGsMFn_9vwc9U1jrZXHNTVCyDdCCLX29rqjXy2orw.jpg"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
                                    Lab Tests at Home
                                </h3>
                                <p className="mt-2 text-gray-600 text-center">
                                    Sample collection from home with accurate results
                                </p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 text-center">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-700 bg-yellow-100 rounded-full">
                                    100+ Tests
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 6 */}
                    <div className="group relative">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full flex flex-col">
                            <div className="p-6 pb-0 flex-grow">
                                <div className="w-32 h-32 mx-auto rounded-full bg-red-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        alt="Surgical instruments being prepared"
                                        className="object-cover w-full h-full"
                                        src="https://storage.googleapis.com/a1aa/image/fapLfLy9mpVUqeSaUr0wDeNyaGby-xrYt-f2onYICRs.jpg"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
                                    Surgery Care
                                </h3>
                                <p className="mt-2 text-gray-600 text-center">
                                    Comprehensive surgical support and post-op care
                                </p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 text-center">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-red-700 bg-red-100 rounded-full">
                                    Expert Surgeons
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;