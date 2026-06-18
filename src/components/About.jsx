import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span>Get To Know Me</span>
          About Me
        </h2>
        <div className="about-content animate-on-scroll">
          <p className="about-text">
            I am a dedicated and results-driven Computer Science graduate with a strong academic foundation and proven expertise across web technologies and business development. Highly adaptable to diverse organizational environments, I excel in front-end development, client outreach, and professional communications. Whether I am building robust web applications, engaging with prospective clients, or mentoring students, I bring a proactive work ethic and a genuine passion for holistic development.
          </p>
          <div className="about-highlights">
            <div className="card highlight-card">
              <h3>Web Development</h3>
              <p>React.js, ASP.NET, HTML/CSS, JavaScript & SQL Server</p>
            </div>
            <div className="card highlight-card">
              <h3>Business Development</h3>
              <p>Client Outreach, Lead Generation & Market Research</p>
            </div>
            <div className="card highlight-card">
              <h3>Academic Mentoring</h3>
              <p>Curriculum Delivery, Student Mentoring & Lesson Planning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
