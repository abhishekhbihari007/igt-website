import React from 'react';
import { Link } from 'react-router-dom';

const NetworkEngineeringProgram: React.FC = () => {
  const programData = {
    title: "Network Engineering Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering network engineering, network security, infrastructure design, and enterprise networking solutions.",
    highlights: [
      "Network Infrastructure Design",
      "Network Security",
      "Routing & Switching",
      "Wireless Networks",
      "Network Management"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Networking Fundamentals",
          "TCP/IP Protocol Suite",
          "Network Architecture",
          "Network Security Basics",
          "Network Administration"
        ]
      },
      {
        title: "Core Networking",
        topics: [
          "Routing Protocols",
          "Switching Technologies",
          "Wireless Networking",
          "Network Virtualization",
          "Quality of Service (QoS)"
        ]
      },
      {
        title: "Advanced Network Technologies",
        topics: [
          "Software-Defined Networking (SDN)",
          "Network Automation",
          "Cloud Networking",
          "Network Monitoring",
          "Network Troubleshooting"
        ]
      }
    ],
    careerOpportunities: [
      "Network Engineer",
      "Network Administrator",
      "Network Security Engineer",
      "Network Architect",
      "Network Operations Specialist"
    ],
    admissionRequirements: [
      "Basic computer knowledge",
      "Understanding of networking concepts",
      "Problem-solving skills",
      "Interest in network technology"
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

export default NetworkEngineeringProgram;
