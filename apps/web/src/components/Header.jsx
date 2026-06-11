
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
    { name: 'Inventory', path: '/inventory' },
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
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center glow-shadow transition-all duration-300 group-hover:scale-110">
              <span className="text-2xl font-bold text-white">BA</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white tracking-tight">Brothers Auto Parts</div>
              <div className="text-xs text-muted-foreground tracking-wider">TRUSTED SINCE 1995</div>
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
                    : 'text-muted-foreground hover:text-white hover:bg-muted'
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
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-secondary border-border">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-6 border-b border-border">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <span className="text-lg font-bold text-white">BA</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Brothers Auto Parts</div>
                    <div className="text-xs text-muted-foreground">Since 1995</div>
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
                          : 'text-muted-foreground hover:text-white hover:bg-muted'
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
                  <a href="mailto:info@brothersautoparts.com" className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>info@brothersautoparts.com</span>
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
