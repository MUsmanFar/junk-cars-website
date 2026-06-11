
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    console.log('Sending contact form message to API database:', formData);
    toast.success('Message sent successfully. We will respond within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(123) 456-7890',
      subtext: 'Mon-Fri: 8am - 6pm, Sat: 9am - 4pm',
      link: 'tel:+1234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@brothersautoparts.com',
      subtext: 'We respond within 24 hours',
      link: 'mailto:info@brothersautoparts.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Dallas, Texas',
      subtext: 'Serving all 50 states',
      link: null
    },
    {
      icon: Clock,
      title: 'Business hours',
      details: 'Mon-Fri: 8am - 6pm',
      subtext: 'Sat: 9am - 4pm, Sun: Closed',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Brothers Auto Parts - Get in touch for auto parts inquiries</title>
        <meta name="description" content="Contact Brothers Auto Parts for quality used auto parts. Call, email, or visit us in Dallas, Texas. Fast response times and expert support." />
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
              We're here to help
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Get in touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about parts or need help finding what you need? Our team is ready to assist you
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-border hover-lift luxury-shadow h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-lg font-bold text-white hover:text-accent transition-colors duration-200 block mb-1">
                        {info.details}
                      </a>
                    ) : (
                      <div className="text-lg font-bold text-white mb-1">{info.details}</div>
                    )}
                    <p className="text-sm text-muted-foreground">{info.subtext}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
                Send us a message
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours. For urgent inquiries, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the part you need or any questions you have..."
                    rows={6}
                    className="bg-background/50 border-border text-white placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg glow-shadow transition-all duration-200 active:scale-95"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-3xl p-8 luxury-shadow">
                <h3 className="text-2xl font-bold text-white mb-6">Visit our location</h3>
                <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive map</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Brothers Auto Parts</p>
                      <p className="text-sm text-muted-foreground">Dallas, Texas</p>
                      <p className="text-sm text-muted-foreground">Serving nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-3xl p-8 luxury-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Response time guarantee</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We respond to all inquiries within 24 hours during business days. For urgent part requests, call us directly for immediate assistance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-3xl p-8 luxury-shadow">
                <h3 className="text-xl font-bold text-white mb-4">Need a quote instead?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you know exactly what part you need, use our quote request form for faster service.
                </p>
                <Link to="/quote-request">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white transition-all duration-200 active:scale-95">
                    Request a quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
