import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail } from 'lucide-react';
import SmoothFadeIn from './SmoothFadeIn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, company, message } = formData;

    const whatsappMessage = `
*New Consultation Request:*
------------------------------
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Company:* ${company}
*Message:* ${message || 'N/A'}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/919110096281?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SmoothFadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-text text-advizo-blue">Get in Touch</h2>
            <p className="subheading-text">
              Schedule your free consultation and take the first step towards business growth
            </p>
          </div>
        </SmoothFadeIn>

        <SmoothFadeIn delay={150}>
          <div className="max-w-5xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-advizo-blue mb-6">Request a Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Full Name*"
                    />
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Email Address*"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Phone Number*"
                    />
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Company Name*"
                    />
                  </div>

                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="resize-none w-full"
                    placeholder="Tell us about your business needs"
                  />

                  <Button
                    type="submit"
                    className="px-8 py-2 bg-advizo-gold hover:bg-advizo-gold/80 text-black"
                  >
                    Request Free Consultation
                  </Button>
                </form>
              </div>

              <div className="md:col-span-2 bg-advizo-lightgray p-6 rounded-lg">
                <h3 className="text-xl font-bold text-advizo-blue mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-advizo-blue mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-advizo-blue mb-1">Our Location</h4>
                      <p className="text-gray-700">
                        First Floor, Building No. 3,<br />
                        Malviya Nagar, New Delhi 110017<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-advizo-blue mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-advizo-blue mb-1">Email Us</h4>
                      <p className="text-gray-700">
                        <a href="mailto:business@consultadvizo.com" className="text-advizo-blue hover:underline">
                        business@consultadvizo.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <h4 className="font-semibold text-advizo-blue mb-3">Business Hours</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                      <span>Monday - Saturday:</span>
                      <span>10:00 AM - 9:00 PM</span>
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SmoothFadeIn>
      </div>
    </section>
  );
};

export default Contact;
