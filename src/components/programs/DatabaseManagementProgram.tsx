import React from 'react';
import { Link } from 'react-router-dom';

const DatabaseManagementProgram: React.FC = () => {
  const programData = {
    title: "Database Management Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering database design, administration, optimization, and management across various database systems.",
    highlights: [
      "Database Design & Modeling",
      "SQL & NoSQL Databases",
      "Database Administration",
      "Performance Optimization",
      "Data Security & Backup"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Database Fundamentals",
          "Data Modeling",
          "Relational Database Theory",
          "SQL Programming",
          "Database Architecture"
        ]
      },
      {
        title: "Database Technologies",
        topics: [
          "MySQL & PostgreSQL",
          "NoSQL Databases (MongoDB)",
          "Database Administration",
          "Performance Tuning",
          "Data Migration"
        ]
      },
      {
        title: "Advanced Database Management",
        topics: [
          "Database Security",
          "Backup & Recovery",
          "High Availability",
          "Cloud Databases",
          "Big Data Technologies"
        ]
      }
    ],
    careerOpportunities: [
      "Database Administrator",
      "Database Developer",
      "Data Engineer",
      "Database Architect",
      "Data Management Specialist"
    ],
    admissionRequirements: [
      "Basic computer knowledge",
      "Logical thinking skills",
      "Interest in data management",
      "No prior database experience required"
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

export default DatabaseManagementProgram;
