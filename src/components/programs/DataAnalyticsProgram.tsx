import React from 'react';
import { Link } from 'react-router-dom';

const DataAnalyticsProgram: React.FC = () => {
  const programData = {
    title: "Data Analytics Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering data analytics, business intelligence, statistical analysis, and data-driven decision making.",
    highlights: [
      "Statistical Analysis",
      "Business Intelligence",
      "Data Visualization",
      "Predictive Analytics",
      "Data Storytelling"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Statistics Fundamentals",
          "Data Types & Sources",
          "Data Cleaning & Preparation",
          "Excel & Spreadsheets",
          "Basic Programming (Python/R)"
        ]
      },
      {
        title: "Core Analytics",
        topics: [
          "Descriptive Analytics",
          "Inferential Statistics",
          "Data Visualization",
          "Business Intelligence Tools",
          "Dashboard Creation"
        ]
      },
      {
        title: "Advanced Analytics",
        topics: [
          "Predictive Analytics",
          "Regression Analysis",
          "Time Series Analysis",
          "Data Storytelling",
          "Analytics Strategy"
        ]
      }
    ],
    careerOpportunities: [
      "Data Analyst",
      "Business Analyst",
      "Data Visualization Specialist",
      "Business Intelligence Analyst",
      "Analytics Consultant"
    ],
    admissionRequirements: [
      "Basic mathematical skills",
      "Logical thinking",
      "Interest in data",
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

export default DataAnalyticsProgram;
