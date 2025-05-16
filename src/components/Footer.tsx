
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-advizo-darkgray text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-7xl mx-auto mb-6">
          <div className="w-full md:w-1/3 text-left">
            <h3 className="text-2xl font-bold mb-3">Advizo</h3>
            <p className="text-gray-300 text-sm mb-4 pr-4">
              Strategic consulting services tailored for MSMEs in India. We help you overcome challenges, optimize operations, and achieve sustainable growth.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-advizo-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-advizo-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-advizo-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col md:flex-row justify-around">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Strategy Consulting</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Innovation & Technology</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Operational Excellence</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Market Expansion</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 text-right">
            <h3 className="text-xl font-semibold mb-4">Ready to grow your business?</h3>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-advizo-gold hover:bg-advizo-gold/80 text-advizo-darkgray font-medium px-6 py-3 rounded-md transition-colors shadow-md"
            >
              Free Consultation <ChevronRight className="ml-1" size={16} />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Advizo Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
