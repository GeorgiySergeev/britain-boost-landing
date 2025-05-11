import React, { useState, useEffect } from 'react';

const PricingSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Choose Your SlimVital™ Package</h2>
        <p className="section-subtitle">Limited Time Special Offer For UK Customers Only</p>

        <div className="mb-8">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div>
                <p className="text-red-600 font-bold text-center sm:text-left">
                  Special Offer Ends Soon:
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-md p-2 min-w-[50px] text-center">
                  <span className="block text-xl font-bold text-gray-800">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-gray-600">Hours</span>
                </div>
                <span className="text-xl font-bold">:</span>
                <div className="bg-white rounded-md p-2 min-w-[50px] text-center">
                  <span className="block text-xl font-bold text-gray-800">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-gray-600">Minutes</span>
                </div>
                <span className="text-xl font-bold">:</span>
                <div className="bg-white rounded-md p-2 min-w-[50px] text-center">
                  <span className="block text-xl font-bold text-gray-800">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-gray-600">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Basic Package */}
          <div className="border border-gray-200 rounded-xl bg-white p-6 hover:shadow-md transition-shadow duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">1 Month Supply</h3>
              <p className="text-gray-600 mb-4">Perfect for first-time users</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through text-xl">£59.99</span>
                <span className="text-3xl font-bold text-gray-800 ml-2">£39.99</span>
              </div>
              <p className="text-sm text-gray-500">+ £2.99 UK shipping</p>
            </div>

            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                1 bottle (30-day supply)
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Save £20.00 (33% off)
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                60-day money-back guarantee
              </li>
            </ul>

            <button className="w-full py-3 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold">
              Order Now
            </button>
          </div>

          {/* Popular Package */}
          <div className="border-4 border-brand-blue rounded-xl bg-white p-6 shadow-lg relative">
            <div className="absolute top-0 right-0 left-0 transform -translate-y-1/2">
              <div className="bg-brand-blue text-white text-center text-sm font-bold py-2 px-4 rounded-full mx-auto w-max">
                MOST POPULAR
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">3 Month Supply</h3>
              <p className="text-gray-600 mb-4">Recommended package</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through text-xl">£179.97</span>
                <span className="text-3xl font-bold text-gray-800 ml-2">£89.99</span>
              </div>
              <p className="text-sm text-brand-green font-medium">FREE UK shipping</p>
            </div>

            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-blue mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                3 bottles (90-day supply)
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-blue mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Save nearly £90 (50% off)
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-blue mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                FREE Diet Guide (worth £19.99)
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-blue mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                60-day money-back guarantee
              </li>
            </ul>

            <button className="w-full py-3 px-4 bg-brand-red text-white rounded-lg hover:opacity-90 transition-colors duration-300 font-semibold">
              Order Now
            </button>
          </div>

          {/* Best Value Package */}
          <div className="border border-gray-200 rounded-xl bg-white p-6 hover:shadow-md transition-shadow duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">6 Month Supply</h3>
              <p className="text-gray-600 mb-4">Best value package</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through text-xl">£359.94</span>
                <span className="text-3xl font-bold text-gray-800 ml-2">£149.99</span>
              </div>
              <p className="text-sm text-brand-green font-medium">FREE UK shipping</p>
            </div>

            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                6 bottles (180-day supply)
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Save over £200 (58% off)
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                FREE Diet Guide + Recipe Book
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-brand-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                60-day money-back guarantee
              </li>
            </ul>

            <button className="w-full py-3 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold">
              Order Now
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl flex items-center w-full">
            <img src="/images/logo-1.png" alt="NHS Compatible" className="h-12 mr-4" />
            <div>
              <h4 className="font-semibold">NHS Compatible</h4>
              <p className="text-sm text-gray-600">Safe to use alongside NHS treatments</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl flex items-center w-full">
            <svg
              className="h-12 w-12 text-brand-blue mr-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <div>
              <h4 className="font-semibold">Secure Checkout</h4>
              <p className="text-sm text-gray-600">Protected by 256-bit SSL encryption</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl flex items-center w-full">
            <svg
              className="h-12 w-12 text-brand-green mr-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <div>
              <h4 className="font-semibold">100% Satisfaction</h4>
              <p className="text-sm text-gray-600">60-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
