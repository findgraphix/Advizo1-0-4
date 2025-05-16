import React from "react";
import SmoothFadeIn from "./SmoothFadeIn";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <SmoothFadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-text text-advizo-blue">About Advizo</h2>
          <p className="subheading-text">
            Empowering MSMEs with strategic guidance for sustainable growth and success
          </p>
        </div>
        </SmoothFadeIn>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <SmoothFadeIn delay={120}><div>
            <h3 className="text-2xl font-bold text-advizo-purple mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Advizo, we are committed to empowering Micro, Small, and Medium Enterprises (MSMEs) in India 
              by providing tailored strategic consulting services that address their unique challenges and 
              unlock their full potential. We believe that MSMEs are the backbone of India's economy, and 
              their growth is crucial for the country's economic development.
            </p>
            <p className="text-gray-700">
              Our mission is to bridge the gap between MSMEs and enterprise-grade strategic consulting, 
              making it accessible, affordable, and impactful. We work closely with MSME owners and leaders 
              to understand their specific needs and develop practical solutions that drive tangible results.
            </p>
          </div></SmoothFadeIn>
          
          <SmoothFadeIn delay={220}><div>
            <h3 className="text-2xl font-bold text-advizo-purple mb-4">Why Choose Us</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-advizo-blue text-white flex items-center justify-center mr-3 mt-1 shrink-0">✓</span>
                <span>Specialized expertise in MSME challenges and opportunities in the Indian market</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-advizo-blue text-white flex items-center justify-center mr-3 mt-1 shrink-0">✓</span>
                <span>Data-driven approach backed by thorough research and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-advizo-blue text-white flex items-center justify-center mr-3 mt-1 shrink-0">✓</span>
                <span>Tailored strategies that consider your unique business context</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-advizo-blue text-white flex items-center justify-center mr-3 mt-1 shrink-0">✓</span>
                <span>Practical implementation support to ensure successful execution</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-advizo-blue text-white flex items-center justify-center mr-3 mt-1 shrink-0">✓</span>
                <span>Proven track record of delivering tangible results for MSMEs</span>
              </li>
            </ul>
          </div></SmoothFadeIn>
        </div>
      </div>
    </section>
  );
};
export default About;
