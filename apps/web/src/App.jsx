
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import InventoryPage from './pages/InventoryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import QuoteRequestPage from './pages/QuoteRequestPage.jsx';
import FAQPage from './pages/FAQPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/quote-request" element={<QuoteRequestPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-white mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Page not found</p>
              <a href="/" className="text-accent hover:underline">Back to home</a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
