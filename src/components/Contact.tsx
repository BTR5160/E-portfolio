import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Contact
          </h2>
          <div className="w-24 h-1 bg-[#294149] mx-auto mb-6"></div>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to make the next strategic move together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`p-8 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
          } shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#294149] focus:border-transparent transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#294149] focus:border-transparent transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#294149] focus:border-transparent transition-colors resize-none ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#294149] hover:bg-[#1e2f36] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`p-8 rounded-xl ${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            } shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 bg-[#294149] rounded-full">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email
                    </h4>
                    <p className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      bilel.triki@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 bg-[#294149] rounded-full">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Location
                    </h4>
                    <p className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Tunisia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`p-8 rounded-xl ${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            } shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h3>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className={`flex-1 p-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>

              <button className="w-full mt-4 border-2 border-[#294149] text-[#294149] hover:bg-[#294149] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;