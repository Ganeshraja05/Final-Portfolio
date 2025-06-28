import React, { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import { experience } from '../data/portfolio';

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(experienceRef, { threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={experienceRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My journey through various roles, building expertise and delivering impactful solutions
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-0.5" />

            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-2 z-10" />

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  } ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${
                    index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'
                  }`}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {job.company.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {job.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{job.duration}</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {job.description.map((point, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;