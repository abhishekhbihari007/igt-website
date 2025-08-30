import React from 'react';
import { Link } from 'react-router-dom';

const WebDevelopmentProgram: React.FC = () => {
  const programData = {
    title: "Web Development Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering modern web development, frontend and backend technologies, and full-stack development practices.",
    highlights: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development",
      "Modern Web Technologies",
      "Responsive Design"
    ],
    curriculum: [
      {
        title: "Frontend Development",
        topics: [
          "HTML5 & CSS3",
          "JavaScript (ES6+)",
          "React.js Framework",
          "Responsive Design",
          "UI/UX Principles"
        ]
      },
      {
        title: "Backend Development",
        topics: [
          "Node.js & Express",
          "Database Design (SQL/NoSQL)",
          "API Development",
          "Authentication & Security",
          "Server Deployment"
        ]
      },
      {
        title: "Advanced Web Technologies",
        topics: [
          "Progressive Web Apps",
          "Web Performance",
          "Testing & Debugging",
          "Version Control (Git)",
          "DevOps Basics"
        ]
      }
    ],
    careerOpportunities: [
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
      "Web Developer",
      "UI/UX Developer"
    ],
    admissionRequirements: [
      "Basic computer literacy",
      "Logical thinking skills",
      "Interest in web technologies",
      "No prior programming experience required"
    ]
  };

  return (
    <div className="program-details">
      <div className="program-header">
        <h1>{programData.title}</h1>
        <div className="program-meta">
          <span className="duration">Duration: {programData.duration}</span>
          <span className="level">Level: {programData.level}</span>
        </div>
      </div>

      <div className="program-overview">
        <h2>Program Overview</h2>
        <p>{programData.overview}</p>
        
        <div className="highlights">
          <h3>Key Highlights</h3>
          <ul>
            {programData.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="curriculum">
        <h2>Curriculum</h2>
        {programData.curriculum.map((module, index) => (
          <div key={index} className="curriculum-module">
            <h3>{module.title}</h3>
            <ul>
              {module.topics.map((topic, topicIndex) => (
                <li key={topicIndex}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="career-opportunities">
        <h2>Career Opportunities</h2>
        <ul>
          {programData.careerOpportunities.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      </div>

      <div className="admission-requirements">
        <h2>Admission Requirements</h2>
        <ul>
          {programData.admissionRequirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="program-actions">
        <Link to="/programs" className="btn btn-secondary">Back to Programs</Link>
        <button className="btn btn-primary">Apply Now</button>
      </div>
    </div>
  );
};

export default WebDevelopmentProgram;
