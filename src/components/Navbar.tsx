import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#offerings' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Contact', href: '#contact' },
  { name: 'Careers', href: '#careers' },
];

const getOffsetTop = (el: HTMLElement | null) => {
  if (!el) return Number.MAX_SAFE_INTEGER;
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let closestSection: string | null = null;
      let minDistance = window.innerHeight;

      NavLinks.forEach((link) => {
        const section = document.getElementById(link.href.replace("#", ""));
        if (section) {
          const offset = getOffsetTop(section);
          const distance = Math.abs(offset - window.scrollY - 100);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = link.href.replace("#", "");
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 150);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleConsultClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-advizo-darkgray shadow-lg py-2' 
          : 'bg-advizo-darkgray/90 backdrop-blur-md shadow-lg py-4'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <a href="#home" className="flex items-center">
            <img 
              src="/Advizo-logo.svg" 
              alt="Advizo Logo" 
              className="h-10 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
            />
          </a>
        </div>

        {/* Centered Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 overflow-hidden">
          <div className="flex items-center space-x-6">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors font-medium ${
                  activeSection === link.href.replace("#", "")
                    ? 'text-advizo-gold font-bold' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Free Consultation Button */}
        <div className="hidden md:flex items-center">
          <Button 
            className="bg-advizo-gold hover:bg-advizo-green/80 text-black rounded-full"
            onClick={handleConsultClick}
          >
            Free Consultation
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-advizo-gold"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-advizo-darkgray border-t border-gray-800 animate-fade-in">
          <div className="flex flex-col space-y-4 py-6 px-4">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors font-medium ${
                  activeSection === link.href.replace("#", "")
                    ? 'text-advizo-gold font-bold' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-advizo-green hover:bg-advizo-green/80 text-white w-full mt-4"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
