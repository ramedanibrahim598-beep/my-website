import { useState, useEffect } from 'react';
import { scrollToElement } from '../utils/scrollUtils';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Computer Science Student',
    'Web Development Enthusiast',
    'Future Software Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-blue-500 dark:bg-gray-800 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Meteors */}
        <div className="meteor" style={{ top: '10%', left: '10%', animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="meteor" style={{ top: '20%', left: '80%', animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="meteor" style={{ top: '60%', left: '20%', animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="meteor" style={{ top: '80%', left: '70%', animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
        <div className="meteor" style={{ top: '40%', left: '90%', animationDelay: '1.5s', animationDuration: '3.2s' }}></div>
        <div className="meteor" style={{ top: '30%', left: '5%', animationDelay: '2.5s', animationDuration: '3.8s' }}></div>
        
        {/* Original floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-indigo-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-blue-300/20 rounded-full animate-float" style={{ animationDelay: '0.7s' }}></div>
      </div>
      
      <div className="container-max section-padding text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <img
                src="/ram.jpg"
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-xl hover-lift animate-bounce-in"
              />
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ramedan Ibrahim</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            A passionate <span className="font-semibold text-gray-800 dark:text-white inline-block min-w-[200px]">
              {displayText}
              <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
            </span>
            <br />
            building my skills in web development and software engineering
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={() => scrollToElement('projects')}
              className="btn-primary animate-bounce-in-up"
              style={{ animationDelay: '0.7s' }}
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToElement('contact')}
              className="btn-secondary animate-bounce-in-up"
              style={{ animationDelay: '1s' }}
            >
              Get In Touch
            </button>
          </div>
          
          <div className="mt-12 animate-bounce" style={{ animationDelay: '1s' }}>
            <button 
              onClick={() => scrollToElement('about')}
              className="text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;