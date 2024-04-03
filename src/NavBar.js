'use client'
import { useState } from 'react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wrapper for desktop layout */}
        <div className="hidden lg:flex flex-col text-center">
          <div className="py-2">
            <span className="text-3xl font-bold">Hatyai Primary Care Conference 2024</span>
          </div>
          <div>
            <div className="flex justify-center items-baseline space-x-4">
              <a href="/" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/schedule" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Schedule</a>
              <a href="/speakers" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Speakers</a>
              <a href='/abstracts' className='hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'>Abstracts</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc_UGXAOFJFHqT_2XyjHSuK9yXIuIqRrw2_Dq5uaT7kJt4Hhg/viewform?usp=sf_link" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Register</a>
            </div>
          </div>
        </div>
        {/* Wrapper for mobile layout */}
        <div className="lg:hidden flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-base font-bold">Hatyai Primary Care Conference 2024</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
        <div className={isOpen ? "lg:hidden" : "hidden"} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/schedule" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Schedule</a>
            <a href="/speakers" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Speakers</a>
            <a href="/abstracts" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Abstracts</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc_UGXAOFJFHqT_2XyjHSuK9yXIuIqRrw2_Dq5uaT7kJt4Hhg/viewform?usp=sf_link" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Register</a>
          </div>
        </div>
      </div>
    </nav>
    )
}
