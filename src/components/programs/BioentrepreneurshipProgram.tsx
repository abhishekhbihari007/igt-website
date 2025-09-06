import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const BioentrepreneurshipProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Bioentrepreneurship",
    description: "Integrate life sciences, innovation, and business strategy to launch and manage biotech ventures. Cover bioscience innovation, intellectual property, regulatory affairs, and startup funding with focus on translating scientific ideas into marketable products.",
    duration: "12 Months",
    overview: "The Master Program in Bioentrepreneurship integrates life sciences, innovation, and business strategy to empower students to launch and manage biotech ventures. The program covers bioscience innovation, intellectual property, regulatory affairs, and startup funding with a focus on translating scientific ideas into marketable products or services.",
    careerOpportunities: [
      "Biotech Entrepreneur / Startup Founder",
      "Innovation Manager in Biopharma",
      "Technology Transfer Specialist",
      "Bio-Incubator Coordinator",
      "Venture Capital Analyst – Life Sciences",
      "Regulatory & IP Strategy Consultant",
      "Business Development Manager in Biotech"
    ],
    keyAreas: [
      "Biotech Innovation & Commercialization",
      "Market Analysis for Life Sciences",
      "Intellectual Property Rights (IPR) & Licensing",
      "Regulatory Strategy and Compliance",
      "Startup Finance & Fundraising",
      "Pitching, Branding & Strategic Planning",
      "Incubation and Scaling Operations"
    ],
    semester1: [
      "Introduction to Bioentrepreneurship - Biotech business models, startup lifecycle, innovation trends",
      "Biotechnology & Life Sciences Markets - Pharma, diagnostics, agri-biotech, medtech opportunity mapping",
      "IPR & Patent Strategy - Filing patents, freedom to operate, tech licensing, WIPO",
      "Startup Finance & Venture Funding - Seed, angel, venture capital, term sheets, valuations",
      "Lab I – Business Plan Creation - Real-world idea validation and pitch deck development"
    ],
    semester2: [
      "Regulatory Framework & Compliance - DCGI, CDSCO, USFDA, CE mark, clinical pathways",
      "Bio-Incubation and Tech Transfer - Incubator setup, academic-industry collaboration, licensing",
      "Branding, Marketing & Sales Strategy - Biotech product positioning, digital strategy, pricing models",
      "Entrepreneurial Leadership - Founder mindset, hiring, agility, risk management",
      "Capstone Project - Launch and pitch a simulated biotech venture with investor Q&A"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default BioentrepreneurshipProgram;
