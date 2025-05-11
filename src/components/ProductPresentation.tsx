import React from 'react';
import { Check } from 'lucide-react';

const ProductPresentation: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Introducing SlimVital™ Formula</h2>
        <p className="section-subtitle">The Advanced British Weight Management Solution</p>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative">
              <img
                src="/images/doctor.webp"
                alt="SlimVital Product"
                className="w-full h-auto rounded"
              />
              <div className="absolute -top-4 -right-4 flex flex-col">
                <span className="uk-badge mb-2 bg-brand-green text-white">Royal Quality</span>
                <span className="uk-badge mb-2">Made in UK</span>
                <span className="uk-badge">NHS Compatible</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Key Benefits of SlimVital™</h3>

            <ul className="space-y-4 mb-8">
              {[
                'Accelerates metabolism using UK-patented natural compounds',
                'Reduces appetite without causing jitters (UK GMP certified)',
                "Supports healthy blood sugar levels, addressing Britain's most common dietary issues",
                "Boosts energy levels naturally, countering the UK's rainy climate lethargy",
                'Formulated by British nutritionists to match UK dietary patterns',
                '100% natural ingredients locally sourced when possible',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Composition Highlights:</h4>
              <p className="mb-4">
                Our unique formula features British-tested ingredients including Green Tea Extract
                (standardised to UK specifications), Glucomannan (from sustainable UK suppliers),
                Chromium Picolinate, CLA, and our proprietary British herbal blend certified by the
                UK Soil Association.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="uk-badge">No Artificial Additives</span>
                <span className="uk-badge">Gluten Free</span>
                <span className="uk-badge">Vegan Friendly</span>
                <span className="uk-badge">UK Lab Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
