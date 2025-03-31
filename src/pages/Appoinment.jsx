import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContex';

function Appointment() {
  const { docId } = useParams();
  const { assets } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = () => {
    const foundDoc = assets.find(doc => doc._id === docId);
    setDocInfo(foundDoc);
  };

  useEffect(() => {
    if (assets && docId) {
      fetchDocInfo();
    }
  }, [assets, docId]);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      {docInfo ? (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 p-6">
              <img
                className="h-48 w-full object-cover md:w-48 rounded-full border-4 border-blue-100"
                src="header_img.png"
                alt=""
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                {docInfo.degree} - {docInfo.speciality}
              </div>
              <h1 className="block mt-1 text-2xl font-medium text-gray-900">
                Dr. {docInfo.name}
              </h1>
              <p className="mt-2 text-gray-500">
                {docInfo.experience} Year{docInfo.experience !== 1 ? 's' : ''} Experience
              </p>

              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">About</h3>
                <p className="mt-2 text-gray-600">
                  {docInfo.about || "Dr. " + docInfo.name + " has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies."}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Appointment fee:</span>
                  <span className="text-2xl font-bold text-blue-600">${docInfo.fees || '32'}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Loading doctor information...</p>
        </div>
      )}
    </div>
  );
}

export default Appointment;