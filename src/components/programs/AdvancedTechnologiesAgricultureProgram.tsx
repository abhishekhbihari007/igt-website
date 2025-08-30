import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AdvancedTechnologiesAgricultureProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Advanced Technologies in Agriculture",
    description: "Explore cutting-edge technologies transforming modern agriculture. Master blockchain for supply chain transparency, IoT for smart farming, and biotechnology for crop improvement.",
    duration: "12 Months",
    overview: "Our Advanced Technologies in Agriculture program introduces you to the latest innovations revolutionizing farming practices. Learn about blockchain technology for supply chain transparency, IoT systems for smart farming, and biotechnology applications for crop improvement.",
    careerOpportunities: [
      "Agricultural Technology Specialist",
      "Smart Farming Consultant",
      "Blockchain Agriculture Expert",
      "IoT Agriculture Developer",
      "Agricultural Biotechnology Researcher"
    ],
    keyAreas: [
      "Blockchain in Agriculture",
      "IoT & Smart Farming Systems",
      "Agricultural Biotechnology",
      "Supply Chain Transparency",
      "Precision Agriculture Technologies",
      "Sustainable Farming Solutions"
    ],
    semester1: [
      "Introduction to Agricultural Technologies",
      "Blockchain Fundamentals & Applications",
      "IoT Systems in Agriculture",
      "Smart Farming Infrastructure",
      "Agricultural Data Management",
      "Technology Integration Strategies"
    ],
    semester2: [
      "Advanced Blockchain Applications",
      "IoT Development & Deployment",
      "Biotechnology in Crop Improvement",
      "Supply Chain Management",
      "Technology Implementation",
      "Capstone Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AdvancedTechnologiesAgricultureProgram;
