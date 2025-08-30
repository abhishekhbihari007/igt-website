import React from 'react';
import { Link } from 'react-router-dom';

const HealthcareAIProgram: React.FC = () => {
  const programData = {
    title: "Healthcare AI Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering artificial intelligence applications in healthcare, medical imaging, diagnostics, and healthcare technology.",
    highlights: [
      "Medical AI Applications",
      "Medical Imaging Analysis",
      "Healthcare Data Analytics",
      "Diagnostic AI Systems",
      "Healthcare Technology Ethics"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Healthcare Fundamentals",
          "AI & Machine Learning Basics",
          "Medical Data Types",
          "Healthcare Regulations",
          "Ethics in Healthcare AI"
        ]
      },
      {
        title: "Healthcare AI Core",
        topics: [
          "Medical Image Analysis",
          "Natural Language Processing in Healthcare",
          "Predictive Analytics",
          "Clinical Decision Support",
          "Healthcare Data Security"
        ]
      },
      {
        title: "Advanced Healthcare AI",
        topics: [
          "Personalized Medicine",
          "Drug Discovery AI",
          "Telemedicine & Remote Monitoring",
          "AI in Surgery",
          "Healthcare AI Implementation"
        ]
      }
    ],
    careerOpportunities: [
      "Healthcare AI Engineer",
      "Medical AI Researcher",
      "Healthcare Data Scientist",
      "Clinical AI Specialist",
      "Healthcare Technology Consultant"
    ],
    admissionRequirements: [
      "Background in Healthcare or Technology",
      "Understanding of AI concepts",
      "Interest in healthcare innovation",
      "Analytical thinking skills"
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

export default HealthcareAIProgram;
