
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
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center glow-shadow">
                <span className="text-2xl font-bold text-white">BA</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">Brothers Auto Parts</div>
                <div className="text-xs text-muted-foreground">Since 1995</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for quality used auto parts. Serving customers nationwide with reliable engines, transmissions, and hard-to-find components.
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
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">Quick links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Home</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Services</Link></li>
              <li><Link to="/inventory" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Inventory</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">About us</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-muted-foreground">Used auto parts</span></li>
              <li><span className="text-sm text-muted-foreground">Engines & transmissions</span></li>
              <li><span className="text-sm text-muted-foreground">Body parts & panels</span></li>
              <li><span className="text-sm text-muted-foreground">Wheels & tires</span></li>
              <li><span className="text-sm text-muted-foreground">Electrical components</span></li>
              <li><span className="text-sm text-muted-foreground">Nationwide shipping</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">Contact info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="text-sm text-white hover:text-accent transition-colors duration-200">(123) 456-7890</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@brothersautoparts.com" className="text-sm text-white hover:text-accent transition-colors duration-200">info@brothersautoparts.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm text-white">Dallas, Texas</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <p className="text-sm text-white">Mon-Fri: 8am - 6pm</p>
                  <p className="text-sm text-white">Sat: 9am - 4pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Brothers Auto Parts. All rights reserved.
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
