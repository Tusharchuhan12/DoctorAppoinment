import React, { useState, useRef } from 'react';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Edward Vincent",
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: "57th Cross, Richmond Circle, Church Road, London",
    gender: "Male",
    birthday: "20 July, 2024",
    profileImage: null
  });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile saved:", profile);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {profile.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-4xl">
                      {profile.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              {isEditing && (
                <>
                  <button
                    onClick={triggerFileInput}
                    className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all transform translate-y-1/4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                </>
              )}
            </div>
          </div>

          {/* Name and Edit/Save Button */}
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                />
              ) : (
                profile.name
              )}
            </h1>
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Edit
              </button>
            )}
          </div>

          {/* Profile Information Sections */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">CONTACT INFORMATION</h2>
              <div className="space-y-3 ml-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className="text-sm text-gray-500 sm:col-span-1">Email id:</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none sm:col-span-2"
                    />
                  ) : (
                    <p className="text-gray-800 sm:col-span-2">{profile.email}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className="text-sm text-gray-500 sm:col-span-1">Phone:</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none sm:col-span-2"
                    />
                  ) : (
                    <p className="text-gray-800 sm:col-span-2">{profile.phone}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className="text-sm text-gray-500 sm:col-span-1">Address:</label>
                  {isEditing ? (
                    <textarea
                      name="address"
                      value={profile.address}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none sm:col-span-2"
                      rows="2"
                    />
                  ) : (
                    <p className="text-gray-800 sm:col-span-2">{profile.address}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">BASIC INFORMATION</h2>
              <div className="space-y-3 ml-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className="text-sm text-gray-500 sm:col-span-1">Gender:</label>
                  {isEditing ? (
                    <select
                      name="gender"
                      value={profile.gender}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none sm:col-span-2"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <p className="text-gray-800 sm:col-span-2">{profile.gender}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className="text-sm text-gray-500 sm:col-span-1">Birthday:</label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="birthday"
                      value={profile.birthday}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none sm:col-span-2"
                    />
                  ) : (
                    <p className="text-gray-800 sm:col-span-2">{profile.birthday}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;