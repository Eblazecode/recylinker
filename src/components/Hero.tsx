import React from 'react';
import { ArrowRight, Play, Brain, Truck, Building, Users } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Brain, label: 'AI-Powered Routes', value: '95% Efficiency' },
    { icon: Truck, label: 'Active Drivers', value: '500+' },
    { icon: Building, label: 'Partner Recyclers', value: '50+' },
    { icon: Users, label: 'Communities Served', value: '25+' },
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                🏆 ₦500k Award Winner - Software Exhibition
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {' '}Waste Management
                </span>
                {' '}for Nigeria
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect residents, drivers, recyclers, and manufacturers in a seamless ecosystem. 
                Transform waste into value with intelligent route optimization and sustainable practices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center justify-center px-8 py-4 border-2 border-gray-200 rounded-full font-semibold text-gray-700 hover:border-green-500 hover:text-green-600 transition-all duration-300">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Route Optimization</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Pickup: Victoria Island</div>
                      <div className="text-xs text-gray-500">15 stops optimized</div>
                    </div>
                    <div className="text-green-600 font-semibold">-32%</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Sorting: Ikeja Facility</div>
                      <div className="text-xs text-gray-500">2.3 tons processed</div>
                    </div>
                    <div className="text-green-600 font-semibold">+45%</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Delivery: Manufacturer</div>
                      <div className="text-xs text-gray-500">Quality grade A+</div>
                    </div>
                    <div className="text-green-600 font-semibold">98%</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;