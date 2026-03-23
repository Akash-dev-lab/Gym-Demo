import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym interior with dark moody lighting"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_20s_infinite_alternate]"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 space-y-6 md:space-y-8 max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 font-medium text-sm tracking-widest uppercase mb-2 animate-bounce">
            Premium Fitness Brand
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase italic tracking-tighter">
            Transform Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              Body Today
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-lg leading-relaxed">
            Join the best gym in Ghaziabad. Experience world-class equipment, expert trainers, and a community that pushes you to greatness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 group transition-all hover:shadow-[0_0_30px_rgb(249,115,22,0.4)]">
              Call Now / WhatsApp
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm border border-white/10 transition-colors">
              View Plans
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 mt-10">
            <div>
              <p className="text-3xl font-black text-white">50+</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Machines</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">24/7</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Access</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">10+</p>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Trainers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
