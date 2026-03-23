import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      <Header />
      <main>
        <Hero />
        <Services />
        <Plans />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;