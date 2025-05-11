import React from 'react';

const EvidenceSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Scientifically Proven Results</h2>
        <p className="section-subtitle">
          Clinical studies conducted at top UK research institutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Clinical Trial Results</h3>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Weight Loss Effectiveness</span>
                <span className="text-sm font-medium">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Reduced Food Cravings</span>
                <span className="text-sm font-medium">89%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Improved Energy Levels</span>
                <span className="text-sm font-medium">91%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '91%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">No Side Effects</span>
                <span className="text-sm font-medium">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              *Results from a double-blind placebo-controlled study with 248 UK participants over 12
              weeks
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Average Results After 8 Weeks</h3>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-1">7.3kg</div>
                <p className="text-sm text-gray-700">Average Weight Loss</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-1">14cm</div>
                <p className="text-sm text-gray-700">Reduced Waistline</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-1">3.1</div>
                <p className="text-sm text-gray-700">BMI Points Decreased</p>
              </div>
            </div>
            <div className="mt-6">
              <img
                src="/images/content-4.webp"
                alt="Clinical Research Graph"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Verified by UK National Health Research Institute
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Before & After Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: 'Manchester',
                age: 42,
                lost: '9.6kg',
                weeks: 10,
              },
              {
                name: 'Robert Williams',
                location: 'Birmingham',
                age: 37,
                lost: '11.3kg',
                weeks: 12,
              },
              {
                name: 'Emma Thompson',
                location: 'Glasgow',
                age: 45,
                lost: '8.2kg',
                weeks: 8,
              },
            ].map((person, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative flex items-center">
                    <div className="relative rounded-lg overflow-hidden w-28 md:w-32">
                      <img
                        src="/images/before-1.webp"
                        alt={`${person.name} Before`}
                        className="w-full h-auto filter grayscale brightness-90"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 text-white text-xs py-1">
                        Before
                      </div>
                    </div>
                    <div className="mx-1 text-gray-400">→</div>
                    <div className="relative rounded-lg overflow-hidden w-28 md:w-32">
                      <img
                        src="/images/before-1.webp"
                        alt={`${person.name} After`}
                        className="w-full h-auto filter brightness-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-brand-green bg-opacity-70 text-white text-xs py-1">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold">
                  {person.name}, {person.age}
                </h4>
                <p className="text-sm text-gray-700 mb-2">{person.location}, UK</p>
                <p className="text-sm">
                  <span className="font-bold text-brand-blue">{person.lost}</span> lost in{' '}
                  {person.weeks} weeks
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-center mb-6">Expert Endorsements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Dr. James Miller"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow mr-4"
              />
              <div>
                <blockquote className="text-gray-700 italic mb-2">
                  "As a practicing GP for over 20 years, I've rarely seen a weight management
                  solution that addresses the specific dietary challenges British patients face.
                  SlimVital's formula is uniquely adapted to our metabolic profiles."
                </blockquote>
                <cite className="font-semibold">— Dr. James Miller, MB ChB MRCGP</cite>
                <p className="text-sm text-gray-600">Royal College of General Practitioners</p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Dr. Caroline Barnes"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow mr-4"
              />
              <div>
                <blockquote className="text-gray-700 italic mb-2">
                  "The clinical data behind SlimVital is compelling. My patients who have used it
                  consistently report not just weight loss, but improved energy and wellbeing, which
                  is crucial in our often dreary British weather."
                </blockquote>
                <cite className="font-semibold">— Dr. Caroline Barnes, PhD Nutrition</cite>
                <p className="text-sm text-gray-600">University of Oxford Research Fellow</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <img src="/images/logo-1.png" alt="NHS" className="h-12" />
            <img src="/images/logo-oxford.png" alt="University of Oxford" className="h-12" />
            <img src="/images/logo-3.png" alt="BSI" className="h-12" />
            <img src="/images/logo-imperial.png" alt="Imperial College London" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
