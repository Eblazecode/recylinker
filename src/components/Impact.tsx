import React from 'react';
import { Leaf, Users, TrendingUp, Globe } from 'lucide-react';

const Impact = () => {
  const metrics = [
    {
      icon: Leaf,
      value: '2,500',
      unit: 'Tons',
      label: 'Waste Diverted from Landfills',
      description: 'Reducing environmental pollution and extending landfill lifespan',
      color: 'text-green-600'
    },
    {
      icon: Users,
      value: '850',
      unit: 'Jobs',
      label: 'Created Across Communities',
      description: 'Empowering local communities with sustainable employment',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: '₦45M',
      unit: 'Value',
      label: 'Generated from Recycled Materials',
      description: 'Creating economic value from waste through circular economy',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      value: '15',
      unit: 'States',
      label: 'Across Nigeria',
      description: 'Expanding sustainable waste management nationwide',
      color: 'text-orange-600'
    }
  ];

  const achievements = [
    'Reduced collection costs by 40% through AI optimization',
    'Achieved 85% waste diversion rate from landfills',
    'Created 850+ sustainable jobs in 6 months',
    '50+ verified recycling partners nationwide',
    '95% customer satisfaction rating',
    'Won ₦500k at National Software Exhibition'
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Measurable
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {' '}Environmental Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the real-world impact RecyLinker is making across Nigeria's communities, 
            environment, and economy through data-driven sustainability.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h3>
              <p className="text-gray-600 mb-6">
                RecyLinker's innovative approach has delivered concrete results across Nigeria, 
                demonstrating the power of technology in solving environmental challenges.
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
              <h3 className="text-2xl font-bold mb-6">Sustainability Dashboard</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span>Carbon Footprint Reduction</span>
                  <span className="font-bold">-42%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-[42%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span>Waste Diversion Rate</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-[85%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span>Community Engagement</span>
                  <span className="font-bold">92%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-[92%]"></div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <div className="text-sm opacity-90 mb-1">This Month's Impact</div>
                <div className="text-2xl font-bold">15.2 tons CO₂ saved</div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
              Award Winner!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;