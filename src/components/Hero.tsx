import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram, Phone } from 'lucide-react';
import { useScrollAnimation, useIntersectionObserver } from '../hooks/useScrollAnimation';
import pic1 from '../pic1.jpg';
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollY = useScrollAnimation();
  const isVisible = useIntersectionObserver(heroRef, { threshold: 0.1 });
  
  // Dynamic role animation
  const roles = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Tech Innovator',
    'Problem Solver',
    'Code Architect',
    'Digital Creator'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const parallaxOffset = scrollY * 0.5;

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div
          className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }}
        />
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          {/* Profile Image with Enhanced Animation */}
          <div className="mb-8">
            <div 
              className={`relative w-40 h-40 mx-auto transition-all duration-1500 ease-out ${
                isVisible 
                  ? 'opacity-100 transform scale-100 rotate-0' 
                  : 'opacity-0 transform scale-75 rotate-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-spin" 
                   style={{ animationDuration: '8s' }} />
              
              {/* Inner Ring */}
              <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800" />
              
              {/* Profile Photo */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img
                  src={pic1}
                  alt="Ganeshraja R"
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce" 
                   style={{ animationDelay: '1s', animationDuration: '2s' }} />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-bounce" 
                   style={{ animationDelay: '1.5s', animationDuration: '2.5s' }} />
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <h1 className="text-5xl md:text-7xl font-thin text-gray-900 dark:text-white mb-6">
              <span className="block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                Ganeshraja R
              </span>
            </h1>

            {/* Dynamic Role Animation */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
                <span
                  className={`inline-block transition-all duration-500 ${
                    isTyping ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
                  }`}
                >
                  {roles[currentRoleIndex]}
                </span>
                <span className="animate-pulse ml-1">|</span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-500 mt-2 max-w-3xl mx-auto">
                Crafting beautiful, functional, and user-centered digital experiences
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-600" />
                <span>ganeshrajar2005@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-green-600" />
                <span>+91 9940082233</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all duration-300">
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Github, href: 'https://github.com/Ganeshraja05', label: 'GitHub', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
                { icon: Linkedin, href: 'www.linkedin.com/in/ganeshraja2005', label: 'LinkedIn', color: 'hover:text-blue-600' },
                { icon: Instagram, href: 'https://www.instagram.com/__ace__of_spade/', label: 'Instagram', color: 'hover:text-pink-600' },
                { icon: Mail, href: 'mailto:ganeshrajar2005@gmail.com', label: 'Email', color: 'hover:text-red-600' }
              ].map(({ icon: Icon, href, label, color }, index) => (
                <a
                  key={label}
                  href={href}
                  className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 ${color} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${1200 + index * 100}ms` }}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1500ms' }}
        >
          <ChevronDown size={32} className="text-gray-400 hover:text-blue-600 transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;