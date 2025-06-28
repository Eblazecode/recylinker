import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Stakeholders from './components/Stakeholders';
import WhyRecyLinker from './components/WhyRecyLinker';
import SDGAlignment from './components/SDGAlignment';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Stakeholders />
      <WhyRecyLinker />
      <SDGAlignment />
      <Impact />
      <Testimonials />
      <Newsletter />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;