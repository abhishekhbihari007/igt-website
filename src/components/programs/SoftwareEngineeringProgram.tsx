import React from 'react';
import { Link } from 'react-router-dom';

const SoftwareEngineeringProgram: React.FC = () => {
  const programData = {
    title: "Software Engineering Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering software engineering principles, design patterns, development methodologies, and best practices.",
    highlights: [
      "Software Design & Architecture",
      "Development Methodologies",
      "Testing & Quality Assurance",
      "DevOps & CI/CD",
      "Software Project Management"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Programming Fundamentals",
          "Data Structures & Algorithms",
          "Object-Oriented Design",
          "Software Engineering Principles",
          "Version Control Systems"
        ]
      },
      {
        title: "Software Development",
        topics: [
          "Design Patterns",
          "Software Architecture",
          "Database Design",
          "API Development",
          "Microservices Architecture"
        ]
      },
      {
        title: "Advanced Software Engineering",
        topics: [
          "Software Testing",
          "DevOps Practices",
          "Continuous Integration",
          "Software Security",
          "Performance Optimization"
        ]
      }
    ],
    careerOpportunities: [
      "Software Engineer",
      "Software Developer",
      "Software Architect",
      "DevOps Engineer",
      "Quality Assurance Engineer"
    ],
    admissionRequirements: [
      "Basic programming knowledge",
      "Logical thinking skills",
      "Problem-solving abilities",
      "Interest in software development"
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

export default SoftwareEngineeringProgram;
