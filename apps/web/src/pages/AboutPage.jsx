
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Target, TrendingUp, Shield, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  const milestones = [
    { year: '1995', title: 'Founded in Dallas', description: 'Started as a small family operation with a vision to provide quality used auto parts' },
    { year: '2003', title: 'Expanded inventory', description: 'Grew to over 5,000 parts and established partnerships with major salvage yards' },
    { year: '2010', title: 'Nationwide shipping', description: 'Launched nationwide delivery service, reaching customers in all 50 states' },
    { year: '2015', title: 'Quality certification', description: 'Implemented rigorous testing protocols and quality assurance standards' },
    { year: '2020', title: 'Digital transformation', description: 'Modernized inventory system and launched online ordering platform' },
    { year: '2026', title: 'Industry leader', description: 'Serving thousands of customers with 15,000+ parts and expert support' }
  ];

  const stats = [
    { value: '30+', label: 'Years in business', icon: Award },
    { value: '15,000+', label: 'Parts in stock', icon: Target },
    { value: '98.7%', label: 'Satisfaction rate', icon: Heart },
    { value: '50,000+', label: 'Orders fulfilled', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality first',
      description: 'Every part is inspected and tested before it reaches you. We never compromise on quality.'
    },
    {
      icon: Users,
      title: 'Customer focused',
      description: 'Your success is our success. We go the extra mile to ensure you get the right part.'
    },
    {
      icon: Heart,
      title: 'Built on trust',
      description: 'Three decades of honest business practices and transparent pricing have earned customer loyalty.'
    },
    {
      icon: TrendingUp,
      title: 'Always improving',
      description: 'We continuously invest in better systems, faster shipping, and expanded inventory.'
    }
  ];

  const team = [
    {
      name: 'David Martinez',
      role: 'Founder & CEO',
      bio: "With 35 years in the automotive industry, David built Frank's Auto Parts on a foundation of quality and trust.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Sarah Kim',
      role: 'Operations director',
      bio: 'Sarah oversees our inventory management and quality control, ensuring every part meets our standards.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'James Thompson',
      role: 'Technical specialist',
      bio: 'With 20 years as a master mechanic, James leads our technical team in part identification and testing.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Frank's Auto Parts - Our story and commitment to quality</title>
        <meta name="description" content="Learn about Frank's Auto Parts' 30-year journey providing quality used auto parts. Meet our team and discover our commitment to customer satisfaction." />
      </Helmet>

      <Header />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden noise-overlay">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1689202865186-50a2014287ca)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full glass-effect text-sm font-medium text-accent">
              Our story
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              About Frank's Auto Parts
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Three decades of providing quality used auto parts with integrity, expertise, and unwavering commitment to customer satisfaction
            </p>
          </motion.div>
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
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden luxury-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1689202865186-50a2014287ca" 
                  alt="Frank's Auto Parts warehouse facility with organized inventory"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Built on a foundation of trust and quality
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  In 1995, David Martinez opened Frank's Auto Parts with a simple mission: provide mechanics and vehicle owners with reliable, quality-tested used auto parts at fair prices. What began as a modest operation in Dallas has grown into one of the most trusted names in the industry.
                </p>
                <p>
                  We've never lost sight of what matters most — helping people get their vehicles back on the road quickly and affordably. Every part that leaves our facility has been carefully inspected, tested, and verified to meet our strict quality standards.
                </p>
                <p>
                  Today, we serve thousands of customers across all 50 states, from independent mechanics to large fleet operators. Our supply network is vast, but our commitment to personal service and quality remains unchanged.
                </p>
                <p>
                  When you choose Frank's Auto Parts, you're not just buying a component — you're partnering with a team that genuinely cares about your success.
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Our journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our 30-year history
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent/50 via-accent/30 to-transparent hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                    <div className="glass-effect rounded-2xl p-8 hover-lift luxury-shadow inline-block max-w-md">
                      <div className="text-4xl font-bold text-accent mb-3 font-variant-tabular">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block w-16 h-16 rounded-full bg-accent flex-shrink-0 flex items-center justify-center glow-shadow z-10">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              By the numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence, measured
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-border hover-3d luxury-shadow h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-5xl font-bold text-white mb-3 font-variant-tabular">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Our values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-10 hover-lift luxury-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Meet our leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The experienced team behind Frank's Auto Parts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-border hover-lift luxury-shadow overflow-hidden h-full">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={`${member.name}, ${member.role} at Frank's Auto Parts`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <div className="text-sm text-accent mb-4 font-medium">{member.role}</div>
                    <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Ready to experience the difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Frank's Auto Parts
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/quote-request">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg glow-shadow-strong transition-all duration-200 active:scale-95">
                  Request a quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-lg transition-all duration-200 active:scale-95">
                  Our Services
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

export default AboutPage;
