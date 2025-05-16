
import React from 'react';
import { 
  ShoppingBag, 
  GraduationCap, 
  DollarSign, 
  Heart, 
  Building, 
  Code 
} from 'lucide-react';
import SmoothFadeIn from './SmoothFadeIn';

const industries = [
  {
    name: 'Consumer Products & Retail',
    icon: ShoppingBag
  },
  {
    name: 'Education',
    icon: GraduationCap
  },
  {
    name: 'Financial Services',
    icon: DollarSign
  },
  {
    name: 'Healthcare & Life Sciences',
    icon: Heart
  },
  {
    name: 'Infrastructure, Construction & Building Products',
    icon: Building
  },
  {
    name: 'Technology',
    icon: Code
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding bg-advizo-lightgray">
      <div className="container mx-auto px-4">
        <SmoothFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-text text-advizo-blue">Our Expertise</h2>
            <p className="subheading-text">
              We provide specialized consulting services across diverse industries
            </p>
          </div>
        </SmoothFadeIn>
        
        <SmoothFadeIn delay={150}>
          <div className="w-full overflow-hidden">
            <div className="flex whitespace-nowrap">
              {/* First copy of items for infinite scroll */}
              <div className="flex animate-slide-left">
                {industries.map((industry, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 inline-flex items-center px-6 py-4 mx-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <industry.icon className="h-6 w-6 mr-3 text-advizo-green" />
                    <span className="text-lg font-medium text-advizo-blue whitespace-nowrap">{industry.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Duplicate items for seamless looping */}
              <div className="flex animate-slide-left">
                {industries.map((industry, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 inline-flex items-center px-6 py-4 mx-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <industry.icon className="h-6 w-6 mr-3 text-advizo-green" />
                    <span className="text-lg font-medium text-advizo-blue whitespace-nowrap">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SmoothFadeIn>
      </div>
    </section>
  );
};

export default Expertise;
