import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const FintechProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Financial Technology",
    description: "Transform finance with cutting-edge technology and innovation",
    duration: "2 Years (4 Semesters)",
    overview: "Our Fintech Program combines financial services with technology to create innovative financial solutions. Students learn blockchain, AI in finance, digital payments, regulatory technology, and financial innovation.",
    careerOpportunities: [
      "Fintech Engineer",
      "Blockchain Developer",
      "Digital Payments Specialist",
      "Regulatory Technology Expert",
      "Financial Innovation Consultant",
      "Fintech Product Manager"
    ],
    keyAreas: [
      "Blockchain & Cryptocurrency",
      "Digital Payments & Banking",
      "AI in Financial Services",
      "Regulatory Technology",
      "Financial Data Analytics",
      "Financial Innovation"
    ],
    semester1: [
      "Introduction to Financial Technology",
      "Financial Services Fundamentals",
      "Blockchain Basics",
      "Digital Payments",
      "Financial Regulations",
      "Programming for Fintech"
    ],
    semester2: [
      "Advanced Blockchain Applications",
      "AI in Financial Services",
      "Regulatory Technology",
      "Financial Data Analytics",
      "Fintech Innovation",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default FintechProgram;
