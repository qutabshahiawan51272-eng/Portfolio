import React, { useState, useEffect } from 'react';
import './InitialScreen.css';

const InitialScreen = () => {
  const roles = [
    "Web Developer",
    "Business Development Associate",
    "Marketing Specialist"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(true); // Fade back in with new text
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="initial-screen" className="initial-section">
      <div className="container initial-container animate-on-scroll">
        <h3 className="initial-greeting">Hi, I'm Umar Fayyaz</h3>
        <h1 className="initial-title">
          <span className={`rotating-text ${fade ? 'fade-in' : 'fade-out'}`}>
            {roles[currentRole]}
          </span>
        </h1>
        <p className="initial-subtitle">
          A motivated and versatile Computer Science professional with hands-on experience in web development, business development, and digital engagement. I combine technical expertise with strong analytical skills to drive real organizational value.
        </p>
        <div className="initial-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default InitialScreen;
