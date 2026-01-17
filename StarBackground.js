import { useEffect, useState } from "react";

// StarBackground component for animated stars and meteors
export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    
    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];
    
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.8 + 0.2,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = Math.floor((window.innerWidth * window.innerHeight) / 100000);
    const newMeteors = [];
    
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse absolute rounded-full bg-white dark:bg-gray-300"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            top: star.y + "%",
            left: star.x + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      
      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor-effect absolute"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            top: meteor.y + "%",
            left: meteor.x + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};