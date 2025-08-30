import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const BioentrepreneurshipProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Bioentrepreneurship",
    description: "Develop business ventures in biotechnology and life sciences. Master biotech business models, funding strategies, and commercialization pathways for innovative life science technologies.",
    duration: "12 Months",
    overview: "Our Bioentrepreneurship program combines biotechnology expertise with entrepreneurial skills to help you launch successful life science ventures. Learn biotech business models, funding strategies, and commercialization pathways for innovative technologies.",
    careerOpportunities: [
      "Biotech Startup Founder",
      "Life Sciences Business Developer",
      "Biotech Investment Analyst",
      "Technology Transfer Specialist",
      "Biotech Strategy Consultant"
    ],
    keyAreas: [
      "Biotech Business Models",
      "Funding & Investment Strategies",
      "Technology Commercialization",
      "Intellectual Property Management",
      "Market Analysis & Strategy",
      "Biotech Innovation Management"
    ],
    semester1: [
      "Introduction to Bioentrepreneurship",
      "Biotech Business Fundamentals",
      "Market Analysis & Strategy",
      "Intellectual Property Basics",
      "Funding Sources & Strategies",
      "Business Model Development"
    ],
    semester2: [
      "Advanced Business Strategy",
      "Technology Commercialization",
      "Investment & Partnership",
      "Regulatory & Compliance",
      "Scaling Biotech Ventures",
      "Capstone Business Plan"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default BioentrepreneurshipProgram;
