import React from 'react';

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Oliver Taylor',
      location: 'Leeds',
      rating: 5,
      review:
        "I've tried everything to lose weight over the years, but nothing worked until I found SlimVital. I've lost over a stone in just 2 months without changing much else in my routine. Brilliant product, truly recommend to any fellow Brit struggling with weight!",
      date: '14 April 2023',
      verified: true,
    },
    {
      name: 'Margaret Wilson',
      location: 'Edinburgh',
      rating: 5,
      review:
        'At 57, I thought my metabolism was permanently slow. SlimVital has proven me wrong! Not only have I lost weight, but I have so much more energy to play with my grandchildren. The customer service was proper lovely too - very helpful with my questions.',
      date: '3 May 2023',
      verified: true,
    },
    {
      name: 'Harry Richardson',
      location: 'Bristol',
      rating: 4,
      review:
        "Was skeptical at first, especially after trying other supplements, but after 6 weeks I've dropped nearly 9kg. Perfect for the British lifestyle where we don't always have time for elaborate meal prep. The only reason for 4 stars is it took about 2 weeks to start working for me.",
      date: '22 March 2023',
      verified: true,
    },
    {
      name: 'Charlotte Davies',
      location: 'Cardiff',
      rating: 5,
      review:
        "I can't believe the difference this has made to my figure! I've gone down 2 dress sizes in time for summer. My friends keep asking what my secret is. Fast delivery to Wales too, which was brilliant.",
      date: '7 June 2023',
      verified: true,
    },
    {
      name: 'William Johnson',
      location: 'Newcastle',
      rating: 5,
      review:
        "As someone who works night shifts at the hospital, keeping a regular diet was impossible. SlimVital has helped me manage my weight despite my irregular schedule. It's not a magic pill - you still need some discipline - but it makes everything so much easier.",
      date: '19 May 2023',
      verified: true,
    },
    {
      name: 'Emma Thompson',
      location: 'Brighton',
      rating: 5,
      review:
        'After having my second baby, I struggled terribly with losing the baby weight. SlimVital helped me get back to my pre-pregnancy size without affecting my breastfeeding. So grateful I found this product!',
      date: '2 April 2023',
      verified: true,
    },
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">What Our UK Customers Say</h2>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-4xl font-bold text-gray-800 mr-3">{averageRating.toFixed(1)}</div>
            <div className="flex flex-col">
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
              <span className="text-gray-600 text-sm">
                Based on {reviews.length} verified reviews
              </span>
            </div>
          </div>

          <div>
            <div className="bg-blue-100 text-brand-blue px-4 py-2 rounded-full flex items-center">
              <div className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="font-medium">97% of customers report satisfaction</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 20}`}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}, UK</p>
                  </div>
                </div>
                {review.verified && (
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"></path>
                    </svg>
                    Verified
                  </div>
                )}
              </div>

              <div className="mb-2 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-3">{review.review}</p>

              <div className="text-sm text-gray-500">Posted on {review.date}</div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="bg-white p-3 rounded-lg shadow">
                <div className="flex items-center justify-center">
                  <div className="flex flex-col">
                    <div className="text-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                        alt="Facebook"
                        className="w-8 h-8 mx-auto mb-2"
                      />
                      <div className="flex mb-1 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-4 h-4 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <p className="text-xs text-gray-600">9,847 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Join Thousands of Satisfied Britons</h3>
              <p className="text-gray-700 mb-6">
                Our community of SlimVital users across the United Kingdom is growing every day.
                From Scotland to Cornwall, people are experiencing the benefits of our
                scientifically formulated weight management solution.
              </p>
              <button className="cta-button">Claim Your Special UK Offer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
