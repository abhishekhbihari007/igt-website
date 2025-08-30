import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const BlockchainProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Blockchain Technology",
    description: "Build decentralized applications and blockchain solutions",
    duration: "2 Years (4 Semesters)",
    overview: "Our Blockchain Program covers the development of decentralized applications and blockchain solutions. Students learn smart contracts, distributed systems, cryptography, and creating secure blockchain applications.",
    careerOpportunities: [
      "Blockchain Developer",
      "Smart Contract Engineer",
      "Blockchain Solutions Architect",
      "Cryptocurrency Developer",
      "DeFi Specialist",
      "Blockchain Consultant"
    ],
    keyAreas: [
      "Blockchain Fundamentals & Architecture",
      "Smart Contract Development",
      "Cryptography & Security",
      "Distributed Systems",
      "DeFi & Cryptocurrency",
      "Blockchain Applications"
    ],
    semester1: [
      "Introduction to Blockchain",
      "Cryptography Basics",
      "Distributed Systems",
      "Programming Fundamentals",
      "Blockchain Architecture",
      "Smart Contract Basics"
    ],
    semester2: [
      "Advanced Smart Contracts",
      "Blockchain Development",
      "DeFi Applications",
      "Blockchain Security",
      "DApp Development",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default BlockchainProgram;
