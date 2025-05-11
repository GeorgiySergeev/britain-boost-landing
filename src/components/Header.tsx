
import React from 'react';
import { Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-2 text-brand-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"/>
                <path fill="#4CAF50" d="M23 12l-9 9-5-5 1.41-1.41L14 18.17l7.59-7.59L23 12z"/>
              </svg>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">HealthGuard UK</h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-800 hover:text-brand-blue font-medium">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-brand-blue font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-800 hover:text-brand-blue font-medium">Products</a></li>
              <li><a href="#" className="text-gray-800 hover:text-brand-blue font-medium">Research</a></li>
              <li><a href="#" className="text-gray-800 hover:text-brand-blue font-medium">Contact</a></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-brand-blue mr-1" />
              <span className="text-sm font-medium">+44 20 1234 5678</span>
            </div>
            <div className="flex space-x-2">
              <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-gray-600 hover:text-brand-blue" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-gray-600 hover:text-brand-blue" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-gray-600 hover:text-brand-blue" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
