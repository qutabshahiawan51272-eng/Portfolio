import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Career Counsellor App (FYP)",
      description: "Developed a career guidance platform featuring video learning, quizzes, and progress tracking. Implemented institutional and parental monitoring features for student engagement.",
      tags: ["React.js", "ASP.NET", "SQL Server"]
    },
    {
      title: "Parking Management System",
      description: "Built a mobile parking solution with backend API integration and real-time functionality.",
      tags: ["React.js", "ASP.NET", "SQL Server"]
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio built to showcase my professional journey and projects.",
      tags: ["React.js", "Vite", "CSS"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span>My Creations</span>
          Recent Projects
        </h2>
        <div className="projects-grid animate-on-scroll">
          {projectsData.map((project, index) => (
            <div className="project-card card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span className="project-tag" key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
