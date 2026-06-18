import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Technical Skills",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "C#", "Java", "C++", "ASP.NET", "SQL Server", "MySQL"]
    },
    {
      category: "Business Development",
      skills: ["Client Outreach", "Lead Generation", "Market Research", "Partnership Engagement"]
    },
    {
      category: "Web & Tools",
      skills: ["Front-End Development", "WordPress", "Responsive Design", "Git", "VS Code", "Visual Studio"]
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Communication", "Adaptability", "Problem Solving", "Cross-cultural Collaboration"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span>My Toolkit</span>
          Skills & Expertise
        </h2>
        <div className="skills-container animate-on-scroll">
          {skillCategories.map((cat, idx) => (
            <div className="skill-category card" key={idx}>
              <h3>{cat.category}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, index) => (
                  <span className="skill-tag" key={index}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
