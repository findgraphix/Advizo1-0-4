
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Offerings from '@/components/Offerings';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  React.useEffect(() => {
    // Set smooth scrolling globally (for SPA and anchor navigation)
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add dark background to body for the hero section
    document.body.classList.add('bg-advizo-darkgray');
    
    return () => {
      document.body.classList.remove('bg-advizo-darkgray');
    };
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Offerings id="services" />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Careers />
      <Footer />
    </div>
  );
};

export default Index;
