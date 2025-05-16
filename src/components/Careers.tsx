
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Upload } from 'lucide-react';
import SmoothFadeIn from './SmoothFadeIn';

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevState => ({
        ...prevState,
        resume: e.target.files ? e.target.files[0] : null
      }));
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if resume is uploaded
    if (!formData.resume) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume before submitting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // In a real scenario, you would use FormData to submit the file along with other data
    const emailData = new FormData();
    emailData.append('name', formData.name);
    emailData.append('email', formData.email);
    emailData.append('phone', formData.phone);
    emailData.append('position', formData.position);
    emailData.append('message', formData.message);
    if (formData.resume) {
      emailData.append('resume', formData.resume);
    }
    emailData.append('to', 'manishmohitkar18@gmail.com');
    
    // Simulate form submission with a delay
    setTimeout(() => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        resume: null,
      });
      setFileName('');
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="careers" className="py-12 bg-advizo-lightgray">
      <div className="container mx-auto px-4">
        <SmoothFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-advizo-green">Join Our Team</h2>
            <p className="text-lg text-gray-700">
              Explore career opportunities and be part of our mission to empower MSMEs
            </p>
          </div>
        </SmoothFadeIn>

        <SmoothFadeIn delay={150}>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left side - Why work with us */}
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold text-advizo-green mb-4">Why Work With Us</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="border-l-4 border-advizo-gold pl-4 py-1">
                    <h4 className="font-semibold text-base mb-1 text-advizo-blue">Meaningful Impact</h4>
                    <p className="text-sm">Help transform the MSME sector in India with innovative solutions.</p>
                  </div>
                  
                  <div className="border-l-4 border-advizo-gold pl-4 py-1">
                    <h4 className="font-semibold text-base mb-1 text-advizo-blue">Growth Opportunities</h4>
                    <p className="text-sm">Continuous learning and career advancement paths.</p>
                  </div>
                  
                  <div className="border-l-4 border-advizo-gold pl-4 py-1">
                    <h4 className="font-semibold text-base mb-1 text-advizo-blue">Collaborative Environment</h4>
                    <p className="text-sm">Work with diverse, talented professionals.</p>
                  </div>
                </div>

                {/* <Button
                  type="button"
                  className="w-full mt-6 bg-advizo-green hover:bg-advizo-green/80 text-white"
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Apply Now
                </Button> */}
              </div>
              
              {/* Right side - Application form */}
              <div className="md:col-span-2" id="application-form">
                <h3 className="text-xl font-bold text-advizo-green mb-4">Quick Application</h3>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Full Name*"
                      required 
                    />
                  </div>

                  <div>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="Email Address*"
                      required 
                    />
                  </div>

                  <div>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="Phone Number*"
                      required 
                    />
                  </div>

                  <div>
                    <Input 
                      type="text" 
                      id="position" 
                      name="position" 
                      value={formData.position} 
                      onChange={handleChange}
                      placeholder="Position Interested In*"
                      required 
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={2} 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="resize-none"
                      placeholder="Cover Message (optional)"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-center">
                      <label className="w-full flex cursor-pointer">
                        <Input 
                          type="file" 
                          id="resume" 
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          className="sr-only"
                          onChange={handleFileChange}
                          required
                        />
                        <span className="bg-white py-2 px-4 border border-gray-300 rounded-l-md text-sm text-gray-700 overflow-hidden whitespace-nowrap overflow-ellipsis flex-1">
                          {fileName || "No file selected"}
                        </span>
                        <span className="bg-advizo-gold py-2 px-4 border border-l-0 border-advizo-gold rounded-r-md text-sm flex items-center text-white">
                          <Upload className="h-4 w-4 mr-2" /> Upload Resume*
                        </span>
                      </label>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX up to 5MB</p>
                  </div>

                  <div className="md:col-span-2 text-right">
                    <Button 
                      type="submit" 
                      className="bg-advizo-blue hover:bg-advizo-blue/80 text-white" 
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </SmoothFadeIn>
      </div>
    </section>
  );
};

export default Careers;
