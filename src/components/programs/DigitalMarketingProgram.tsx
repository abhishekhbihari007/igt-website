import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const DigitalMarketingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Digital Marketing",
    description: "Master online marketing strategies and digital brand building",
    duration: "2 Years (4 Semesters)",
    overview: "Our Digital Marketing Program covers comprehensive online marketing strategies including social media, SEO, content marketing, and analytics. Students learn to build digital brands and drive online business growth.",
    careerOpportunities: [
      "Digital Marketing Manager",
      "Social Media Specialist",
      "SEO Specialist",
      "Content Marketing Manager",
      "Digital Analytics Expert",
      "Digital Brand Strategist"
    ],
    keyAreas: [
      "Social Media Marketing",
      "Search Engine Optimization (SEO)",
      "Content Marketing & Strategy",
      "Digital Analytics & Reporting",
      "Email Marketing & Automation",
      "Digital Brand Building"
    ],
    semester1: [
      "Introduction to Digital Marketing",
      "Marketing Fundamentals",
      "Social Media Marketing",
      "Content Creation",
      "Basic Analytics",
      "Digital Marketing Tools"
    ],
    semester2: [
      "Advanced SEO Strategies",
      "Content Marketing",
      "Digital Analytics",
      "Email Marketing",
      "Digital Brand Strategy",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default DigitalMarketingProgram;
