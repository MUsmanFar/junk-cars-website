
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Clock, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const QuoteRequestPage = () => {
  const [searchParams] = useSearchParams();

  const getNormalizedCategory = (cat) => {
    if (!cat) return '';
    const lower = cat.toLowerCase();
    if (lower === 'engines' || lower === 'engine') return 'engine';
    if (lower === 'transmissions' || lower === 'transmission') return 'transmission';
    if (lower === 'body parts' || lower === 'body') return 'body';
    if (lower === 'wheels') return 'wheels';
    if (lower === 'radiators' || lower === 'radiator') return 'radiator';
    if (lower === 'electrical') return 'electrical';
    return 'other';
  };

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    vin: '',
    partCategory: '',
    specificPart: '',
    quantity: '1',
    name: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });

  // Load URL query params on mount
  useEffect(() => {
    const part = searchParams.get('part') || '';
    const category = searchParams.get('category') || '';
    const make = searchParams.get('make') || '';
    const model = searchParams.get('model') || '';
    const year = searchParams.get('year') || '';

    setFormData(prev => ({
      ...prev,
      specificPart: part,
      partCategory: getNormalizedCategory(category),
      make: make,
      model: model,
      year: year
    }));
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.specificPart.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    console.log('Sending quote request to API database:', formData);
    toast.success('Quote request submitted. We will respond within 2 hours during business hours.');
    setFormData({
      make: '',
      model: '',
      year: '',
      vin: '',
      partCategory: '',
      specificPart: '',
      quantity: '1',
      name: '',
      email: '',
      phone: '',
      additionalInfo: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const guarantees = [
    {
      icon: Clock,
      title: 'Fast response',
      description: 'Quote delivered within 2 hours during business hours'
    },
    {
      icon: Shield,
      title: 'Quality guarantee',
      description: 'All parts tested and verified before shipping'
    },
    {
      icon: CheckCircle,
      title: 'No obligation',
      description: 'Free quotes with no commitment required'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I receive my quote?',
      answer: 'We provide quotes within 2 hours during business hours (Mon-Fri 8am-6pm, Sat 9am-4pm). Requests submitted outside business hours will be processed the next business day.'
    },
    {
      question: 'Do you need my VIN number?',
      answer: 'While not required, providing your VIN helps us ensure we quote the exact part that fits your vehicle. This reduces the chance of ordering an incorrect part.'
    },
    {
      question: 'What if you don\'t have the part in stock?',
      answer: 'We have access to a nationwide network of suppliers. If we don\'t have the part in our inventory, we can usually locate it within 24-48 hours.'
    },
    {
      question: 'Are shipping costs included in the quote?',
      answer: 'Yes, all quotes include shipping costs to your location. We provide transparent pricing with no hidden fees.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Request a quote - Frank's Auto Parts fast quote service</title>
        <meta name="description" content="Request a free quote for quality used auto parts. Fast 2-hour response time, transparent pricing, and expert support from Frank's Auto Parts." />
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
              2-hour response time
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Request a quote
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get a free, no-obligation quote for the exact part you need with transparent pricing
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {guarantees.map((guarantee, index) => (
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
                      <guarantee.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{guarantee.title}</h3>
                    <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="glass-effect-strong rounded-3xl p-8 md:p-12 luxury-shadow">
                <h2 className="text-3xl font-bold text-white mb-8">Quote request form</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Vehicle information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="make" className="block text-sm font-medium text-white mb-2">Make *</label>
                        <Select value={formData.make} onValueChange={(value) => handleSelectChange('make', value)} required>
                          <SelectTrigger className="bg-background/50 border-border text-white">
                            <SelectValue placeholder="Select make" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ford">Ford</SelectItem>
                            <SelectItem value="chevrolet">Chevrolet</SelectItem>
                            <SelectItem value="toyota">Toyota</SelectItem>
                            <SelectItem value="honda">Honda</SelectItem>
                            <SelectItem value="nissan">Nissan</SelectItem>
                            <SelectItem value="jeep">Jeep</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="model" className="block text-sm font-medium text-white mb-2">Model *</label>
                        <Input
                          id="model"
                          name="model"
                          type="text"
                          required
                          value={formData.model}
                          onChange={handleChange}
                          placeholder="e.g., F-150, Camry"
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                        />
                      </div>

                      <div>
                        <label htmlFor="year" className="block text-sm font-medium text-white mb-2">Year *</label>
                        <Select value={formData.year} onValueChange={(value) => handleSelectChange('year', value)} required>
                          <SelectTrigger className="bg-background/50 border-border text-white">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2021">2021</SelectItem>
                            <SelectItem value="2020">2020</SelectItem>
                            <SelectItem value="2019">2019</SelectItem>
                            <SelectItem value="2018">2018</SelectItem>
                            <SelectItem value="2017">2017</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="vin" className="block text-sm font-medium text-white mb-2">VIN number (optional)</label>
                        <Input
                          id="vin"
                          name="vin"
                          type="text"
                          value={formData.vin}
                          onChange={handleChange}
                          placeholder="17-digit VIN"
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Part information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="partCategory" className="block text-sm font-medium text-white mb-2">Part category *</label>
                        <Select value={formData.partCategory} onValueChange={(value) => handleSelectChange('partCategory', value)} required>
                          <SelectTrigger className="bg-background/50 border-border text-white">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="engine">Engine</SelectItem>
                            <SelectItem value="transmission">Transmission</SelectItem>
                            <SelectItem value="body">Body parts</SelectItem>
                            <SelectItem value="wheels">Wheels</SelectItem>
                            <SelectItem value="radiator">Radiator</SelectItem>
                            <SelectItem value="electrical">Electrical</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-white mb-2">Quantity *</label>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          min="1"
                          required
                          value={formData.quantity}
                          onChange={handleChange}
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="specificPart" className="block text-sm font-medium text-white mb-2">Specific part needed *</label>
                        <Input
                          id="specificPart"
                          name="specificPart"
                          type="text"
                          required
                          value={formData.specificPart}
                          onChange={handleChange}
                          placeholder="e.g., Front passenger door, 5.0L V8 engine"
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name *</label>
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
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone *</label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email *</label>
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

                      <div className="md:col-span-2">
                        <label htmlFor="additionalInfo" className="block text-sm font-medium text-white mb-2">Additional information (optional)</label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          placeholder="Any additional details that might help us provide an accurate quote..."
                          rows={4}
                          className="bg-background/50 border-border text-white placeholder:text-muted-foreground resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg glow-shadow-strong transition-all duration-200 active:scale-95"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Submit quote request
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-3xl p-8 luxury-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Need help now?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Call us directly for immediate assistance
                    </p>
                    <a href="tel:+1234567890" className="text-accent font-semibold hover:underline">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-3xl p-8 luxury-shadow">
                <h3 className="text-lg font-bold text-white mb-4">What happens next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">We review your request and search our inventory</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">You receive a detailed quote within 2 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Approve the quote and we ship within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-3xl p-8 luxury-shadow">
                <h3 className="text-lg font-bold text-white mb-4">Common questions</h3>
                <div className="space-y-4">
                  {faqs.slice(0, 2).map((faq, index) => (
                    <div key={index}>
                      <h4 className="text-sm font-semibold text-white mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default QuoteRequestPage;
