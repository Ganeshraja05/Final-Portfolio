import React, { useRef } from 'react';
import { GraduationCap, Calendar, Award, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(educationRef, { threshold: 0.1 });

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={educationRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 dark:text-white mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Academic foundation that shaped my technical expertise and problem-solving approach
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Institution Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                        <GraduationCap size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {edu.field}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.duration}</span>
                      {edu.cgpa && (
                        <>
                          <span className="mx-3">•</span>
                          <Star size={16} className="mr-2 text-yellow-500" />
                          <span>CGPA: {edu.cgpa}</span>
                        </>
                      )}
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Academic Achievements
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg"
                          >
                            <Award size={16} className="text-yellow-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {edu.duration.split(' - ')[1] || edu.duration.split(' - ')[0]}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Graduated
                          </div>
                        </div>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse" />
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

export default Education;