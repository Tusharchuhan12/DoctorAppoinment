import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContex';

function Doctors() {
  const { speciality } = useParams();
  const Navigate = useNavigate();
  const { assets } = useContext(AppContext); // Fixed: Removed extra parenthesis
  const [filterDoc, setFilterDoc] = useState([]);
  const [loading, setLoading] = useState(true);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        assets.filter(
          (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
        )
      );
    } else {
      setFilterDoc(assets);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    applyFilter();
  }, [speciality, assets]);

  const specialities = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
  ];

  const handleSpecialityClick = (spec) => {
    Navigate(`/doctors/${spec.toLowerCase()}`);
  };

  const handleClearFilter = () => {
    Navigate('/doctors');
  };

  const handleDoctorClick = (doctorId, e) => {
    e.stopPropagation();
    Navigate(`/appointment/${doctorId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - Left Side */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Browse Specialists</h2>
            <div className="space-y-2">
              {specialities.map((spec) => (
                <button
                  key={spec}
                  onClick={() => handleSpecialityClick(spec)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${speciality === spec.toLowerCase()
                      ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {spec}
                </button>
              ))}
              {speciality && (
                <button
                  onClick={handleClearFilter}
                  className="w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 mt-4 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Clear Filter
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content - Right Side */}
        <div className="lg:w-3/4">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {speciality
                ? `${speciality.charAt(0).toUpperCase() + speciality.slice(1)}s`
                : "Our Specialist Doctors"}
            </h1>
            <p className="text-gray-600">
              {speciality
                ? `Browse our expert ${speciality.toLowerCase()}s`
                : "Book appointments with our trusted medical professionals"}
            </p>
          </div>

          {/* Doctors Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : filterDoc.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filterDoc.map((doctor) => (
                <div
                  key={doctor._id}
                  onClick={() => Navigate(`/Appoinment/${doctor._id}`)}

                 /* onClick={(e) => handleDoctorClick(doctor._id, e)}*/
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer"
                >
                  <div className="relative h-48 w-full bg-gray-100">
                    <img
                      src={doctor.image}
                      
                      className="w-full h-full object-cover"
                      onClick={() => Navigate(`/Appoinment/${doctor._id}`)}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/default-doctor.jpg';
                      }}
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h2 className="text-white font-bold text-lg">{doctor.name}</h2>
                      <p className="text-blue-100 capitalize text-sm">{doctor.speciality}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">{doctor.address?.line1 || 'Address not available'}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
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
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <div className="mx-auto max-w-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-700 mt-4">
                  No doctors found {speciality ? `for ${speciality}` : ''}
                </h3>
                <p className="text-gray-500 mt-2">
                  Please try a different speciality or check back later
                </p>
                {speciality && (
                  <button
                    onClick={handleClearFilter}
                    className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    View All Doctors
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctors;