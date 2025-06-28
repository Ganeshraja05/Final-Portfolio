import React, { useRef } from 'react';
import { BookOpen, ExternalLink, Calendar, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

const Publications: React.FC = () => {
  const publicationsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(publicationsRef, { threshold: 0.1 });

  const publications = [
    {
      id: '1',
      title: 'AI-Driven Filtering of Spam and Offensive Language in Online Platforms',
      journal: 'Paper Presentation',
      date: '2025',
      type: 'Research Paper',
      description: 'This paper examines the use of Artificial Intelligence (AI) in filtering spam and offensive language across online platforms. By employing Natural Language Processing (NLP) and machine learning techniques, AI-driven systems efficiently detect and moderate harmful content such as spam, hate speech, and cyberbullying. ',
      url: 'http://dx.doi.org/10.13140/RG.2.2.32438.82240',
      tags: ['Innovation', 'NLP', 'AI', 'Content-Moderation', 'Spam-Filtering']
    },
    {
      id: '2',
      title: 'IOT BASED SMART WASTE MANAGEMENT SYSTEM FOR ECO-ENHANCEMENT REWARD BASED RECYCLING',
      journal: 'Paper Presentation',
      date: '2024',
      type: 'Research Paper',
      description: 'This paper proposes the design and implementation of an IOT based smart bin interlinked to a mobile application and an admin panel towards the optimization of waste collection and processing. The system attains user incentive through credit payout redeemable for government service, thus promoting an active urge towards being eco-responsible against passive participation by the system.',
      url: 'http://dx.doi.org/10.13140/RG.2.2.26566.79681',
      tags: ['IOT', 'Incentive', 'Waste-Management', 'Eco-Responsibility']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Article': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'Research Paper': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'Conference Paper': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={publicationsRef}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 dark:text-white mb-6">
              Publications & Research
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Contributing to the tech community through research, articles, and knowledge sharing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <div
                key={publication.id}
                className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <BookOpen size={20} className="text-white" />
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(publication.type)}`}>
                        {publication.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={publication.url}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  {publication.title}
                </h3>

                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{publication.date}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {publication.journal}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {publication.description}
                </p>

                

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {publication.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always open to research collaborations, guest writing opportunities, and speaking engagements.
              </p>
              <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;