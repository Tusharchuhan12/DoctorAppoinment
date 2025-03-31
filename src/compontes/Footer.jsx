import React from 'react'

function Footer() {
  return (
    <div>
          <footer className="">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                      {/* Brand Info */}
                      <div className="space-y-4">
                          <div className="flex items-center">
                              <img
                                  alt="Prescripto logo"
                                  className="h-8 w-auto mr-3"
                                  src="https://storage.googleapis.com/a1aa/image/9W1axnfv8WkLp6lBWWtg1baUczWL0K0jKH1IdezV4L0.jpg"
                              />
                              <h1 className="text-2xl font-bold text-gray-900">Prescripto</h1>
                          </div>
                          <p className="text-gray-500 text-sm leading-relaxed">
                              Your trusted healthcare partner connecting patients with top medical professionals and pharmacy services nationwide.
                          </p>
                          <div className="flex space-x-4">
                              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                                  <a key={social} href="#" className="text-gray-400 hover:text-blue-600">
                                      <span className="sr-only">{social}</span>
                                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                          {/* Social media icons would go here */}
                                      </svg>
                                  </a>
                              ))}
                          </div>
                      </div>

                      {/* Quick Links */}
                      <div className="space-y-4">
                          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h2>
                          <ul className="space-y-2">
                              {['Home', 'About us', 'Services', 'Careers', 'Press'].map((item) => (
                                  <li key={item}>
                                      <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                                          {item}
                                      </a>
                                  </li>
                              ))}
                          </ul>
                      </div>

                      {/* Resources */}
                      <div className="space-y-4">
                          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Resources</h2>
                          <ul className="space-y-2">
                              {['Blog', 'Help center', 'Privacy policy', 'Terms of service', 'FAQ'].map((item) => (
                                  <li key={item}>
                                      <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                                          {item}
                                      </a>
                                  </li>
                              ))}
                          </ul>
                      </div>

                      {/* Contact */}
                      <div className="space-y-4">
                          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact Us</h2>
                          <address className="not-italic text-gray-500 space-y-2 text-sm">
                              <div className="flex items-start">
                                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                  </svg>
                                  <span>© 2025 Developed by Tushar chauhan . All rights reserved.</span>
                                  
                              </div>
                              <div className="flex items-start">
                                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                               
                                  <span>Tusharchauhan1201025@gmail.com</span>
                              </div>
                              <div className="flex items-start">
                                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>123 Medical Drive, Suite 100<br />San Francisco, CA 94102</span>
                              </div>
                          </address>
                      </div>
                  </div>

                  {/* Copyright */}
                  <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                      <p className="text-gray-500 text-sm">
                          &copy; {new Date().getFullYear()} Prescripto. All rights reserved.
                      </p>
                      <div className="mt-4 md:mt-0 flex space-x-6">
                          <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
                          <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
                          <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Cookies</a>
                      </div>
                  </div>
              </div>
          </footer>
          
    </div>
  )
}

export default Footer
