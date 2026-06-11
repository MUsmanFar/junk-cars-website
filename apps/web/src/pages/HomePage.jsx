
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Search, Package, Truck, Shield, DollarSign, Users, Award, CheckCircle, MapPin, Star, ChevronLeft, ChevronRight, Wrench, Cog, Car, Gauge, Zap, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { value: '30+', label: 'Years experience', icon: Award },
    { value: '15,000+', label: 'Parts available', icon: Package },
    { value: '48hr', label: 'Nationwide shipping', icon: Truck },
    { value: '98.7%', label: 'Customer satisfaction', icon: Star }
  ];

  const categories = [
    { 
      name: 'Engines', 
      icon: Cog, 
      description: 'Tested and reliable engines for all makes and models',
      color: 'from-orange-500/20 to-red-500/20'
    },
    { 
      name: 'Transmissions', 
      icon: Gauge, 
      description: 'Manual and automatic transmissions with warranty',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    { 
      name: 'Body parts', 
      icon: Car, 
      description: 'Doors, fenders, bumpers, and complete body panels',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      name: 'Wheels', 
      icon: Radio, 
      description: 'OEM and aftermarket wheels in various sizes',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    { 
      name: 'Radiators', 
      icon: Wrench, 
      description: 'Cooling systems and radiator assemblies',
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    { 
      name: 'Electrical', 
      icon: Zap, 
      description: 'Alternators, starters, and electrical components',
      color: 'from-indigo-500/20 to-blue-500/20'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Massive inventory',
      description: 'Over 15,000 quality-tested parts from domestic and import vehicles. If we don\'t have it, we\'ll find it.',
      icon: Package,
      stat: '15,000+ parts'
    },
    {
      title: 'Quality tested',
      description: 'Every part undergoes rigorous inspection and testing before shipping. We stand behind our quality.',
      icon: Shield,
      stat: '100% inspected'
    },
    {
      title: 'Fast shipping',
      description: 'Most orders ship within 24 hours. Nationwide delivery in 2-3 business days with tracking.',
      icon: Truck,
      stat: '24hr dispatch'
    },
    {
      title: 'Expert support',
      description: 'Our team has decades of automotive experience. We help you find the exact part you need.',
      icon: Users,
      stat: '30+ years exp'
    },
    {
      title: 'Fair pricing',
      description: 'Competitive prices on all parts with transparent quotes. No hidden fees or surprise charges.',
      icon: DollarSign,
      stat: 'Best value'
    },
    {
      title: 'Trusted since 1995',
      description: 'Three decades of serving mechanics, body shops, and vehicle owners across the country.',
      icon: Award,
      stat: 'Est. 1995'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Tell us your vehicle',
      description: 'Provide your vehicle make, model, year, and VIN. The more details, the better we can help.'
    },
    {
      step: '02',
      title: 'We locate the part',
      description: 'Our team searches our extensive inventory and network to find the exact part you need.'
    },
    {
      step: '03',
      title: 'Receive pricing',
      description: 'Get a transparent quote with no hidden fees. We include shipping costs upfront.'
    },
    {
      step: '04',
      title: 'Fast delivery',
      description: 'Parts are carefully packaged and shipped within 24 hours. Track your order every step.'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Chen',
      role: 'Auto repair shop owner',
      content: "Frank's Auto Parts has been our go-to supplier for 8 years. Their service is fast, prices are fair, and parts always arrive on time. The quality is consistently excellent.",
      rating: 5,
      location: 'Houston, TX'
    },
    {
      name: 'Lucia Torres',
      role: 'Fleet manager',
      content: 'Managing a fleet of 40 vehicles, I need reliable parts fast. Frank\'s delivers every time. Their team knows auto parts inside out and always finds what I need.',
      rating: 5,
      location: 'Phoenix, AZ'
    },
    {
      name: 'Raj Patel',
      role: 'Body shop technician',
      content: 'The quality of body panels and exterior parts is outstanding. Everything fits perfectly and matches OEM specs. Shipping is incredibly fast too.',
      rating: 5,
      location: 'Atlanta, GA'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>Frank's Auto Parts - Premium Auto Parts & Services since 1995</title>
        <meta name="description" content="Trusted source for quality used auto parts and sales. Engines, transmissions, body parts, wheels, and hard-to-find components shipped nationwide. 30+ years experience." />
      </Helmet>

      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600188881015-c01168ab7a4a)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full glass-effect text-sm font-medium text-accent">
              Trusted since 1995
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              QUALITY USED AUTO PARTS
              <br />
              <span className="text-accent">BUILT ON TRUST</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Reliable engines, transmissions, body parts, wheels, and hard-to-find auto components shipped nationwide
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/services">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg glow-shadow-strong transition-all duration-200 active:scale-95">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/quote-request">
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-lg transition-all duration-200 active:scale-95">
                  Request quote
                </Button>
              </Link>
              <a href="tel:+1234567890">
                <Button size="lg" variant="outline" className="border-border text-slate-900 hover:bg-muted px-8 py-6 text-lg transition-all duration-200 active:scale-95">
                  <Phone className="mr-2 w-5 h-5" />
                  Call now
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 hover-lift"
                >
                  <stat.icon className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-slate-900 mb-1 font-variant-tabular">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
              Browse by category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive inventory of quality-tested auto parts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`glass-effect border-border hover-3d luxury-shadow group cursor-pointer h-full`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{category.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                    <div className="mt-6 flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Browse parts
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
              Why customers choose us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three decades of experience delivering quality parts and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 hover-lift luxury-shadow group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <span className="text-sm font-semibold text-accent px-3 py-1 rounded-full bg-accent/10">
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium text-accent">
                Our story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Built on trust, driven by quality
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Since 1995, Frank's Auto Parts has been the trusted source for premium auto parts and customer sales across the nation. What started as a small family operation in Dallas has grown into one of the most reliable suppliers in the industry.
                </p>
                <p>
                  We understand that when your vehicle needs a part, you need it fast and you need it right. That's why we've built a vast network of suppliers and tested components, ready to ship within 24 hours.
                </p>
                <p>
                  Our team brings decades of automotive expertise to every interaction. We don't just sell parts — we help you find the exact component your vehicle needs, backed by our commitment to quality and customer satisfaction.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <Link to="/about">
                  <Button className="bg-accent hover:bg-accent/90 text-white transition-all duration-200 active:scale-95">
                    Learn more about us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden luxury-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1551522435-a13afa10f103" 
                  alt="Auto parts warehouse with organized inventory"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-effect-strong rounded-2xl p-6 max-w-xs">
                <div className="text-4xl font-bold text-accent mb-2 font-variant-tabular">30+</div>
                <div className="text-slate-900 font-semibold mb-1">Years of experience</div>
                <div className="text-sm text-muted-foreground">Serving the automotive industry since 1995</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
              How it works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting the right part for your vehicle is simple and fast
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border-2 border-accent/30">
                      <span className="text-3xl font-bold text-accent">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 glass-effect rounded-2xl p-8 hover-lift">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="ml-10 mt-4 mb-4 w-0.5 h-8 bg-gradient-to-b from-accent/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
              What our customers say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from mechanics, shops, and vehicle owners
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-effect-strong rounded-3xl p-12 luxury-shadow"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-xl text-slate-800 leading-relaxed mb-8">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                  <div className="text-sm text-accent flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-border hover:bg-muted transition-all duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-border hover:bg-muted transition-all duration-200"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-accent w-8' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
              Serving customers nationwide
            </h2>
            <p className="text-lg text-muted-foreground">
              Based in Texas, shipping quality parts across all 50 states
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-12 luxury-shadow"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
                    <p className="text-muted-foreground">Dallas, Texas - Central location for fast nationwide shipping</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Fast delivery</h3>
                    <p className="text-muted-foreground">2-3 business days to most locations with tracking included</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">All 50 states</h3>
                    <p className="text-muted-foreground">No matter where you are, we can get parts to you quickly</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-3xl p-8 luxury-shadow"
            >
              <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map visualization</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Need the right part fast?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our team is ready to help you find exactly what you need
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/quote-request">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg glow-shadow-strong transition-all duration-200 active:scale-95">
                  Request quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+1234567890">
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-lg transition-all duration-200 active:scale-95">
                  <Phone className="mr-2 w-5 h-5" />
                  Call now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
