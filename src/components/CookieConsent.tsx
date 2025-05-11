
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8 text-sm text-gray-700">
            <p>
              This website uses cookies to ensure you get the best experience on our website. By continuing to use this site, you consent to our use of cookies in accordance with our 
              <a href="#" className="text-brand-blue hover:underline ml-1">Cookie Policy</a>.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 transition-colors duration-300"
            >
              Decline
            </button>
            <button 
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-brand-blue text-white rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
