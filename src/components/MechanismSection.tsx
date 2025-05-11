import React from 'react';

const MechanismSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">How SlimVital™ Works</h2>
        <p className="section-subtitle">
          Our scientifically proven 3-stage process developed by UK researchers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Metabolic Activation</h3>
            <p className="text-gray-700">
              Within 30 minutes of consumption, SlimVital™ activates your metabolic rate through its
              proprietary thermogenic complex, increasing calorie burning by up to 24% according to
              University of Manchester research.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Appetite Regulation</h3>
            <p className="text-gray-700">
              The Glucomannan fibre expands in your stomach, creating a feeling of fullness while
              the neurological compounds balance hunger hormones, reducing caloric intake without
              feelings of deprivation.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Fat Conversion</h3>
            <p className="text-gray-700">
              Our patented UK formula converts stored fat cells into energy through a process called
              lipolysis, particularly targeting stubborn abdominal fat that affects 73% of British
              adults over 40.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-center mb-8">
            SlimVital™ Clinical Results Timeline
          </h3>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>

            {/* Timeline Entries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-8 relative">
                <div className="hidden md:block absolute right-0 top-4 w-4 h-4 rounded-full bg-brand-blue transform translate-x-1/2"></div>
                <h4 className="font-bold text-lg">Week 1-2</h4>
                <p className="text-gray-700">
                  Initial water weight reduction and increased energy levels. Users report reduced
                  cravings for sugary foods common in British diets.
                </p>
              </div>

              <div className="md:pl-8 relative">
                <div className="hidden md:block absolute left-0 top-4 w-4 h-4 rounded-full bg-brand-blue transform -translate-x-1/2"></div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="h-24 w-24 bg-gray-200 rounded-lg mr-4 overflow-hidden">
                      <div className="h-full w-1/4 bg-brand-blue"></div>
                    </div>
                    <div>
                      <span className="block font-bold">Initial Progress</span>
                      <span className="text-gray-600">5-7% of users report visible changes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:text-right md:pr-8 relative">
                <div className="hidden md:block absolute right-0 top-4 w-4 h-4 rounded-full bg-brand-green transform translate-x-1/2"></div>
                <h4 className="font-bold text-lg">Week 3-4</h4>
                <p className="text-gray-700">
                  Consistent weight loss begins, averaging 0.5-1 kg per week. Metabolic adaptation
                  fully engaged, especially effective for British body types.
                </p>
              </div>

              <div className="md:pl-8 relative">
                <div className="hidden md:block absolute left-0 top-4 w-4 h-4 rounded-full bg-brand-green transform -translate-x-1/2"></div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="h-24 w-24 bg-gray-200 rounded-lg mr-4 overflow-hidden">
                      <div className="h-full w-1/2 bg-brand-green"></div>
                    </div>
                    <div>
                      <span className="block font-bold">Visible Progress</span>
                      <span className="text-gray-600">67% report noticeable weight loss</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:text-right md:pr-8 relative">
                <div className="hidden md:block absolute right-0 top-4 w-4 h-4 rounded-full bg-brand-red transform translate-x-1/2"></div>
                <h4 className="font-bold text-lg">Week 8+</h4>
                <p className="text-gray-700">
                  Full transformation visible. Average total weight loss of 6-8 kg, with significant
                  reduction in waist circumference, a key health indicator for UK health standards.
                </p>
              </div>

              <div className="md:pl-8 relative">
                <div className="hidden md:block absolute left-0 top-4 w-4 h-4 rounded-full bg-brand-red transform -translate-x-1/2"></div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="h-24 w-24 bg-gray-200 rounded-lg mr-4 overflow-hidden">
                      <div className="h-full w-full bg-brand-red"></div>
                    </div>
                    <div>
                      <span className="block font-bold">Transformation Complete</span>
                      <span className="text-gray-600">91% achieve their target weight</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
