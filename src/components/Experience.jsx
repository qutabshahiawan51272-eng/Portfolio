import React from 'react';
import './Timeline.css';

const Experience = () => {
  const experienceData = [
    {
      title: "Business Development Intern",
      company: "Safa Tech Solutions (Remote)",
      years: "May 2026 – Present",
      description: "Conduct client outreach and lead generation to support business growth. Coordinate professional meetings and carry out market research to identify international business development opportunities."
    },
    {
      title: "Teaching Assistant & Academic Grader",
      company: "Barani Institute of Information Technology (BIIT)",
      years: "Sep 2022 – May 2026",
      description: "Awarded merit scholarship to support course delivery. Graded assignments, assisted during Midterm and Final examinations, and provided academic support to junior students in Computer Science."
    },
    {
      title: "Records & Documentation Coordinator",
      company: "Fox Leads Inc. (On-site)",
      years: "Aug 2024 – Oct 2024",
      description: "Maintained and updated organizational records, managed structured documentation workflows, and coordinated systematic data organization tasks for operational continuity."
    },
    {
      title: "Computer Science & Academic Instructor",
      company: "Sir Syed Academy & Bright Future Academy",
      years: "May 2021 – Present",
      description: "Delivered Computer Science curriculum to Grade 9, Grade 10, and university-level students. Developed lesson plans, monitored student progress, and strengthened student confidence."
    },
    {
      title: "Web Development Intern",
      company: "NovaSpire Solutions (On-site)",
      years: "2021 (3 Months)",
      description: "Assisted in the development and maintenance of web-based projects using HTML, CSS, and JavaScript. Supported front-end tasks and outreach campaigns."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          <span>Professional History</span>
          Work Experience
        </h2>
        <div className="timeline animate-on-scroll">
          {experienceData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h3>{item.title}</h3>
                <h4 className="timeline-institution">{item.company}</h4>
                <span className="timeline-date">{item.years}</span>
                <p style={{marginTop: '1rem', color: 'var(--text-muted)'}}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
