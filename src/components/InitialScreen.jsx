import React from 'react';
import './InitialScreen.css';

const InitialScreen = () => {
  return (
    <section id="initial-screen" className="initial-section">
      <div className="container initial-container animate-on-scroll">
        <h3 className="initial-greeting">Hi, I'm Umar Fayyaz</h3>
        <h1 className="initial-title">Web Developer & Business Specialist</h1>
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
