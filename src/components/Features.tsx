import React from 'react';
import { Truck, MapPin, ShoppingCart, Users, BarChart3, Briefcase } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: ' Green-Haulers Driver Network',
      description: 'Vetted drivers available on-demand with real-time tracking and customer ratings.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'AI-Based Route Optimization',
      description: 'Smart algorithms reduce collection time by 35% and fuel costs by 40%.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShoppingCart,
      title: ' Recycled Products Marketplace',
      description: 'Connect recyclers with manufacturers through transparent pricing and quality assurance.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Waste Analytics',
      description: 'Track environmental impact, carbon footprint reduction, and community metrics.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Briefcase,
      title: ' Job Creation Engine',
      description: 'Empowering communities with sustainable employment opportunities.',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Users,
      title: ' Corporate & Government Partnerships',
      description: 'API integration for third-party firms and government collaboration.',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Core Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools that power the entire waste value chain ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 from-green-500 to-emerald-500"></div>
              
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;