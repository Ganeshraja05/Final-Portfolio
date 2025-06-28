import React, { useRef } from 'react';
import { Trophy, Star, ExternalLink, Calendar, Award, Users, BookOpen, Mic } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import { achievements } from '../data/portfolio';

const Achievements: React.FC = () => {
  const achievementsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(achievementsRef, { threshold: 0.1 });

  const getIcon = (type: string) => {
    switch (type) {
      case 'award': return Trophy;
      case 'publication': return BookOpen;
      case 'speaking': return Mic;
      case 'contribution': return Users;
      default: return Star;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award': return 'from-yellow-500 to-orange-500';
      case 'publication': return 'from-blue-500 to-indigo-500';
      case 'speaking': return 'from-purple-500 to-pink-500';
      case 'contribution': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'award': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'publication': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'speaking': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'contribution': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={achievementsRef}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 dark:text-white mb-6">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Recognition for contributions to technology, innovation, and the developer community
            </p>
          </div>

          {/* Featured Achievement */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Trophy size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Featured Achievement
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {achievements[0]?.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {achievements[0]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {achievements.slice(1).map((achievement, index) => {
              const IconComponent = getIcon(achievement.type);
              return (
                <div
                  key={achievement.id}
                  className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(achievement.type)} rounded-full flex items-center justify-center mr-4`}>
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getTypeBadge(achievement.type)}`}>
                        {achievement.type}
                      </span>
                    </div>
                    {achievement.url && (
                      <a
                        href={achievement.url}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{achievement.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;