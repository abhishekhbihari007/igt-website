import React from 'react';
import { Link } from 'react-router-dom';

const AICybersecurityProgram: React.FC = () => {
  const programData = {
    title: "AI Cybersecurity Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering artificial intelligence in cybersecurity, threat detection, automated defense, and security analytics.",
    highlights: [
      "AI-Powered Threat Detection",
      "Automated Security Response",
      "Security Analytics",
      "AI Security Tools",
      "Cybersecurity Ethics"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Cybersecurity Fundamentals",
          "AI & Machine Learning Basics",
          "Network Security",
          "Security Threats & Vulnerabilities",
          "Security Architecture"
        ]
      },
      {
        title: "AI in Cybersecurity",
        topics: [
          "AI-Powered Threat Detection",
          "Behavioral Analysis",
          "Anomaly Detection",
          "Automated Incident Response",
          "Security Data Analytics"
        ]
      },
      {
        title: "Advanced AI Security",
        topics: [
          "AI Security Tools",
          "Adversarial AI",
          "AI Security Testing",
          "Security Automation",
          "Future of AI in Security"
        ]
      }
    ],
    careerOpportunities: [
      "AI Security Engineer",
      "Cybersecurity Analyst",
      "Security Automation Specialist",
      "Threat Intelligence Analyst",
      "AI Security Consultant"
    ],
    admissionRequirements: [
      "Background in Cybersecurity or Technology",
      "Understanding of AI concepts",
      "Interest in security technology",
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

export default AICybersecurityProgram;
