import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "Member for 2 years",
      content: "The trainers here are incredible. They pushed me past my limits and helped me achieve goals I never thought possible.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop"
    },
    {
      name: "Sarah Williams",
      role: "CrossFit Enthusiast",
      content: "Clean facility, amazing equipment, and a community that actually supports each other. Best gym in the city.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Beginner",
      content: "I was intimidated when I first started, but the staff made me feel right at home. I've lost 20lbs in 3 months!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic">Real Results</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-6 text-orange-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-slate-400 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
