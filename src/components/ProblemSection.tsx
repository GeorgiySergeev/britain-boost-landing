import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">The Growing Weight Management Challenge in the UK</h2>
        <p className="section-subtitle">
          63% of British adults are now overweight or living with obesity, according to the latest
          NHS statistics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <img
              src="/images/content-1.webp"
              alt="UK Obesity Statistics"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Growing Health Concern</h3>
            <p className="text-gray-700">
              The rate of obesity has tripled across the UK since 1980, becoming one of the nation's
              most pressing health concerns, putting immense pressure on the NHS.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <img
              src="/images/content-2.webp"
              alt="Dietary Challenges"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Modern British Diet</h3>
            <p className="text-gray-700">
              The typical British diet, combined with sedentary lifestyles, contributes to
              significant weight management problems for many across England, Scotland, Wales, and
              Northern Ireland.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <img
              src="/images/content-3.webp"
              alt="Mental Health Impact"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mental Wellbeing</h3>
            <p className="text-gray-700">
              Weight issues have been linked to depression and anxiety among Britons, with Public
              Health England reporting that mental health concerns are twice as common in
              individuals with obesity.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Dr. Elizabeth Thompson"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
              />
            </div>
            <div className="md:w-3/4 md:pl-8">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "The UK is facing a weight management crisis unlike anything we've seen before.
                Traditional approaches are failing many Britons, and we urgently need effective,
                scientifically-backed solutions that work with our unique lifestyles and genetic
                predispositions."
              </blockquote>
              <cite className="text-gray-900 font-semibold">
                — Dr. Elizabeth Thompson, King's College London, Nutrition Research Department
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
