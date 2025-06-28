import React, { useState } from 'react';
import { Home, Building, Truck, Recycle, Users, Calendar, BarChart3, DollarSign } from 'lucide-react';

const Stakeholders = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stakeholders = [
    {
      id: 'residents',
      title: 'Homeowners/Residents',
      icon: Home,
      subtitle: 'Easy, reliable waste pickups',
      benefits: [
        'Schedule one-time or recurring pickups',
        'Track your environmental impact',
        'Transparent pricing with no hidden fees',
        'Verified and rated drivers',
        'Real-time pickup notifications'
      ],
      cta: 'Request Pickup',
      color: 'blue'
    },
    {
      id: 'businesses',
      title: 'Businesses',
      icon: Building,
      subtitle: 'Scheduled waste management with reporting',
      benefits: [
        'Bulk waste collection services',
        'Sustainability reporting for compliance',
        'Cost-effective waste management',
        'Custom pickup schedules',
        'Corporate social responsibility metrics'
      ],
      cta: 'Get Business Plan',
      color: 'green'
    },
    {
      id: 'drivers',
      title: 'Drivers',
      icon: Truck,
      subtitle: 'Earn on your schedule',
      benefits: [
        'Flexible working hours',
        'AI-optimized routes save time and fuel',
        'Guaranteed payment system',
        'Driver training and certification',
        'Performance bonuses and incentives'
      ],
      cta: 'Become a Driver',
      color: 'purple'
    },
    {
      id: 'recyclers',
      title: 'Recycling Agencies',
      icon: Recycle,
      subtitle: 'Reliable supply of sorted recyclables',
      benefits: [
        'Consistent supply of quality materials',
        'Pre-sorted waste categories',
        'Digital tracking and documentation',
        'Partnership opportunities',
        'Market access through our platform'
      ],
      cta: 'Partner With Us',
      color: 'orange'
    },
    {
      id: 'government',
      title: 'Governments',
      icon: Users,
      subtitle: 'Smart data for waste policy and sanitation',
      benefits: [
        'Real-time waste management data',
        'Policy insights and recommendations',
        'Community engagement metrics',
        'Environmental impact reporting',
        'Public-private partnership opportunities'
      ],
      cta: 'Schedule Demo',
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
            RecyLinker serves every part of the waste ecosystem with tailored solutions.
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
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
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

                <div className="relative">
                  <div className={`bg-gradient-to-br ${colorMap[stakeholder.color].bg.replace('bg-', 'from-')}-400 to-${colorMap[stakeholder.color].bg.split('-')[1]}-600 rounded-2xl p-8 text-white`}>
                    <h4 className="text-xl font-bold mb-6">Quick Stats</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <Calendar className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm opacity-90">Available</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <BarChart3 className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">95%</div>
                        <div className="text-sm opacity-90">Satisfaction</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <Users className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-sm opacity-90">Partners</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <DollarSign className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">40%</div>
                        <div className="text-sm opacity-90">Cost Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;