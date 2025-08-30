import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIBusinessProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI Business",
    description: "Transform business operations with artificial intelligence and data-driven strategies",
    duration: "2 Years (4 Semesters)",
    overview: "Our AI Business Program combines artificial intelligence with business strategy to create innovative business solutions. Students learn AI applications in business, data analytics, automation, and strategic decision-making.",
    careerOpportunities: [
      "AI Business Analyst",
      "Business Intelligence Manager",
      "AI Strategy Consultant",
      "Data-Driven Business Manager",
      "AI Product Manager",
      "Business Automation Specialist"
    ],
    keyAreas: [
      "AI in Business Strategy",
      "Data Analytics & Business Intelligence",
      "Business Process Automation",
      "AI-Powered Decision Making",
      "Digital Transformation",
      "AI Business Ethics"
    ],
    semester1: [
      "Introduction to AI in Business",
      "Business Fundamentals",
      "Data Analytics Basics",
      "AI Technology Overview",
      "Business Strategy",
      "Digital Business Models"
    ],
    semester2: [
      "Advanced AI Business Applications",
      "Business Process Automation",
      "AI Strategy Development",
      "Digital Transformation",
      "AI Business Ethics",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIBusinessProgram;
