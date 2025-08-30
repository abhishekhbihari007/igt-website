import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIMarketingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Marketing",
    description: "Leverage AI for customer insights, personalization, and campaign optimization. Master predictive customer analytics, automated marketing workflows, and AI-driven content generation for targeted campaigns.",
    duration: "12 Months",
    overview: "Our AI & Marketing program teaches you to harness artificial intelligence for advanced marketing strategies. Learn predictive customer analytics, automated marketing workflows, and AI-driven content generation that create personalized, effective marketing campaigns.",
    careerOpportunities: [
      "AI Marketing Specialist",
      "Marketing Data Analyst",
      "Customer Analytics Expert",
      "Marketing Automation Specialist",
      "AI Content Strategist"
    ],
    keyAreas: [
      "Predictive Customer Analytics",
      "Marketing Automation",
      "AI Content Generation",
      "Customer Segmentation",
      "Campaign Optimization",
      "Marketing AI Tools"
    ],
    semester1: [
      "Introduction to AI in Marketing",
      "Customer Analytics Fundamentals",
      "Marketing Data Processing",
      "AI Tools for Marketing",
      "Customer Segmentation",
      "Marketing Automation Basics"
    ],
    semester2: [
      "Advanced Customer Analytics",
      "AI Content Generation",
      "Campaign Optimization",
      "Predictive Marketing",
      "Marketing AI Strategy",
      "Capstone Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIMarketingProgram;
