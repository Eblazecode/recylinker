import React from 'react';
import { CheckCircle, Heart, Briefcase, RotateCcw } from 'lucide-react';

const WhyRecyLinker = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Cleaner Communities',
      description: 'Reduce litter and illegal dumping while enhancing urban cleanliness and public health.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Greener Environment',
      description: 'Divert waste from landfills, reduce carbon emissions, and protect our natural ecosystems.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'Job Creation',
      description: 'Empower communities with sustainable employment opportunities and economic growth.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: RotateCcw,
      title: 'Circular Economy',
      description: 'Transform waste into valuable resources, creating a sustainable loop of production and consumption.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why RecyLinker?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just waste collection — we're building a sustainable future for Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Be part of Nigeria's largest waste management revolution. Together, we can create cleaner cities, 
              protect our environment, and build a sustainable future for generations to come.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRecyLinker;