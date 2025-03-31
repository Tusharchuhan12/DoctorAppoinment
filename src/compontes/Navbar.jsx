import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [token, setToken] = useState(true); // In a real app, this would come from auth context
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='sticky top-0 bg-white z-50 shadow-sm'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <div
          className='flex items-center cursor-pointer'
          onClick={() => navigate('/')}
        >
          <img onClick={() => navigate('/')} className="h-10" src="https://storage.googleapis.com/a1aa/image/9W1axnfv8WkLp6lBWWtg1baUczWL0K0jKH1IdezV4L0.jpg" alt="HealthHub Logo" />
          <h1 className="text-2xl font-bold text-gray-900">Prescripto</h1>
        </div>

        {/* Desktop Navigation - Show on medium screens and up */}
        <ul className='hidden sm:flex items-center gap-6 font-medium'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `py-2 px-1 transition-colors ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to='/doctors'
            className={({ isActive }) =>
              `py-2 px-1 transition-colors ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            <li>ALL Doctors</li>
          </NavLink>

          <NavLink
            to='/about'
            className={({ isActive }) =>
              `py-2 px-1 transition-colors ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `py-2 px-1 transition-colors ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            <li>Contact</li>
          </NavLink>
        </ul>

        {/* User Actions */}
        <div className='flex items-center gap-4'>
          {token ? (
            <div
              className='relative'
              ref={dropdownRef}
            >
              <div
                className='flex items-center gap-2 cursor-pointer'
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  className='w-8 h-8 rounded-full object-cover border-2 border-gray-200'
                  src='profile_pic.png'
                  alt="Profile"
                />
                <FiChevronDown className={`w-3 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                  <div className='flex flex-col gap-1'>
                    <button
                      onClick={() => {
                        navigate('/my-profile');
                        setShowDropdown(false);
                      }}
                      className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left transition-colors'
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        navigate('/my-Appoinment');
                        setShowDropdown(false);
                      }}
                      className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left transition-colors'
                    >
                      My Appointments
                    </button>
                    <button
                      onClick={() => {
                        setToken(false);
                        setShowDropdown(false);
                      }}
                      className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left transition-colors border-t border-gray-100'
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-full transition-colors shadow-sm text-sm sm:text-base'
            >
              Sign In
            </button>
          )}

          {/* Mobile Menu Button - Hidden on medium screens and up */}
          <button
            className='sm:hidden p-2 rounded-md hover:bg-gray-100 transition-colors'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Hidden on medium screens and up */}
      {mobileMenuOpen && (
        <div className='sm:hidden bg-white shadow-lg'>
          <ul className='flex flex-col py-4 px-4'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `py-3 px-2 transition-colors ${isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-100'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to='/doctor'
              className={({ isActive }) =>
                `py-3 px-2 transition-colors ${isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-100'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <li>All Doctors</li>
            </NavLink>

            <NavLink
              to='/about'
              className={({ isActive }) =>
                `py-3 px-2 transition-colors ${isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-100'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <li>About</li>
            </NavLink>

            <NavLink
              to='/contact'
              className={({ isActive }) =>
                `py-3 px-2 transition-colors ${isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-100'}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <li>Contact</li>
            </NavLink>

            {!token && (
              <button
                onClick={() => {
                  navigate('/login');
                  setMobileMenuOpen(false);
                }}
                className='mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors shadow-sm text-center'
              >
                Sign In
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;