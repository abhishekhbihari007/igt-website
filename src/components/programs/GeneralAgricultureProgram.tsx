import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const GeneralAgricultureProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Agriculture",
    description: "Comprehensive agricultural education covering modern farming techniques, sustainable practices, and agricultural business management. Learn traditional and innovative approaches to crop production, livestock management, and agricultural economics.",
    duration: "12 Months",
    overview: "The Master's Program in Agriculture provides comprehensive education in modern farming techniques, sustainable agricultural practices, and agricultural business management. Students learn both traditional and innovative approaches to crop production, livestock management, and agricultural economics.",
    careerOpportunities: [
      "Agricultural Extension Officer",
      "Farm Manager",
      "Agricultural Consultant",
      "Crop Production Specialist",
      "Livestock Manager",
      "Agricultural Policy Analyst",
      "Agricultural Business Manager"
    ],
    keyAreas: [
      "Crop Production and Management",
      "Livestock Production and Health",
      "Soil Science and Fertility",
      "Agricultural Economics and Marketing",
      "Sustainable Agriculture Practices",
      "Agricultural Extension and Education",
      "Farm Business Management"
    ],
    semester1: [
      "Principles of Crop Production - Crop physiology, growth stages, yield optimization",
      "Soil Science and Management - Soil properties, fertility, conservation practices",
      "Livestock Production - Animal nutrition, breeding, health management",
      "Agricultural Economics - Market analysis, pricing, farm financial management",
      "Field Work I - Practical farm operations and crop management"
    ],
    semester2: [
      "Sustainable Agriculture - Organic farming, integrated pest management, conservation",
      "Agricultural Extension - Communication, education, community development",
      "Farm Business Management - Planning, budgeting, risk management",
      "Agricultural Policy and Law - Regulations, subsidies, international trade",
      "Capstone Project - Comprehensive farm management plan development"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default GeneralAgricultureProgram;
