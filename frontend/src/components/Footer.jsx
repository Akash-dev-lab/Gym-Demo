import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-black tracking-tight text-white uppercase italic">
                Envision Fitness
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Premium fitness facility dedicated to helping you achieve your physical best. Join our community and unleash your potential.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-orange-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-orange-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-orange-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#plans" className="text-slate-400 hover:text-orange-500 transition-colors">Membership Plans</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">Shop no 116 savitri complex oppsite chaudhary mall G.t road, Ghaizabad, Uttar Pradesh 201009</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-slate-400">07042209851</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-slate-400">[EMAIL_ADDRESS]</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Working Hours</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">24 Hours</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-white font-medium">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Elite Fitness Gym. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
