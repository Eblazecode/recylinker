import React from 'react';
import { Leaf, Users, TrendingUp, Globe } from 'lucide-react';

const Impact = () => {
  const metrics = [
    {
      icon: Leaf,
      value: '150',
      unit: 'Tons',
      label: 'Waste Collected in Pilot',
      description: 'Early results from our Lagos pilot program',
      color: 'text-green-600'
    },
    {
      icon: Users,
      value: '25',
      unit: 'Jobs',
      label: 'Created in Beta Phase',
      description: 'Pilot drivers earning sustainable income',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: '₦500K',
      unit: 'Award',
      label: 'Software Exhibition Winner',
      description: 'Recognition for innovation and potential',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      value: '3',
      unit: 'Areas',
      label: 'Pilot Locations',
      description: 'Testing in Lagos, Abuja, and Port Harcourt',
      color: 'text-orange-600'
    }
  ];

  const achievements = [
    'Launched MVP with 25+ verified pilot drivers',
    'Collected 150+ tons in first 3 months',
    'Won ₦500k at National Software Exhibition',
    '200+ beta users providing valuable feedback',
    '95% positive feedback from pilot users',
    'Partnerships with 5 local recycling centers'
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Early
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {' '}Impact & Traction
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the promising results from our MVP launch and pilot programs across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${metric.color.replace('text-', 'bg-').replace('600', '100')} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-end space-x-1">
                  <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
                  <span className="text-sm font-medium text-gray-500 pb-1">{metric.unit}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{metric.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MVP Milestones</h3>
              <p className="text-gray-600 mb-6">
                RecyLinker's MVP has shown strong early traction and validation, 
                demonstrating the market need for our innovative waste management solution.
              </p>
            </div>

            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-colors duration-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                  <span className="text-gray-700 group-hover:text-green-700 transition-colors duration-200">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">MVP Dashboard</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span>Pilot Program Progress</span>
                  <span className="font-bold">Phase 1</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-[35%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span>User Satisfaction</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-[95%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span>Market Validation</span>
                  <span className="font-bold">Strong</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-[80%]"></div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <div className="text-sm opacity-90 mb-1">Next Milestone</div>
                <div className="text-2xl font-bold">Scale to 5 Cities</div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
              MVP Stage!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;