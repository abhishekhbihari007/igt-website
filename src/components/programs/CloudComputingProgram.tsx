import React from 'react';
import { Link } from 'react-router-dom';

const CloudComputingProgram: React.FC = () => {
  const programData = {
    title: "Cloud Computing Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering cloud computing technologies, cloud architecture, and deployment strategies across major cloud platforms.",
    highlights: [
      "Cloud Architecture Design",
      "AWS, Azure, Google Cloud",
      "DevOps & CI/CD",
      "Container Technologies",
      "Serverless Computing"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Cloud Computing Fundamentals",
          "Virtualization Technologies",
          "Networking Basics",
          "Linux Administration",
          "Security Fundamentals"
        ]
      },
      {
        title: "Cloud Platforms",
        topics: [
          "Amazon Web Services (AWS)",
          "Microsoft Azure",
          "Google Cloud Platform",
          "Multi-Cloud Strategies",
          "Cloud Migration"
        ]
      },
      {
        title: "Advanced Cloud Technologies",
        topics: [
          "Container Orchestration (Kubernetes)",
          "Serverless Architecture",
          "Microservices Design",
          "Cloud Security & Compliance",
          "Cost Optimization"
        ]
      }
    ],
    careerOpportunities: [
      "Cloud Architect",
      "DevOps Engineer",
      "Cloud Engineer",
      "Solutions Architect",
      "Cloud Security Specialist"
    ],
    admissionRequirements: [
      "Basic IT knowledge",
      "Understanding of networking",
      "Linux familiarity",
      "Problem-solving skills"
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

export default CloudComputingProgram;
