import React from 'react';
import { Target, Users, Leaf, Building, Zap, Handshake } from 'lucide-react';

const SDGAlignment = () => {
  const sdgGoals = [
    {
      number: 11,
      title: 'Sustainable Cities and Communities',
      icon: Building,
      feature: 'AI-powered Smart Waste Collection',
      impact: 'Cleaner urban spaces',
      description: 'Reduces litter and illegal dumping while enhancing urban cleanliness and public health through integration with local councils.',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: 12,
      title: 'Responsible Consumption and Production',
      icon: Target,
      feature: 'Recycled Product Marketplace',
      impact: 'Encourages circular economy',
      description: 'Promotes reuse and upcycling while reducing demand for virgin materials and encouraging responsible consumer behavior.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: 13,
      title: 'Climate Action',
      icon: Leaf,
      feature: 'Route Optimization',
      impact: 'Reduces carbon footprint',
      description: 'AI-driven route optimization reduces vehicle emissions and tracks GHG savings per recycled item for climate impact.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: 8,
      title: 'Decent Work and Economic Growth',
      icon: Users,
      feature: 'Job Platform for Collectors',
      impact: 'Empowers low-income youth',
      description: 'Creates dignified green jobs through vetted driver networks and enables micro-enterprises via marketplace participation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: 9,
      title: 'Industry, Innovation, and Infrastructure',
      icon: Zap,
      feature: 'AI & IoT for Waste Management',
      impact: 'Digitizes waste sector',
      description: 'Modernizes waste management using innovation and builds sustainable tech infrastructure in the waste sector.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: 17,
      title: 'Partnerships for the Goals',
      icon: Handshake,
      feature: 'API & Open Collaboration',
      impact: 'Enables NGO and Gov synergy',
      description: 'Fosters cross-sector collaboration through API integration allowing third-party firms and governments to participate.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🌍 UN Sustainable Development Goals
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Aligned with
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {' '}Global Sustainability Goals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RecyLinker directly contributes to 6 key UN Sustainable Development Goals, 
            creating measurable impact that resonates with investors, governments, and international organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sdgGoals.map((goal, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${goal.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <goal.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-400">SDG</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {goal.number}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {goal.title}
              </h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">{goal.feature}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-600">{goal.impact}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">SDG Impact Dashboard</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Track and measure RecyLinker's contribution to global sustainability goals 
                with real-time metrics and comprehensive impact reporting.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm text-blue-100">SDGs Addressed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">850+</div>
                  <div className="text-sm text-blue-100">Jobs Created</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">2.5k</div>
                  <div className="text-sm text-blue-100">Tons Diverted</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-blue-100">States Covered</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-4">Global Recognition</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">UN SDG Alignment Score</span>
                    <span className="font-bold">94%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[94%]"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Impact Measurement</span>
                    <span className="font-bold">Verified</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-full"></div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
                  View Full Impact Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">₦500k</div>
              <div className="text-sm text-gray-600">Award Winner</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">6/17</div>
              <div className="text-sm text-gray-600">SDGs Addressed</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Global</div>
              <div className="text-sm text-gray-600">Impact Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGAlignment;