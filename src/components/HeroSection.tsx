import React from 'react';
import { Button } from '@/components/ui/button';
import productImage from '../assets/product-image.png';

const HeroSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-2">
              <span className="uk-badge">NHS Compatible</span>
              <span className="uk-badge ml-2">Made in UK</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Revolutionary Weight Management Solution Approved by British Experts
            </h1>

            <p className="text-xl text-gray-700 mb-6">
              Our clinically tested formula helps you lose weight effectively without strict diets.
              Experience natural weight loss backed by science.
            </p>

            <div className="mb-6">
              <button className="cta-button">Claim Your Special UK Offer</button>
              <p className="text-sm text-red-600 font-medium mt-2 animate-pulse-slow">
                ⚠ Limited Supply Available in the UK - Only 37 Packages Left
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 font-medium">
                4.9/5 - Trusted by over 10,000 UK customers
              </span>
            </div>
          </div>

          <div className="md:w-2/5 relative">
            <div className="bg-white rounded-2xl shadow-lg p-4 relative">
              <img
                src="/images/test_img.jpg"
                alt="SlimVital Weightloss Formula"
                className="w-full h-auto rounded"
              />
              <div className="absolute -top-4 -right-4 bg-brand-red text-white text-sm font-bold py-2 px-4 rounded-full transform rotate-12">
                30% OFF
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <img src="/images/logo-2.png" alt="NHS Compatible" className="h-8" />
              <img src="/images/logo-3.png" alt="Made in UK" className="h-8" />
              <img src="/images/logo-1.png" alt="BSI Certified" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
