import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const skillsRef = useRef(null);

  // Function to get color based on skill level
  const getSkillColor = (level) => {
    if (level >= 80) {
      return 'from-green-500 to-green-600'; // Expert level - Green
    } else if (level >= 70) {
      return 'from-blue-500 to-blue-600'; // Advanced level - Blue
    } else if (level >= 60) {
      return 'from-yellow-500 to-yellow-600'; // Intermediate level - Yellow
    } else if (level >= 50) {
      return 'from-orange-500 to-orange-600'; // Beginner-Intermediate - Orange
    } else {
      return 'from-red-500 to-red-600'; // Beginner level - Red
    }
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'React', level: 45 },
        { name: 'Tailwind CSS', level: 40 },
      ]
    },
    {
      title: 'Backend & Programming',
      skills: [
        { name: 'PHP', level: 70 },
        { name: 'MySQL', level: 65 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 70 },
      ]
    },
    {
      title: 'Academic & Tools',
      skills: [
        { name: 'Data Structures', level: 70 },
        { name: 'Algorithms', level: 65 },
        { name: 'Database Design', level: 60 },
        { name: 'Git', level: 60 },
        { name: 'VS Code', level: 85 },
      ]
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [`${categoryIndex}-${skillIndex}`]: skill.level
                }));
              }, (categoryIndex * 200) + (skillIndex * 100));
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-800" ref={skillsRef}>
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-down">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Skills I've developed during my Computer Science studies and personal projects
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            🎓 3rd Year Computer Science Student
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`bg-white rounded-xl p-6 shadow-lg card-hover animate-fade-in-up ${
                isVisible ? 'animate-in' : ''
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="animate-fade-in-right" style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out transform origin-left shadow-sm`}
                        style={{ 
                          width: `${animatedSkills[`${categoryIndex}-${skillIndex}`] || 0}%`,
                          transform: `scaleX(${animatedSkills[`${categoryIndex}-${skillIndex}`] ? 1 : 0})`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Learning Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              As a 3rd year Computer Science student, I'm passionate about web development and continuously 
              expanding my skill set. I've built a strong foundation in core programming concepts and am 
              now exploring modern web technologies like React and Tailwind CSS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">3rd</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Year CS Student</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Technologies Learned</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">∞</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Eager to Learn More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;