import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Technical Interviews",
      description: "Practice coding interviews with our AI-powered system that evaluates your solutions and provides detailed feedback.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        "Real-time code evaluation",
        "Multiple programming languages",
        "Algorithm and data structure practice",
        "System design scenarios"
      ]
    },
    {
      title: "Behavioral Interviews",
      description: "Master the art of behavioral interviews with our AI that analyzes your responses and provides improvement suggestions.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        "Common behavioral questions",
        "STAR method guidance",
        "Response analysis",
        "Personality trait assessment"
      ]
    },
    {
      title: "System Design Interviews",
      description: "Prepare for system design interviews with our comprehensive scenarios and real-world case studies.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Scalability scenarios",
        "Database design",
        "API design",
        "System architecture patterns"
      ]
    },
    {
      title: "Case Study Interviews",
      description: "Practice case study interviews with our AI that simulates real business scenarios and evaluates your solutions.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      features: [
        "Business case scenarios",
        "Market analysis",
        "Problem-solving frameworks",
        "Presentation skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Services
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Comprehensive interview preparation services designed to help you excel in any type of interview.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-xl rounded-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="bg-white shadow-xl rounded-xl p-6 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-2 text-gray-600">Choose the plan that works best for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$9.99<span className="text-base font-normal text-gray-600">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">5 interviews per month</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Basic feedback</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Email support</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get Started
              </button>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 transform scale-105">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-tl-lg rounded-br-lg">
                Popular
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pro</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$19.99<span className="text-base font-normal text-gray-600">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Unlimited interviews</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Detailed feedback</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Progress tracking</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get Started
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">Custom</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Custom interview types</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">API access</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-gray-600">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Interview Preparation?</h2>
          <p className="text-gray-600 mb-6">
            Choose a plan and start practicing with our AI-powered interview platform today.
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

export default ServicesPage; 