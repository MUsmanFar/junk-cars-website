
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cog, Gauge, Car, Radio, Wrench, Zap, Truck, Shield, CheckCircle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ServicesPage = () => {
  const services = [
    {
      title: 'Used auto parts',
      description: 'Comprehensive inventory of quality-tested used auto parts for all makes and models',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1600188881015-c01168ab7a4a',
      features: [
        'Extensive inventory from domestic and import vehicles',
        'Every part inspected and tested before sale',
        'Competitive pricing with transparent quotes',
        'Fast identification and sourcing',
        'Warranty options available on select parts'
      ],
      stats: { value: '15,000+', label: 'Parts in stock' }
    },
    {
      title: 'Engines',
      description: 'Tested and verified engines with detailed specifications and warranty coverage',
      icon: Cog,
      image: 'https://images.unsplash.com/photo-1605781204315-63e8680b2d38',
      features: [
        'Complete engine assemblies ready to install',
        'Compression tested and leak-down verified',
        'Detailed mileage and service history when available',
        'Multiple options for most vehicle applications',
        '90-day warranty on all engine purchases'
      ],
      stats: { value: '500+', label: 'Engines available' }
    },
    {
      title: 'Transmissions',
      description: 'Manual and automatic transmissions tested for smooth operation and reliability',
      icon: Gauge,
      image: 'https://images.unsplash.com/photo-1646119753710-3349158afd4f',
      features: [
        'Both manual and automatic transmissions in stock',
        'Road tested before removal from donor vehicle',
        'Includes torque converter for automatic units',
        'Detailed shift quality reports available',
        '90-day warranty coverage included'
      ],
      stats: { value: '400+', label: 'Transmissions ready' }
    },
    {
      title: 'Body parts',
      description: 'Doors, fenders, bumpers, hoods, and complete body panels in excellent condition',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1600188881015-c01168ab7a4a',
      features: [
        'OEM body panels for precise fit and finish',
        'Inspected for structural integrity and damage',
        'Paint-ready or pre-painted options available',
        'Complete door assemblies with glass and hardware',
        'Bumper covers, grilles, and trim pieces'
      ],
      stats: { value: '2,000+', label: 'Body components' }
    },
    {
      title: 'Wheels',
      description: 'Factory OEM and aftermarket wheels in various sizes and styles',
      icon: Radio,
      image: 'https://images.unsplash.com/photo-1677917362048-a9e5267d7882',
      features: [
        'Factory OEM wheels for perfect fitment',
        'Aftermarket performance and custom wheels',
        'Inspected for cracks, bends, and damage',
        'Available in sets or individual wheels',
        'Tire mounting and balancing services available'
      ],
      stats: { value: '1,500+', label: 'Wheels in stock' }
    },
    {
      title: 'Radiators',
      description: 'Complete cooling system components including radiators and condensers',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1600188881015-c01168ab7a4a',
      features: [
        'Radiators pressure tested for leaks',
        'AC condensers and cooling fans available',
        'Includes mounting brackets when applicable',
        'Verified for proper core thickness and capacity',
        'Quick turnaround on most applications'
      ],
      stats: { value: '600+', label: 'Cooling parts' }
    },
    {
      title: 'Electrical components',
      description: 'Alternators, starters, modules, and complete electrical assemblies',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1600188881015-c01168ab7a4a',
      features: [
        'Alternators and starters bench tested',
        'ECM, BCM, and control modules available',
        'Complete wiring harnesses for major systems',
        'Sensors, switches, and relays in stock',
        '30-day warranty on electrical components'
      ],
      stats: { value: '3,000+', label: 'Electrical parts' }
    },
    {
      title: 'Nationwide shipping',
      description: 'Fast, reliable shipping to all 50 states with tracking and insurance',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1600188881015-c01168ab7a4a',
      features: [
        'Most orders ship within 24 hours',
        '2-3 business day delivery to most locations',
        'Professional packaging to prevent damage',
        'Full tracking information provided',
        'Insurance coverage on all shipments'
      ],
      stats: { value: '48hr', label: 'Average delivery' }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Frank's Auto Parts quality used auto parts and nationwide shipping</title>
        <meta name="description" content="Explore our comprehensive services: engines, transmissions, body parts, wheels, radiators, electrical components, and fast nationwide shipping." />
      </Helmet>

      <Header />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden noise-overlay">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full glass-effect text-sm font-medium text-accent">
              What we offer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Our services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive auto parts solutions with quality testing, expert support, and fast nationwide delivery
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <section 
          key={index} 
          className={`py-24 ${index % 2 === 0 ? 'bg-secondary' : 'bg-background'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 0 ? '' : 'lg:grid-flow-dense'
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? '' : 'lg:col-start-2'}
              >
                <div className="relative rounded-3xl overflow-hidden luxury-shadow group">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Frank's Auto Parts service`}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass-effect-strong rounded-2xl p-6">
                      <div className="text-4xl font-bold text-accent mb-2 font-variant-tabular">{service.stats.value}</div>
                      <div className="text-white font-semibold">{service.stats.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  {service.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/quote-request">
                    <Button className="bg-accent hover:bg-accent/90 text-white transition-all duration-200 active:scale-95">
                      Request quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-border text-white hover:bg-muted transition-all duration-200 active:scale-95">
                      Contact us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our team is here to help you find the exact part you need
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/quote-request">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg glow-shadow-strong transition-all duration-200 active:scale-95">
                  Request a quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-lg transition-all duration-200 active:scale-95">
                  Contact us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
