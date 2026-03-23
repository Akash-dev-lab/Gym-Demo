import React from 'react';
import { Activity, HeartPulse, UserCircle2 } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      icon: <Activity className="w-10 h-10 text-orange-500 mb-6" />,
      title: "Strength Training",
      description: "Build muscle and increase your power with our state-of-the-art free weights and resistance machines.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-orange-500 mb-6" />,
      title: "Cardio Fitness",
      description: "Improve your endurance with our wide range of treadmills, ellipticals, and stationary bikes.",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2062&auto=format&fit=crop"
    },
    {
      icon: <UserCircle2 className="w-10 h-10 text-orange-500 mb-6" />,
      title: "Personal Training",
      description: "Achieve your goals faster with personalized workout plans and 1-on-1 coaching from our experts.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic">Push Your Limits</h3>
          <p className="text-slate-400 mt-6 text-lg">
            We offer everything you need to reach your fitness goals in a supportive, high-energy environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="premium-card group relative overflow-hidden flex flex-col items-start p-8">
              {/* Subtle background image visible on hover */}
              <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              <div className="relative z-10">
                {service.icon}
                <h4 className="text-2xl font-bold text-white mb-4 uppercase">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="mt-8">
                  <span className="text-orange-500 text-sm font-bold uppercase tracking-wider group-hover:underline cursor-pointer">
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
