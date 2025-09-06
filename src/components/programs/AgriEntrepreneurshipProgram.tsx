import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AgriEntrepreneurshipProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Agri Entrepreneurship",
    description: "Empower aspiring entrepreneurs with business skills, agricultural knowledge, and innovative tools needed to launch and manage successful agri-based startups. Blend business strategy, value chain management, technology, and field-based innovation.",
    duration: "12 Months",
    overview: "The Master Program in Agri Entrepreneurship is designed to empower aspiring entrepreneurs with the business skills, agricultural knowledge, and innovative tools needed to launch and manage successful agri-based startups. The course blends business strategy, value chain management, technology, and field-based innovation tailored for the agricultural domain.",
    careerOpportunities: [
      "Agri Startup Founder / Co-Founder",
      "Agribusiness Consultant",
      "Rural Innovation Officer",
      "Supply Chain & Logistics Manager",
      "Agri Marketing Strategist",
      "Social Entrepreneur in AgTech",
      "Incubation & Policy Expert (Govt & NGO)"
    ],
    keyAreas: [
      "Agri Business Planning & Management",
      "Rural Marketing and Consumer Behavior",
      "Agri Finance and Venture Capital",
      "Supply Chain & Cold Chain Logistics",
      "AgriTech Startups & Digital Innovation",
      "Policy, Law, and Agri Regulations",
      "Incubation, Pitching & Business Modeling"
    ],
    semester1: [
      "Principles of Entrepreneurship - Idea generation, business modeling, entrepreneurial mindset",
      "Introduction to Agribusiness - Farm-to-fork value chain, market structures, agri product analysis",
      "Agri Marketing & Rural Economy - Customer segmentation, rural consumer behavior, distribution channels"
    ],
    semester2: [
      "Advanced Business Strategies",
      "Agricultural Marketing",
      "Innovation & Technology",
      "Supply Chain Management",
      "Risk Management",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AgriEntrepreneurshipProgram;
