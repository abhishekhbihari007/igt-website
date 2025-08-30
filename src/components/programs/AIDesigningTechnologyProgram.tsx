import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIDesigningTechnologyProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Designing Technology",
    description: "Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools, automated layout generation, and intelligent user experience optimization for modern digital products.",
    duration: "12 Months",
    overview: "Our AI & Designing Technology program integrates artificial intelligence with design processes to create innovative digital products. Learn AI-powered design tools, automated layout generation, and intelligent user experience optimization that revolutionize modern design practices.",
    careerOpportunities: [
      "AI Design Specialist",
      "UX/UI Designer",
      "Product Design Engineer",
      "Design Technology Consultant",
      "Creative AI Developer"
    ],
    keyAreas: [
      "AI-Powered Design Tools",
      "Automated Layout Generation",
      "User Experience Optimization",
      "Product Design Integration",
      "Design AI Applications",
      "Creative Technology"
    ],
    semester1: [
      "Introduction to AI in Design",
      "Design Fundamentals & Principles",
      "AI Design Tools & Software",
      "User Experience Basics",
      "Design Automation",
      "AI Design Applications"
    ],
    semester2: [
      "Advanced AI Design Techniques",
      "Automated Layout Systems",
      "UX Optimization with AI",
      "Product Design Integration",
      "Design AI Strategy",
      "Capstone Design Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIDesigningTechnologyProgram;
