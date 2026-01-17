import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-down text-center lg:text-left">
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed animate-fade-in-up text-justify lg:text-left" style={{ animationDelay: '0.2s' }}>
              I'm a passionate 3rd year Computer Science student at Madda Walabu University with a strong interest in web development 
              and software engineering. I enjoy learning new technologies and applying theoretical knowledge 
              to build practical solutions.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in-up text-justify lg:text-left" style={{ animationDelay: '0.3s' }}>
              Through my studies and personal projects, I've developed skills in HTML, CSS, JavaScript, PHP, 
              and I'm currently exploring modern frameworks like React. I'm always eager to take on new 
              challenges and expand my technical expertise.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="hover-lift text-center sm:text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 animate-bounce-in" style={{ animationDelay: '0.7s' }}>Education</h3>
                <p className="text-gray-600 dark:text-gray-300">Madda Walabu University</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">3rd Year CS Student</p>
              </div>
              <div className="hover-lift text-center sm:text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 animate-bounce-in" style={{ animationDelay: '1s' }}>Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">Web Development</p>
              </div>
              <div className="hover-lift text-center sm:text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 animate-bounce-in" style={{ animationDelay: '0.7s' }}>Status</h3>
                <p className="text-gray-600 dark:text-gray-300">Learning & Growing</p>
              </div>
              <div className="hover-lift text-center sm:text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 animate-bounce-in" style={{ animationDelay: '1s' }}>Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Robe, Ethiopia</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 hover-lift floating-element relative">
              <img
                src="/images (1).jpg"
                alt="Workspace"
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;