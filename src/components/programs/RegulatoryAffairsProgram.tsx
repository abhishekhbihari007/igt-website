import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const RegulatoryAffairsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Regulatory Affairs",
    description: "Navigate complex regulatory frameworks in healthcare and life sciences",
    duration: "2 Years (4 Semesters)",
    overview: "Our Regulatory Affairs Program prepares students to navigate complex regulatory frameworks in healthcare, pharmaceuticals, and life sciences. Students learn regulatory compliance, documentation, and approval processes for medical products.",
    careerOpportunities: [
      "Regulatory Affairs Specialist",
      "Regulatory Compliance Manager",
      "Regulatory Affairs Consultant",
      "Quality Assurance Manager",
      "Regulatory Policy Analyst",
      "Clinical Research Coordinator"
    ],
    keyAreas: [
      "Regulatory Framework & Compliance",
      "Drug & Device Approval Processes",
      "Clinical Trial Regulations",
      "Quality Assurance & Control",
      "Regulatory Documentation",
      "International Regulatory Standards"
    ],
    semester1: [
      "Introduction to Regulatory Affairs",
      "Regulatory Framework Basics",
      "Healthcare Law & Policy",
      "Quality Systems Fundamentals",
      "Documentation Standards",
      "Regulatory Compliance Basics"
    ],
    semester2: [
      "Advanced Regulatory Processes",
      "Clinical Trial Regulations",
      "International Standards",
      "Regulatory Strategy",
      "Quality Assurance Systems",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default RegulatoryAffairsProgram;
