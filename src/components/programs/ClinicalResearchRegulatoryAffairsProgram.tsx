import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const ClinicalResearchRegulatoryAffairsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Clinical Research & Regulatory Affairs",
    description: "Gain expertise in clinical trials and pharmaceutical regulations. Master clinical trial design, regulatory compliance, and drug development processes for global pharmaceutical markets.",
    duration: "12 Months",
    overview: "Our Clinical Research & Regulatory Affairs program provides comprehensive training in clinical trial management and pharmaceutical regulations. Learn clinical trial design, regulatory compliance, and drug development processes that meet global pharmaceutical market requirements.",
    careerOpportunities: [
      "Clinical Research Associate",
      "Regulatory Affairs Specialist",
      "Clinical Trial Manager",
      "Pharmaceutical Compliance Officer",
      "Drug Development Coordinator"
    ],
    keyAreas: [
      "Clinical Trial Design",
      "Regulatory Compliance",
      "Drug Development Processes",
      "Clinical Data Management",
      "Pharmaceutical Regulations",
      "Global Market Requirements"
    ],
    semester1: [
      "Introduction to Clinical Research",
      "Clinical Trial Fundamentals",
      "Regulatory Framework Basics",
      "Drug Development Process",
      "Clinical Data Collection",
      "Ethics in Clinical Research"
    ],
    semester2: [
      "Advanced Clinical Trial Design",
      "Regulatory Compliance",
      "Global Market Regulations",
      "Clinical Data Analysis",
      "Quality Assurance",
      "Capstone Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default ClinicalResearchRegulatoryAffairsProgram;
