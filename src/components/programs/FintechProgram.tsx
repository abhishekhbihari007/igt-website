import React from 'react';
import { Link } from 'react-router-dom';

const FintechProgram: React.FC = () => {
  const programData = {
    title: "Financial Technology (Fintech) Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering financial technology, digital banking, blockchain in finance, and innovative financial solutions.",
    highlights: [
      "Digital Banking",
      "Blockchain in Finance",
      "Payment Systems",
      "Regulatory Technology",
      "Financial Analytics"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Financial Markets",
          "Banking Fundamentals",
          "Financial Regulations",
          "Technology in Finance",
          "Risk Management"
        ]
      },
      {
        title: "Fintech Technologies",
        topics: [
          "Digital Payment Systems",
          "Blockchain & Cryptocurrency",
          "Artificial Intelligence in Finance",
          "Cloud Computing for Finance",
          "API Development"
        ]
      },
      {
        title: "Advanced Fintech Applications",
        topics: [
          "RegTech Solutions",
          "InsurTech",
          "WealthTech",
          "Lending Technology",
          "Financial Data Analytics"
        ]
      }
    ],
    careerOpportunities: [
      "Fintech Developer",
      "Digital Banking Specialist",
      "Blockchain Finance Developer",
      "RegTech Consultant",
      "Financial Technology Analyst"
    ],
    admissionRequirements: [
      "Background in Finance or Technology",
      "Understanding of financial markets",
      "Programming experience preferred",
      "Interest in financial innovation"
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

export default FintechProgram;
