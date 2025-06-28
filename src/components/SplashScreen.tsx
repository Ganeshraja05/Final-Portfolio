import React, { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <div className="relative">
          <div
            className={`w-20 h-20 mx-auto mb-8 transition-all duration-1000 ${
              isAnimating ? 'scale-100 rotate-0' : 'scale-110 rotate-12'
            }`}
          >
            <Code
              size={80}
              className={`text-blue-600 transition-all duration-1000 ${
                isAnimating ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
              }`}
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          
          <div className="relative overflow-hidden">
            <h1
              className={`text-4xl font-light text-gray-900 dark:text-white transition-all duration-1000 ${
                isAnimating ? 'transform translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'
              }`}
              style={{ animationDelay: '1s' }}
            >
              Welcome
            </h1>
          </div>
          
          <div className="mt-4 overflow-hidden">
            <p
              className={`text-lg text-gray-600 dark:text-gray-400 transition-all duration-1000 ${
                isAnimating ? 'transform translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'
              }`}
              style={{ animationDelay: '1.2s' }}
            >
              Crafting digital experiences
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <div
            className={`w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transition-all duration-1000 ${
              isAnimating ? 'scale-x-0' : 'scale-x-100'
            }`}
            style={{ animationDelay: '1.5s' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;