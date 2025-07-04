import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-07-04 at 12.29.07.jpeg" 
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl">
              Full-Stack Developer & UI/UX Designer passionate about creating beautiful, 
              functional digital experiences that make a difference.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                View My Work
              </button>
              <button className="border-2 border-slate-800 text-slate-800 px-8 py-3 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-colors">
                Download CV
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a 
                href="#" 
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-blue-600"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-slate-600" />
      </button>
    </section>
  );
};

export default Hero;