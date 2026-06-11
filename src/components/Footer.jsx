
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* White background logo with metallic & 3D styling */}
              <div className="relative flex items-center bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                {/* Metallic 3D F icon */}
                <div className="w-7 h-7 rounded bg-gradient-to-br from-slate-400 via-slate-100 to-slate-500 flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.2)] border border-slate-300/50">
                  <span className="text-sm font-black text-slate-800">F</span>
                </div>
                <div className="ml-2.5 flex flex-col text-left">
                  <div className="text-xs font-extrabold tracking-tight text-slate-900 leading-none">
                    FRANK'S
                  </div>
                  <div className="text-[8px] font-black tracking-widest text-slate-800/90 leading-none mt-0.5">
                    AUTO PARTS
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for premium auto parts and exceptional services. Serving customers nationwide with reliable engines, transmissions, and expert sales support.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide">Quick links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Home</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Services</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">About us</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-muted-foreground">Used auto parts sales</span></li>
              <li><span className="text-sm text-muted-foreground">Engines & transmissions</span></li>
              <li><span className="text-sm text-muted-foreground">Body parts & panels</span></li>
              <li><span className="text-sm text-muted-foreground">Wheels & tires</span></li>
              <li><span className="text-sm text-muted-foreground">Electrical components</span></li>
              <li><span className="text-sm text-muted-foreground">Nationwide shipping</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide">Contact info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+18168822503" className="text-sm text-foreground hover:text-accent transition-colors duration-200">816-882-2503</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:FrankAutoParts390@gmail.com" className="text-sm text-foreground hover:text-accent transition-colors duration-200">FrankAutoParts390@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground">Dallas, Texas</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <p className="text-sm text-foreground">Mon-Fri: 8am - 6pm</p>
                  <p className="text-sm text-foreground">Sat: 9am - 4pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Frank's Auto Parts. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
