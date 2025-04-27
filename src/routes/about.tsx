import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            About AI Mock Interview
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Empowering candidates with AI-powered interview preparation to help them land their dream jobs.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white shadow-xl rounded-xl p-6 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At AI Mock Interview, we're revolutionizing the way candidates prepare for job interviews. 
              Our mission is to make interview preparation accessible, effective, and personalized for everyone, 
              regardless of their background or experience level.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="text-indigo-600 mb-2">
                  <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Accessibility</h3>
                <p className="text-sm text-gray-600">Making interview prep available to everyone, anywhere, anytime</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="text-indigo-600 mb-2">
                  <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Innovation</h3>
                <p className="text-sm text-gray-600">Leveraging AI to provide personalized interview experiences</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="text-indigo-600 mb-2">
                  <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Community</h3>
                <p className="text-sm text-gray-600">Building a supportive community of job seekers and professionals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-xl rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">AI-powered interview simulations that adapt to your responses</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Comprehensive feedback on your performance</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Wide range of interview types and industries covered</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Progress tracking and personalized improvement suggestions</p>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Success Stories</h3>
                <p className="mt-2 text-gray-600">
                  Thousands of candidates have improved their interview skills and landed their dream jobs 
                  through our platform. Our AI-powered system has helped users increase their interview 
                  success rate by over 80%.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Continuous Innovation</h3>
                <p className="mt-2 text-gray-600">
                  We're constantly improving our platform with new features and interview types to ensure 
                  our users are always prepared for the latest interview trends and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ace Your Next Interview?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of successful candidates who have improved their interview skills with AI Mock Interview.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 