import React, { useRef } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import { certifications } from '../data/portfolio';

const Certifications: React.FC = () => {
  const certificationsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(certificationsRef, { threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={certificationsRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 dark:text-white mb-6">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional certifications validating expertise in cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Certificate Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-4xl">
                    {cert.logo}
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span className="text-green-600 dark:text-green-400 font-medium text-sm">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Credential Info */}
                {cert.credentialId && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Credential ID
                      </p>
                      <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                        {cert.credentialId}
                      </p>
                    </div>
                  </div>
                )}

                {/* Verification Link */}
                {cert.verificationUrl && (
                  <div className="text-center">
                    <a
                      href={cert.verificationUrl}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Verify Certificate
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;