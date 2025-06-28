import React from 'react';
import { Smartphone, Users, MapPin, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: 'Request Pickup',
      description: 'Book a one-time or recurring waste collection through the app.',
      detail: 'Schedule pickups that fit your routine',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Get Matched',
      description: 'Our AI pairs you with the nearest vetted RecyLinker driver.',
      detail: 'Verified drivers with real-time tracking',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Track & Drop-off',
      description: 'Track your pickup. Waste is delivered to verified recycling centers.',
      detail: 'Full transparency from pickup to processing',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Impact Report',
      description: 'View how much waste you\'ve recycled and your environmental impact.',
      detail: 'See your contribution to a cleaner Nigeria',
      color: 'orange'
    }
  ];

  const colorMap = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500'
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, smart, and sustainable. Get started with RecyLinker in four easy steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 opacity-30 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${colorMap[step.color]} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-green-500 rounded-full flex items-center justify-center text-green-600 font-bold text-sm z-10">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              📱 Download the App
            </button>
            <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300">
              🚛 Become a Driver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;