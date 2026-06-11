
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      category: 'General questions',
      questions: [
        {
          question: 'How long have you been in business?',
          answer: "Frank's Auto Parts was founded in 1995 and has been serving customers for over 30 years. We started as a small family operation in Dallas and have grown into one of the most trusted used auto parts suppliers in the nation."
        },
        {
          question: 'What types of vehicles do you have parts for?',
          answer: 'We carry parts for domestic and import vehicles including Ford, Chevrolet, Toyota, Honda, Nissan, Jeep, Dodge, GMC, and many more. Our inventory includes parts for cars, trucks, SUVs, and vans from the 1990s to current models.'
        },
        {
          question: 'How do I know if a part will fit my vehicle?',
          answer: 'We use your vehicle\'s make, model, year, and VIN number to ensure proper fitment. Our team has decades of experience matching parts to vehicles. If you provide your VIN, we can guarantee the part will fit your specific vehicle.'
        },
        {
          question: 'Can I visit your facility in person?',
          answer: 'Yes, we welcome customers to visit our Dallas location. However, we recommend calling ahead to ensure the part you need is in stock and ready for pickup. Our address and hours are listed on our contact page.'
        }
      ]
    },
    {
      category: 'Shipping & delivery',
      questions: [
        {
          question: 'How fast do you ship?',
          answer: 'Most orders ship within 24 hours of payment confirmation. We use reliable carriers to ensure your parts arrive safely. Typical delivery time is 2-3 business days to most locations in the continental United States.'
        },
        {
          question: 'Do you ship nationwide?',
          answer: 'Yes, we ship to all 50 states. Shipping costs are calculated based on the size and weight of the part and your location. All shipping costs are included in your quote with no hidden fees.'
        },
        {
          question: 'How are parts packaged for shipping?',
          answer: 'We take great care in packaging all parts to prevent damage during transit. Parts are wrapped, cushioned, and secured in appropriate boxes or crates. Fragile items receive extra protection. All shipments are fully insured.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes, you will receive tracking information via email as soon as your order ships. You can track your package in real-time using the provided tracking number.'
        }
      ]
    },
    {
      category: 'Parts quality & warranty',
      questions: [
        {
          question: 'Are your parts tested before sale?',
          answer: 'Yes, every part undergoes inspection and testing before it\'s listed for sale. Engines are compression tested, transmissions are road tested, electrical components are bench tested, and body parts are inspected for damage and structural integrity.'
        },
        {
          question: 'Do you offer warranties on parts?',
          answer: 'Yes, we offer warranties on most parts. Engines and transmissions come with a 90-day warranty. Electrical components have a 30-day warranty. Body parts and other components may have different warranty terms. Specific warranty details are provided with each quote.'
        },
        {
          question: 'What if the part doesn\'t work?',
          answer: 'If a part fails within the warranty period, contact us immediately. We will work with you to resolve the issue, which may include a replacement part or refund depending on the circumstances. Our goal is your complete satisfaction.'
        },
        {
          question: 'How do you determine part condition?',
          answer: 'Parts are graded based on visual inspection, testing results, and mileage when applicable. We provide honest assessments and detailed condition reports. If a part has any cosmetic or functional issues, we disclose them upfront.'
        }
      ]
    },
    {
      category: 'Pricing & payment',
      questions: [
        {
          question: 'How are your prices determined?',
          answer: 'Pricing is based on the part type, condition, availability, and market demand. We strive to offer competitive prices while maintaining quality standards. All quotes include the part cost and shipping with no hidden fees.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept major credit cards (Visa, MasterCard, American Express, Discover), debit cards, wire transfers, and business checks. Payment is required before shipping. For large orders, we may offer payment terms to established commercial customers.'
        },
        {
          question: 'Do you offer discounts for bulk orders?',
          answer: 'Yes, we offer volume discounts for mechanics, body shops, and fleet operators who order multiple parts. Contact us with your requirements and we\'ll provide a custom quote with volume pricing.'
        },
        {
          question: 'Are there any additional fees?',
          answer: 'No, our quotes are all-inclusive. The price you see includes the part and shipping to your location. There are no handling fees, processing fees, or surprise charges.'
        }
      ]
    },
    {
      category: 'Vehicle compatibility',
      questions: [
        {
          question: 'Will parts from one year fit another year?',
          answer: 'Sometimes yes, sometimes no. Many parts are interchangeable across multiple model years, but this varies by manufacturer and part type. Provide us with your vehicle details and we\'ll confirm compatibility before quoting.'
        },
        {
          question: 'Can I use parts from a different trim level?',
          answer: 'In many cases, yes. However, some parts are trim-specific, especially interior components and certain body panels. We verify compatibility based on your specific vehicle configuration.'
        },
        {
          question: 'Do you have parts for rare or discontinued models?',
          answer: 'We have access to a nationwide network of suppliers and can often locate hard-to-find parts for older or rare vehicles. Submit a quote request with your vehicle details and we\'ll search our network.'
        }
      ]
    },
    {
      category: 'Returns & exchanges',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We accept returns within 30 days of delivery for parts that are unused and in original packaging. A restocking fee may apply. Parts that were installed or show signs of use cannot be returned. Contact us before returning any part.'
        },
        {
          question: 'Can I exchange a part for a different one?',
          answer: 'Yes, exchanges are possible within 30 days if the part is unused and in original packaging. You\'ll be responsible for return shipping costs and any price difference between the parts.'
        },
        {
          question: 'What if I ordered the wrong part?',
          answer: 'If you ordered the wrong part due to incorrect information provided, you may return it within 30 days (unused, original packaging) subject to a restocking fee. We recommend double-checking all vehicle details before ordering.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      searchQuery === '' ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently asked questions about Frank's Auto Parts</title>
        <meta name="description" content="Find answers to common questions about Frank's Auto Parts services, shipping, warranties, pricing, and more. Get the information you need." />
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
              Help center
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Frequently asked questions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our parts, services, and policies
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-background/50 border-border text-foreground placeholder:text-muted-foreground text-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length > 0 ? (
            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${categoryIndex}-${index}`}
                        className="glass-effect rounded-2xl border-border overflow-hidden"
                      >
                        <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-muted/50 transition-colors duration-200">
                          <span className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 pt-2">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-6">No questions found matching your search.</p>
              <Button
                onClick={() => setSearchQuery('')}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                Clear search
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Still have questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our team is here to help with any questions not covered in our FAQ
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg glow-shadow-strong transition-all duration-200 active:scale-95">
                  Contact us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/quote-request">
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-lg transition-all duration-200 active:scale-95">
                  Request a quote
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

export default FAQPage;
