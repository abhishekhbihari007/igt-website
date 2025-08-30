import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const IPLawProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Intellectual Property Law",
    description: "Navigate the complex world of IP law and protect innovative ideas",
    duration: "2 Years (4 Semesters)",
    overview: "Our IP Law Program provides comprehensive training in intellectual property law, patent law, copyright, trademarks, and trade secrets. Students learn to protect innovations, navigate legal frameworks, and advise on IP strategy.",
    careerOpportunities: [
      "IP Attorney",
      "Patent Lawyer",
      "IP Consultant",
      "Legal Advisor",
      "IP Strategy Manager",
      "Technology Transfer Specialist"
    ],
    keyAreas: [
      "Patent Law & Applications",
      "Copyright & Trademark Law",
      "Trade Secret Protection",
      "IP Litigation & Enforcement",
      "International IP Law",
      "IP Strategy & Management"
    ],
    semester1: [
      "Introduction to Intellectual Property Law",
      "Patent Law Fundamentals",
      "Copyright Law Basics",
      "Trademark Law Principles",
      "Legal Research Methods",
      "IP Law Framework"
    ],
    semester2: [
      "Advanced Patent Law",
      "IP Litigation & Enforcement",
      "International IP Law",
      "IP Strategy & Management",
      "Technology Transfer",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default IPLawProgram;
