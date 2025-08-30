import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIBlockchainProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Blockchain",
    description: "Combine artificial intelligence with blockchain technology for innovative solutions",
    duration: "2 Years (4 Semesters)",
    overview: "Our AI & Blockchain Program integrates artificial intelligence with blockchain technology to create innovative decentralized solutions. Students learn smart contracts, AI algorithms, distributed systems, and their applications in finance, healthcare, and beyond.",
    careerOpportunities: [
      "AI Blockchain Developer",
      "Smart Contract Engineer",
      "Blockchain Solutions Architect",
      "AI Blockchain Researcher",
      "DeFi Technology Specialist",
      "Blockchain AI Consultant"
    ],
    keyAreas: [
      "Artificial Intelligence & Machine Learning",
      "Blockchain Technology & Cryptography",
      "Smart Contracts & DApps",
      "Distributed Systems & Consensus",
      "AI-Blockchain Integration",
      "Decentralized Finance (DeFi)"
    ],
    semester1: [
      "Introduction to AI & Blockchain",
      "Blockchain Fundamentals",
      "Cryptography Basics",
      "Programming Fundamentals",
      "Data Structures & Algorithms",
      "Smart Contract Basics"
    ],
    semester2: [
      "Advanced AI Algorithms",
      "Blockchain Development",
      "Smart Contract Security",
      "AI-Blockchain Integration",
      "DeFi Applications",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIBlockchainProgram;
