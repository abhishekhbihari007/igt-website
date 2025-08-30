import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AgriEntrepreneurshipProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Agri-Entrepreneurship",
    description: "Build successful agricultural businesses with innovative farming solutions",
    duration: "2 Years (4 Semesters)",
    overview: "Our Agri-Entrepreneurship Program combines agricultural knowledge with business acumen to create successful farming entrepreneurs. Students learn sustainable farming practices, business management, marketing strategies, and innovative agricultural solutions.",
    careerOpportunities: [
      "Agricultural Entrepreneur",
      "Farm Business Manager",
      "Agricultural Consultant",
      "Agri-Tech Startup Founder",
      "Sustainable Farming Specialist",
      "Agricultural Business Analyst"
    ],
    keyAreas: [
      "Agricultural Business Management",
      "Sustainable Farming Practices",
      "Marketing & Sales Strategies",
      "Financial Planning & Management",
      "Innovation in Agriculture",
      "Supply Chain Management"
    ],
    semester1: [
      "Introduction to Agri-Entrepreneurship",
      "Agricultural Business Fundamentals",
      "Sustainable Farming Methods",
      "Business Planning & Strategy",
      "Financial Management Basics",
      "Market Research Methods"
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
