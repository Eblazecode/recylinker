import React, { useState } from 'react';
import { Home, Building, Truck, Recycle, Users, Calendar, BarChart3, DollarSign } from 'lucide-react';

const Stakeholders = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stakeholders = [
    {
      id: 'residents',
      title: 'Homeowners/Residents',
      icon: Home,
      subtitle: 'Join our beta program',
      benefits: [
        'Early access to waste pickup scheduling',
        'Track your environmental impact',
        'Transparent pricing with no hidden fees',
        'Verified and rated pilot drivers',
        'Help shape the future of waste management'
      ],
      cta: 'Join Beta Waitlist',
      color: 'blue'
    },
    {
      id: 'businesses',
      title: 'Businesses',
      icon: Building,
      subtitle: 'Partner with us for pilot testing',
      benefits: [
        'Pilot waste collection services',
        'Early sustainability reporting features',
        'Cost-effective waste management testing',
        'Custom pickup schedules for your business',
        'Be part of the circular economy movement'
      ],
      cta: 'Become Pilot Partner',
      color: 'green'
    },
    {
      id: 'drivers',
      title: 'Drivers',
      icon: Truck,
      subtitle: 'Join our pilot driver program',
      benefits: [
        'Flexible working hours in pilot areas',
        'Early access to route optimization',
        'Guaranteed payment system',
        'Driver training and certification',
        'Ground-floor opportunity in growing startup'
      ],
      cta: 'Apply as Pilot Driver',
      color: 'purple'
    },
    {
      id: 'recyclers',
      title: 'Recycling Agencies',
      icon: Recycle,
      subtitle: 'Partner with our growing network',
      benefits: [
        'Access to pilot waste streams',
        'Digital tracking and documentation',
        'Partnership opportunities as we scale',
        'Early market access through our platform',
        'Collaborate on sustainable solutions'
      ],
      cta: 'Explore Partnership',
      color: 'orange'
    },
    {
      id: 'government',
      title: 'Governments',
      icon: Users,
      subtitle: 'Pilot smart waste management data',
      benefits: [
        'Early access to waste management insights',
        'Pilot program data and recommendations',
        'Community engagement metrics',
        'Environmental impact pilot reporting',
        'Public-private partnership opportunities'
      ],
      cta: 'Schedule Pilot Demo',
      color: 'indigo'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-500' },
    green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-500' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-500' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-500' },
    indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-500' }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            For Stakeholders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our pilot programs and help shape the future of waste management in Nigeria.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {stakeholders.map((stakeholder, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `${colorMap[stakeholder.color].bg} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <stakeholder.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{stakeholder.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 w-8/12 mx-auto">
          {stakeholders.map((stakeholder, index) => (
            <div
              key={index}
              className={`${activeTab === index ? 'block' : 'hidden'}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${colorMap[stakeholder.color].bg} rounded-xl flex items-center justify-center`}>
                      <stakeholder.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{stakeholder.title}</h3>
                      <p className={`${colorMap[stakeholder.color].text} font-medium`}>{stakeholder.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {stakeholder.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 ${colorMap[stakeholder.color].bg} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`${colorMap[stakeholder.color].bg} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
                    {stakeholder.cta}
                  </button>
                </div>
                {/* right Tab Content */}
                {/*  <div className="relative">
                  <div className={`bg-gradient-to-br ${colorMap[stakeholder.color].bg.replace('bg-', 'from-')}-400 to-${colorMap[stakeholder.color].bg.split('-')[1]}-600 rounded-2xl p-8 text-black`}>
                    <h4 className="text-xl font-bold mb-6">Pilot Stats</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <Calendar className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">3</div>
                        <div className="text-sm opacity-90">Months Live</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <BarChart3 className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">95%</div>
                        <div className="text-sm opacity-90">Satisfaction</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <Users className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">25+</div>
                        <div className="text-sm opacity-90">Pilot Partners</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <DollarSign className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">₦500K</div>
                        <div className="text-sm opacity-90">Award Won</div>
                      </div>
                    </div>
                  </div>
                </div>   */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;