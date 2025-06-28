import React from 'react';
import { ArrowRight, Play, Smartphone, Truck, Users, BarChart3 } from 'lucide-react';

const Hero = () => {
  const stats = [
    //{ icon: Truck, label: 'Pilot Drivers', value: '25+' },
    //{ icon: BarChart3, label: 'Tons Collected', value: '150+' },
    //{ icon: Users, label: 'Beta Users', value: '200+' },
   // { icon: Smartphone, label: 'App Downloads', value: '500+' },
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                🚀
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Smart Waste Collection.
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                  Cleaner Cities.
                </span>
                <span className="text-4xl lg:text-5xl text-gray-700">
                  Empowered People.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                RecyLinker connects households, businesses, and recyclers with vetted waste drivers using AI — 
                <span className="font-semibold text-green-600"> like Uber, but for trash.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Join Beta Waitlist
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                 Become a Pilot Driver
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
            {/* Mobile App Mockup */}
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">RecyLinker Beta</h3>
                  <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm opacity-90">Beta Testing</div>
                    <div className="font-bold">Abuja Pilot Area</div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-white/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold">150+</div>
                      <div className="text-xs opacity-90">Tons Collected</div>
                    </div>
                    <div className="flex-1 bg-white/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold">₦2.5K</div>
                      <div className="text-xs opacity-90">Avg. Earned</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold">
                  Request Beta Access
                </button>
                <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold">
                   Track Pilot Impact
                </button>
                <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold">
                   Join Driver Program
                </button>
              </div>
              
              <div className="flex justify-center space-x-4 mt-6">
                <div className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-xs font-semibold">
                    <span className="font-bold">Beta Stage</span> - Join our pilot program to help shape the future of waste management.
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;