import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const CybersecurityProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Cybersecurity",
    description: "Protect digital assets and secure information systems from cyber threats",
    duration: "2 Years (4 Semesters)",
    overview: "Our Cybersecurity Program prepares students to defend against cyber threats and secure digital infrastructure. Students learn ethical hacking, network security, cryptography, and incident response to protect organizations from cyber attacks.",
    careerOpportunities: [
      "Cybersecurity Analyst",
      "Security Engineer",
      "Penetration Tester",
      "Security Consultant",
      "Incident Response Specialist",
      "Security Architect"
    ],
    keyAreas: [
      "Network Security & Defense",
      "Ethical Hacking & Penetration Testing",
      "Cryptography & Encryption",
      "Incident Response & Forensics",
      "Security Architecture",
      "Cyber Threat Intelligence"
    ],
    semester1: [
      "Introduction to Cybersecurity",
      "Network Security Fundamentals",
      "Operating System Security",
      "Cryptography Basics",
      "Security Policies & Compliance",
      "Basic Security Tools"
    ],
    semester2: [
      "Advanced Network Security",
      "Ethical Hacking Techniques",
      "Digital Forensics",
      "Incident Response",
      "Security Architecture Design",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default CybersecurityProgram;
