import React from 'react';
import { Home, Truck, Recycle, Building2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Home,
      title: 'Residents Register',
      description: 'Households and businesses sign up and schedule waste pickups through our platform.',
      color: 'blue'
    },
    {
      icon: Truck,
      title: 'Smart Collection',
      description: 'AI optimizes routes for verified drivers who collect waste efficiently and sustainably.',
      color: 'green'
    },
    {
      icon: Recycle,
      title: 'Processing & Sorting',
      description: 'Materials are sorted, processed, and quality-checked at certified recycling facilities.',
      color: 'purple'
    },
    {
      icon: Building2,
      title: 'Manufacturing Supply',
      description: 'Processed materials are supplied to manufacturers as high-quality recycled raw materials.',
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
            How RecyLinker
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {' '}Transforms Waste
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform connects every stakeholder in the waste value chain, 
            creating a circular economy that benefits everyone.
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
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-green-500 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Join the Circular Economy
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;