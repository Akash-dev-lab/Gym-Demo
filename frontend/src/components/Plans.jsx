import React from 'react';
import { Check } from 'lucide-react';

const Plans = () => {
  const plansData = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "1 Group class per week"
      ],
      highlighted: false
    },
    {
      name: "Standard",
      price: "$49",
      period: "/month",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "1 Personal training session",
        "Sauna access"
      ],
      highlighted: true
    },
    {
      name: "Premium",
      price: "$79",
      period: "/month",
      features: [
        "Everything in Standard",
        "Unlimited personal training",
        "Nutritionist consultation",
        "Guest passes"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="plans" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Membership</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic">Choose Your Plan</h3>
          <p className="text-slate-400 mt-6 text-lg">
            Flexible pricing options designed to fit your fitness journey and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plansData.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-8 rounded-3xl transition-transform duration-300 ${
                plan.highlighted 
                  ? 'bg-zinc-900 border-2 border-orange-500 transform md:-translate-y-4 shadow-[0_0_40px_rgb(249,115,22,0.15)] relative' 
                  : 'bg-zinc-900/50 border border-white/5 hover:-translate-y-2'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-white uppercase mb-4">{plan.name}</h4>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-black text-white leading-none">{plan.price}</span>
                  <span className="text-slate-400 font-medium mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-orange-500' : 'text-slate-400'}`} />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-full font-bold uppercase tracking-wide transition-all ${
                  plan.highlighted 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20' 
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
