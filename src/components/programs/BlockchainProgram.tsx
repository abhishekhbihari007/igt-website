import React from 'react';
import { Link } from 'react-router-dom';

const BlockchainProgram: React.FC = () => {
  const programData = {
    title: "Blockchain Technology Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering blockchain technology, cryptocurrency, smart contracts, and decentralized applications development.",
    highlights: [
      "Blockchain Fundamentals",
      "Smart Contract Development",
      "Cryptocurrency Technology",
      "DeFi Applications",
      "Blockchain Security"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Cryptography Basics",
          "Distributed Systems",
          "Peer-to-Peer Networks",
          "Consensus Mechanisms",
          "Blockchain Architecture"
        ]
      },
      {
        title: "Blockchain Development",
        topics: [
          "Ethereum Development",
          "Smart Contract Programming",
          "Solidity Language",
          "Web3.js Integration",
          "DApp Development"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "DeFi Protocols",
          "NFT Development",
          "Cross-Chain Solutions",
          "Blockchain Security",
          "Regulatory Compliance"
        ]
      }
    ],
    careerOpportunities: [
      "Blockchain Developer",
      "Smart Contract Developer",
      "DeFi Developer",
      "Blockchain Architect",
      "Cryptocurrency Analyst"
    ],
    admissionRequirements: [
      "Basic programming knowledge",
      "Understanding of cryptography",
      "Interest in financial technology",
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

export default BlockchainProgram;
