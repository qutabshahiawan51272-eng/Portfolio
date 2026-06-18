import React from 'react';
import './Timeline.css';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "PMAS-Arid Agriculture University Rawalpindi (BIIT)",
      years: "Completed"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          <span>My Academic Journey</span>
          Education
        </h2>
        <div className="timeline animate-on-scroll">
          {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h3>{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <span className="timeline-date">{item.years}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
