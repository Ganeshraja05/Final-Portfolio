import React, { useRef } from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import pic1 from '../pic1.jpg';
const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });

  const stats = [
    { number: '20+', label: 'Projects Completed', icon: Code },
    { number: '10+', label: 'Technologies', icon: Lightbulb },
    { number: '5+', label: 'Happy Clients', icon: Users },
    { number: '100+', label: 'Cups of Coffee', icon: Coffee }


  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={aboutRef}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">
                Passionate about creating digital experiences that matter
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a full-stack developer focused on building scalable web and mobile applications. What started as curiosity has grown into a passion for solving complex problems with clean, efficient solutions. I also work with AI tools to boost application intelligence, have experience in product management, and use advanced prompting to unlock the full potential of AI systems.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in the power of clean code, thoughtful design, and continuous learning.
                When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                or mentoring aspiring developers.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {['Problem Solving', 'Team Leadership', 'Continuous Learning', 'Innovation'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={pic1}
                  alt="Professional headshot"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 opacity-20" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map(({ number, label, icon: Icon }, index) => (
              <div
                key={label}
                className={`text-center transform transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;