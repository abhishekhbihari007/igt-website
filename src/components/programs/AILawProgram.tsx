import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AILawProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Law",
    description: "Explore the legal implications and applications of artificial intelligence. Master legal tech tools, AI ethics frameworks, and regulatory compliance for emerging AI technologies.",
    duration: "12 Months",
    overview: "Our AI & Law program examines the intersection of artificial intelligence and legal practice. Learn about legal tech tools, AI ethics frameworks, and regulatory compliance requirements for emerging AI technologies that are transforming the legal industry.",
    careerOpportunities: [
      "Legal Tech Specialist",
      "AI Ethics Consultant",
      "Technology Lawyer",
      "AI Regulatory Expert",
      "Legal AI Developer"
    ],
    keyAreas: [
      "AI Ethics & Governance",
      "Legal Technology Tools",
      "AI Regulatory Compliance",
      "Intellectual Property in AI",
      "Data Privacy & AI Law",
      "Legal AI Applications"
    ],
    semester1: [
      "Introduction to AI & Law",
      "AI Ethics & Governance",
      "Legal Technology Fundamentals",
      "AI Regulatory Frameworks",
      "Data Privacy Laws",
      "Legal AI Tools"
    ],
    semester2: [
      "Advanced AI Law Topics",
      "AI Intellectual Property",
      "Regulatory Compliance",
      "Legal AI Development",
      "AI in Legal Practice",
      "Capstone Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AILawProgram;
