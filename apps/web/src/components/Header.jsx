
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect-strong shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            {/* White background logo with metallic & 3D styling */}
            <div className="relative flex items-center bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.15),_0_2px_4px_rgba(255,255,255,0.8)_inset,_0_-2px_4px_rgba(0,0,0,0.05)_inset] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
              {/* Metallic 3D F icon */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-400 via-slate-100 to-slate-500 flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-slate-300/50">
                <span className="text-lg font-black text-slate-800 filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">F</span>
              </div>
              <div className="ml-3 flex flex-col text-left">
                <div className="text-sm font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-950 leading-none">
                  FRANK'S
                </div>
                <div className="text-[9px] font-black tracking-widest text-slate-800/90 leading-none mt-0.5">
                  AUTO PARTS
                </div>
                <div className="text-[6px] font-bold tracking-[0.15em] text-slate-500 leading-none mt-0.5 uppercase">
                  Service & Sales
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-accent text-white'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </a>
            <Link to="/quote-request">
              <Button className="bg-accent hover:bg-accent/90 text-white glow-shadow transition-all duration-200 active:scale-95">
                Request Quote
              </Button>
            </Link>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-secondary border-border">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-6 border-b border-border">
                  <div className="relative flex items-center bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-md">
                    <div className="w-7 h-7 rounded bg-gradient-to-br from-slate-400 via-slate-100 to-slate-500 flex items-center justify-center shadow">
                      <span className="text-sm font-black text-slate-800">F</span>
                    </div>
                    <div className="ml-2 flex flex-col text-left">
                      <div className="text-xs font-extrabold text-slate-900 leading-none">
                        FRANK'S
                      </div>
                      <div className="text-[8px] font-black text-slate-800 leading-none mt-0.5">
                        AUTO PARTS
                      </div>
                    </div>
                  </div>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? 'bg-accent text-white'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="pt-6 border-t border-border space-y-3">
                  <a href="tel:+1234567890" className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>(123) 456-7890</span>
                  </a>
                  <a href="mailto:info@franksautoparts.com" className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>info@franksautoparts.com</span>
                  </a>
                </div>

                <Link to="/quote-request" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
