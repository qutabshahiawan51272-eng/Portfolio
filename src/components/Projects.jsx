import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Career Counsellor App (FYP)",
      label: "Full-Stack Web Application",
      description: "A full-stack career guidance web application featuring video learning modules, interactive quizzes, and student progress tracking. Includes role-based dashboards for institutional and parental monitoring of student engagement.",
      tags: ["React.js", "ASP.NET", "SQL Server"]
    },
    {
      title: "Parking Management System",
      label: "Full-Stack Web Application",
      description: "A full-stack parking management web application with backend API integration, real-time slot tracking, and a responsive user interface.",
      tags: ["React.js", "ASP.NET", "SQL Server"]
    },
    {
      title: "Personal Portfolio",
      label: "Web Application",
      description: "A modern, responsive single-page web application built to professionally showcase my skills, experience, and projects.",
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
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.label && (
                  <span className="project-label">{project.label}</span>
                )}
              </div>
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
