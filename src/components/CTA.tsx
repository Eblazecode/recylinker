import React from 'react';
import { ArrowRight, Smartphone, Users, Building } from 'lucide-react';

const CTA = () => {
  const userTypes = [
    {
      icon: Smartphone,
      title: 'Residents',
      description: 'Join our beta waitlist',
      action: 'Join Beta'
    },
    {
      icon: Users,
      title: 'Drivers',
      description: 'Apply for pilot program',
      action: 'Apply Now'
    },
    {
      icon: Building,
      title: 'Businesses',
      description: 'Become a pilot partner',
      action: 'Partner Up'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Be part of Nigeria's waste management transformation from the ground up. 
            Join our pilot programs and help shape the future of sustainable waste collection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {userTypes.map((type, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
              <p className="text-green-100 mb-6">{type.description}</p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center mx-auto">
                {type.action}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Partner with RecyLinker Today
            </h3>
            <p className="text-green-100 mb-8 text-lg">
              Whether you're a government agency, NGO, or corporate organization, 
              join our pilot programs and help us build a sustainable future for Nigeria.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1">
                Schedule Pilot Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                Learn About Partnerships
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-green-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>MVP stage</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Pilot programs available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Early adopter benefits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;