import React from 'react';
import { Link } from 'react-router-dom';

const MedicalCodingProgram: React.FC = () => {
  const programData = {
    title: "Medical Coding Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering medical coding, healthcare billing, medical terminology, and healthcare information management.",
    highlights: [
      "Medical Coding Systems",
      "Healthcare Billing",
      "Medical Terminology",
      "Health Information Management",
      "Compliance & Ethics"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Medical Terminology",
          "Anatomy & Physiology",
          "Healthcare Systems",
          "Medical Documentation",
          "Healthcare Ethics"
        ]
      },
      {
        title: "Medical Coding Core",
        topics: [
          "ICD-10-CM Coding",
          "CPT Coding",
          "HCPCS Coding",
          "Medical Billing",
          "Claims Processing"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "Specialty Coding",
          "Compliance & Auditing",
          "Healthcare Analytics",
          "Electronic Health Records",
          "Career Preparation"
        ]
      }
    ],
    careerOpportunities: [
      "Medical Coder",
      "Medical Biller",
      "Health Information Specialist",
      "Coding Auditor",
      "Healthcare Administrator"
    ],
    admissionRequirements: [
      "High school diploma or equivalent",
      "Basic computer skills",
      "Attention to detail",
      "Interest in healthcare"
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

export default MedicalCodingProgram;
