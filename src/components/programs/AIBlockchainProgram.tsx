import React from 'react';
import { Link } from 'react-router-dom';

const AIBlockchainProgram: React.FC = () => {
  const programData = {
    title: "AI Blockchain Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering the intersection of artificial intelligence and blockchain technology, smart contracts, and decentralized AI applications.",
    highlights: [
      "AI-Blockchain Integration",
      "Smart Contract Development",
      "Decentralized AI",
      "Blockchain Data Analytics",
      "AI Governance on Blockchain"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Blockchain Fundamentals",
          "AI & Machine Learning Basics",
          "Cryptography",
          "Distributed Systems",
          "Smart Contract Theory"
        ]
      },
      {
        title: "AI-Blockchain Core",
        topics: [
          "AI on Blockchain",
          "Smart Contract AI",
          "Decentralized Data",
          "AI Governance",
          "Blockchain Analytics"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "DeFi AI Applications",
          "NFT AI Integration",
          "AI Oracles",
          "Cross-Chain AI",
          "Future of AI-Blockchain"
        ]
      }
    ],
    careerOpportunities: [
      "AI-Blockchain Developer",
      "Smart Contract Developer",
      "DeFi AI Engineer",
      "Blockchain AI Researcher",
      "AI-Blockchain Consultant"
    ],
    admissionRequirements: [
      "Background in Technology or Finance",
      "Understanding of blockchain concepts",
      "Interest in AI applications",
      "Innovative thinking skills"
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

export default AIBlockchainProgram;
