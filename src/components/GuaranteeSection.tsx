import React from 'react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-blue-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative">
              <svg
                className="w-48 h-48 text-brand-blue"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  fill="currentColor"
                  opacity="0.2"
                />
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-xl font-bold text-brand-blue">60-DAY</div>
                <div className="text-sm font-semibold text-brand-blue">GUARANTEE</div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Our Risk-Free Money Back Guarantee</h2>
            <p className="text-gray-700 mb-6">
              We're so confident in the effectiveness of SlimVital™ that we offer a comprehensive
              60-day money back guarantee on all purchases. If for any reason you're not completely
              satisfied with your results, simply return the unused portion within 60 days for a
              full refund, no questions asked.
            </p>
            <p className="text-gray-700 mb-6">
              This guarantee exceeds the UK statutory requirements to give you absolute peace of
              mind when making your purchase. We're proud of our 97% customer satisfaction rate and
              stand firmly behind our product quality and effectiveness.
            </p>
            <button className="cta-button">Claim Your Risk-Free SlimVital™ Today</button>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6">Secure Payment Options</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
              alt="Visa"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
              alt="Mastercard"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/200px-PayPal_logo.svg.png"
              alt="PayPal"
              className="h-8"
            />
            <img src="/images/apple-pay.png" alt="Apple Pay" className="h-8" />
            <img src="/images/klarna.png" alt="Klarna" className="h-8" />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-brand-green mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <span className="text-sm">Secure Checkout</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-brand-green mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span className="text-sm">PCI DSS Compliant</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-brand-green mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span className="text-sm">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
