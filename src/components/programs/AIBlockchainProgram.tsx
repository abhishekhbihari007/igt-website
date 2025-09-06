import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIBlockchainProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Blockchain",
    description: "Combine the two most transformative technologies of the 21st century. Build intelligent systems that are secure, transparent, decentralized, and data-driven. Learn how AI algorithms and blockchain protocols work together to revolutionize industries.",
    duration: "12 Months",
    overview: "The Master Program in AI & Blockchain combines the two most transformative technologies of the 21st century. This interdisciplinary program focuses on building intelligent systems that are secure, transparent, decentralized, and data-driven. Students learn how AI algorithms and blockchain protocols can work together to revolutionize industries like finance, healthcare, agriculture, logistics, and identity management.",
    careerOpportunities: [
      "AI Blockchain Developer",
      "Smart Contract Engineer",
      "AI Security & Compliance Analyst",
      "Blockchain Data Scientist",
      "Cryptographic Researcher",
      "DeFi/FinTech Product Developer",
      "AI-Powered Web3 Entrepreneur"
    ],
    keyAreas: [
      "Artificial Intelligence (ML, DL, NLP)",
      "Blockchain Protocols & Smart Contracts",
      "Decentralized AI Systems",
      "Cryptography and Security",
      "AI for Fraud Detection & Identity Verification",
      "Tokenization, NFTs, and Digital Assets",
      "AI in Web3, Metaverse, and DeFi Applications"
    ],
    semester1: [
      "Fundamentals of Machine Learning - Supervised, unsupervised learning, algorithms, model evaluation",
      "Blockchain Architecture & Cryptography - Hashing, Merkle trees, consensus mechanisms, mining",
      "Python for AI & Smart Contracts - Python, Solidity, Remix, Web3.js basics",
      "Smart Contracts & Ethereum - Deploying contracts, gas, tokens, DApps",
      "Lab I – ML Model + Smart Contract Integration - AI-based voting system with Ethereum blockchain"
    ],
    semester2: [
      "Decentralized AI Systems - Swarm intelligence, federated learning, distributed AI",
      "AI for Blockchain Security & Fraud Detection - Anomaly detection, smart contract auditing, scam detection",
      "Web3, DeFi & Metaverse Applications - NFTs, stablecoins, DAOs, immersive AI interfaces",
      "Ethics, Privacy & Responsible AI - GDPR, AI ethics, data sovereignty in blockchain",
      "Capstone Project - Build an AI-powered decentralized application with live demo"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIBlockchainProgram;
