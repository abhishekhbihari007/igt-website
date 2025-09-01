import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIManagementCertificateProgram: React.FC = () => {
  const programData = {
    title: "EU ACC Certificate Program in AI & Management",
    description: "Lead the AI Revolution in Your Industry with cutting-edge artificial intelligence and management strategies",
    duration: "6 Months (Certificate Program)",
    overview: "This certificate program combines artificial intelligence with management strategies to prepare leaders for the AI revolution. You'll master machine learning, data analytics, and business transformation techniques to drive innovation in your organization.",
    careerOpportunities: [
      "AI Strategy Manager",
      "Digital Transformation Consultant",
      "Business Intelligence Analyst",
      "AI Project Manager",
      "Technology Innovation Leader",
      "AI Business Development Manager"
    ],
    keyAreas: [
      "AI Strategy & Management",
      "Machine Learning Applications",
      "Data Analytics for Business",
      "Digital Transformation",
      "AI Ethics & Governance",
      "Business Process Automation"
    ],
    semester1: [
      "Introduction to AI & Management",
      "AI Strategy Development",
      "Machine Learning Fundamentals",
      "Data Analytics for Decision Making",
      "Digital Transformation Strategies",
      "AI Ethics & Governance"
    ],
    semester2: [
      "Advanced AI Applications",
      "Business Process Automation",
      "AI Project Management",
      "Change Management for AI",
      "AI Risk Assessment",
      "Capstone Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIManagementCertificateProgram;
