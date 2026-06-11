
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Package, Cog, Gauge, Car, Radio, Wrench, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const InventoryPage = () => {
  const [selectedMake, setSelectedMake] = useState('all');
  const [selectedModel, setSelectedModel] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vinQuery, setVinQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    make: 'all',
    model: 'all',
    year: 'all',
    category: 'all',
    vin: ''
  });

  const categories = [
    { name: 'Engines', icon: Cog, count: '500+', color: 'from-orange-500/20 to-red-500/20' },
    { name: 'Transmissions', icon: Gauge, count: '400+', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'Body parts', icon: Car, count: '2,000+', color: 'from-purple-500/20 to-pink-500/20' },
    { name: 'Wheels', icon: Radio, count: '1,500+', color: 'from-green-500/20 to-emerald-500/20' },
    { name: 'Radiators', icon: Wrench, count: '600+', color: 'from-yellow-500/20 to-orange-500/20' },
    { name: 'Electrical', icon: Zap, count: '3,000+', color: 'from-indigo-500/20 to-blue-500/20' }
  ];

  const featuredParts = [
    {
      title: '2018 Ford F-150 5.0L V8 engine',
      category: 'Engines',
      make: 'ford',
      model: 'f150',
      year: '2018',
      mileage: '87,400 miles',
      condition: 'Tested & verified',
      price: '$2,850',
      image: 'https://images.unsplash.com/photo-1605781204315-63e8680b2d38'
    },
    {
      title: '2020 Honda Accord CVT transmission',
      category: 'Transmissions',
      make: 'honda',
      model: 'accord',
      year: '2020',
      mileage: '42,100 miles',
      condition: 'Road tested',
      price: '$1,650',
      image: 'https://images.unsplash.com/photo-1646119753710-3349158afd4f'
    },
    {
      title: '2019 Toyota Camry front bumper assembly',
      category: 'Body parts',
      make: 'toyota',
      model: 'camry',
      year: '2019',
      mileage: 'N/A',
      condition: 'Excellent condition',
      price: '$385',
      image: 'https://images.unsplash.com/photo-1600188881015-c01168ab7a4a'
    },
    {
      title: '2021 Chevrolet Silverado 20" OEM wheels (set of 4)',
      category: 'Wheels',
      make: 'chevrolet',
      model: 'silverado',
      year: '2021',
      mileage: 'N/A',
      condition: 'Like new',
      price: '$1,200',
      image: 'https://images.unsplash.com/photo-1677917362048-a9e5267d7882'
    },
    {
      title: '2017 Nissan Altima radiator assembly',
      category: 'Radiators',
      make: 'nissan',
      model: 'altima',
      year: '2017',
      mileage: 'N/A',
      condition: 'Pressure tested',
      price: '$195',
      image: 'https://images.unsplash.com/photo-1600188881015-c01168ab7a4a'
    },
    {
      title: '2019 Jeep Wrangler alternator',
      category: 'Electrical',
      make: 'jeep',
      model: 'wrangler',
      year: '2019',
      mileage: '52,300 miles',
      condition: 'Bench tested',
      price: '$165',
      image: 'https://images.unsplash.com/photo-1600188881015-c01168ab7a4a'
    }
  ];

  const handleSearch = () => {
    setActiveFilters({
      make: selectedMake,
      model: selectedModel,
      year: selectedYear,
      category: selectedCategory,
      vin: vinQuery
    });
    
    // Smooth scroll down to results
    const element = document.getElementById('parts-display');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (categoryName) => {
    const formatted = categoryName.toLowerCase();
    setSelectedCategory(formatted);
    setActiveFilters(prev => ({
      ...prev,
      category: formatted
    }));
    
    const element = document.getElementById('parts-display');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setSelectedMake('all');
    setSelectedModel('all');
    setSelectedYear('all');
    setSelectedCategory('all');
    setVinQuery('');
    setActiveFilters({
      make: 'all',
      model: 'all',
      year: 'all',
      category: 'all',
      vin: ''
    });
  };

  const filteredParts = featuredParts.filter(part => {
    if (activeFilters.make !== 'all' && part.make !== activeFilters.make) return false;
    if (activeFilters.model !== 'all' && part.model !== activeFilters.model) return false;
    if (activeFilters.year !== 'all' && part.year !== activeFilters.year) return false;
    if (activeFilters.category !== 'all' && part.category.toLowerCase() !== activeFilters.category) return false;
    if (activeFilters.vin.trim() !== '') {
      const matchText = (part.title + ' ' + part.category).toLowerCase();
      if (!matchText.includes(activeFilters.vin.toLowerCase())) return false;
    }
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Inventory - Browse quality used auto parts at Brothers Auto Parts</title>
        <meta name="description" content="Search our extensive inventory of 15,000+ quality-tested used auto parts. Engines, transmissions, body parts, wheels, and more with fast shipping." />
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
              15,000+ parts available
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Find your part
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Search our extensive inventory of quality-tested used auto parts
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect-strong rounded-3xl p-8 md:p-12 luxury-shadow"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Advanced search</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Make</label>
                <Select value={selectedMake} onValueChange={setSelectedMake}>
                  <SelectTrigger className="bg-background/50 border-border text-white">
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Makes</SelectItem>
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
                <label className="block text-sm font-medium text-white mb-2">Model</label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="bg-background/50 border-border text-white">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Models</SelectItem>
                    <SelectItem value="f150">F-150</SelectItem>
                    <SelectItem value="silverado">Silverado</SelectItem>
                    <SelectItem value="camry">Camry</SelectItem>
                    <SelectItem value="accord">Accord</SelectItem>
                    <SelectItem value="altima">Altima</SelectItem>
                    <SelectItem value="wrangler">Wrangler</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Year</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="bg-background/50 border-border text-white">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
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
                <label className="block text-sm font-medium text-white mb-2">Part category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-background/50 border-border text-white">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="engines">Engines</SelectItem>
                    <SelectItem value="transmissions">Transmissions</SelectItem>
                    <SelectItem value="body parts">Body parts</SelectItem>
                    <SelectItem value="wheels">Wheels</SelectItem>
                    <SelectItem value="radiators">Radiators</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">Keyword / Part Search (optional)</label>
                <Input 
                  value={vinQuery}
                  onChange={(e) => setVinQuery(e.target.value)}
                  placeholder="Enter keyword or parts details"
                  className="bg-background/50 border-border text-white placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleSearch} className="flex-1 bg-accent hover:bg-accent/90 text-white py-6 text-lg glow-shadow transition-all duration-200 active:scale-95">
                <Search className="mr-2 w-5 h-5" />
                Search inventory
              </Button>
              {(selectedMake !== 'all' || selectedModel !== 'all' || selectedYear !== 'all' || selectedCategory !== 'all' || vinQuery !== '') && (
                <Button variant="outline" onClick={handleReset} className="border-border hover:bg-muted text-white px-6 py-6 text-lg transition-all duration-200">
                  Reset
                </Button>
              )}
            </div>
          </motion.div>
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
              Browse by category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our organized inventory
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
                <Card 
                  onClick={() => handleCategoryClick(category.name)}
                  className={`glass-effect border-border hover-3d luxury-shadow group cursor-pointer h-full`}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <div className="text-accent font-semibold mb-4">{category.count} parts</div>
                    <div className="flex items-center text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">
                      View category
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="parts-display" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              {activeFilters.make !== 'all' || activeFilters.model !== 'all' || activeFilters.category !== 'all' || activeFilters.year !== 'all' || activeFilters.vin !== '' 
                ? 'Search Results' 
                : 'Featured parts'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {activeFilters.make !== 'all' || activeFilters.model !== 'all' || activeFilters.category !== 'all' || activeFilters.year !== 'all' || activeFilters.vin !== ''
                ? `Showing ${filteredParts.length} parts matching your search criteria`
                : 'Recently added quality-tested components'}
            </p>
          </motion.div>

          {filteredParts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center p-12 glass-effect rounded-3xl max-w-2xl mx-auto"
            >
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No parts found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any parts matching your search criteria. However, we have a nationwide sourcing network and can locate it for you!
              </p>
              <Link to="/quote-request">
                <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-4">
                  Request a custom quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredParts.map((part, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-effect border-border hover-lift luxury-shadow overflow-hidden group h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={part.image} 
                        alt={part.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-xs font-medium text-accent w-fit">
                        {part.category}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 leading-snug">{part.title}</h3>
                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center justify-between">
                          <span>Mileage:</span>
                          <span className="text-white font-medium">{part.mileage}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Condition:</span>
                          <span className="text-white font-medium">{part.condition}</span>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                        <div className="text-2xl font-bold text-accent font-variant-tabular">{part.price}</div>
                        <Link to={`/quote-request?part=${encodeURIComponent(part.title)}&category=${encodeURIComponent(part.category)}&make=${part.make}&model=${part.model}&year=${part.year}`}>
                          <Button size="sm" className="bg-accent hover:bg-accent/90 text-white transition-all duration-200 active:scale-95">
                            Inquire
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
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
              Can't find what you need?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our team can help locate hard-to-find parts from our network
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

export default InventoryPage;
