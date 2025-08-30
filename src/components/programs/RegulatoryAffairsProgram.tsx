import React from 'react';
import { Link } from 'react-router-dom';

const RegulatoryAffairsProgram: React.FC = () => {
  const programData = {
    title: "Regulatory Affairs Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering regulatory affairs, compliance, government regulations, and regulatory processes in various industries.",
    highlights: [
      "Regulatory Compliance",
      "Government Regulations",
      "Compliance Management",
      "Regulatory Processes",
      "Industry Standards"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Regulatory Fundamentals",
          "Government Structure",
          "Legal Framework",
          "Compliance Basics",
          "Regulatory Agencies"
        ]
      },
      {
        title: "Regulatory Affairs Core",
        topics: [
          "Regulatory Compliance",
          "Documentation & Submissions",
          "Audit & Inspection",
          "Risk Management",
          "Quality Systems"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "Industry-Specific Regulations",
          "International Regulations",
          "Regulatory Strategy",
          "Compliance Technology",
          "Future of Regulation"
        ]
      }
    ],
    careerOpportunities: [
      "Regulatory Affairs Specialist",
      "Compliance Manager",
      "Regulatory Consultant",
      "Quality Assurance Specialist",
      "Regulatory Policy Analyst"
    ],
    admissionRequirements: [
      "Bachelor's degree in any field",
      "Interest in regulations",
      "Attention to detail",
      "Good communication skills"
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

export default RegulatoryAffairsProgram;
