
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight, Award, Target, Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import FadeInOnScroll from './FadeInOnScroll';

// Hero content that will be cycled through
const heroContent = [
  {
    title: "Operational Excellence",
    description: "We help MSMEs streamline processes, reduce waste, and boost efficiency for long-term growth and customer satisfaction.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Revenue Growth",
    description: "We craft strategies using research, sales optimization, and marketing to drive consistent revenue and profit growth.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Market Expansion",
    description: "We support MSMEs in entering new markets and segments while managing regulatory and cultural complexities.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Innovation & Technology",
    description: "We enable MSMEs to adopt digital innovations that enhance efficiency, customer experience, and competitiveness.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Business Transformation",
    description: "We guide MSMEs in restructuring operations and adapting strategies to ensure sustainable success in changing markets.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80"
  }
];

// Key features
const keyFeatures = [
  { icon: <Award size={18} />, text: "Industry Leading Expertise" },
  { icon: <Target size={18} />, text: "Strategic Solutions" },
  { icon: <ChevronRight size={18} />, text: "Proven Results" }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentContent = heroContent[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-advizo-darkgray text-white overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-advizo-darkgray via-advizo-darkgray/90 to-advizo-darkgray/20 z-10"></div>
      
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-20 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 w-full">
          {/* Left Column - Content (40%) */}
          <div className="md:col-span-5 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="bg-advizo-gold h-1 w-12 mr-3"></span>
              <span className="text-advizo-gold text-sm font-medium tracking-wide uppercase">
                Advisory Excellence
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              {currentContent.title}
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              {currentContent.description}
            </p>
            
            {/* Features list */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {keyFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <div className="flex-shrink-0 p-1.5 bg-advizo-gold/20 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-6 mb-6">
              <Button
                className="bg-advizo-gold hover:bg-advizo-gold/80 text-advizo-darkgray rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => handleButtonScroll('contact')}
              >
                Free Consultation <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button
                variant="outline"
                className="border-gray-400 text-black hover:bg-white/10 rounded-full px-5 py-2 group"
                onClick={() => handleButtonScroll('services')}
              >
                Explore Services <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </div>

            {/* Video button */}
            <div className="mt-8">
              {/* <button className="flex items-center space-x-3 group text-gray-300 hover:text-white transition-colors">
                <div className="bg-advizo-gold/25 w-10 h-10 rounded-full flex items-center justify-center hover:bg-advizo-gold/40 transition-colors group-hover:scale-110 transition-transform">
                  <Play size={18} className="text-advizo-gold ml-1" />
                </div>
                <span className="text-sm font-medium group-hover:underline">Watch Our Approach</span>
              </button> */}
            </div>
          </div>
          
          {/* Right Column - Image with 16:9 aspect ratio (60%) */}
          <div className="relative hidden md:block md:col-span-7 w-full">
            <div className="rounded-[10px] overflow-hidden border-2 border-advizo-gold/10 shadow-xl shadow-black/50">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                />
              </AspectRatio>
              
              {/* Overlay gradient on the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-advizo-darkgray/40 to-transparent"></div>
              
              {/* Small decorative element */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-2 border-b-2 border-advizo-gold/30 rounded-br-xl"></div>
              <div className="absolute -top-2 -left-2 w-24 h-24 border-l-2 border-t-2 border-advizo-gold/30 rounded-tl-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile background image */}
      <div className="absolute inset-0 -z-10 md:hidden">
        <AspectRatio ratio={16 / 9} className="h-full">
          <img
            src={currentContent.image}
            alt="Background"
            className="w-full h-full object-cover rounded-[10px]"
          />
        </AspectRatio>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-advizo-gold" : "w-2 bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
