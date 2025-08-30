import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const DigitalForensicsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Digital Forensics",
    description: "Investigate cybercrimes and recover digital evidence. Master forensic tools, evidence preservation techniques, and legal procedures for digital crime investigation and prosecution.",
    duration: "12 Months",
    overview: "Our Digital Forensics program prepares you for cybercrime investigation and digital evidence recovery. Learn forensic tools, evidence preservation techniques, and legal procedures essential for successful digital crime investigation and prosecution.",
    careerOpportunities: [
      "Digital Forensics Investigator",
      "Cybercrime Analyst",
      "Digital Evidence Specialist",
      "Computer Forensics Expert",
      "Cybersecurity Consultant"
    ],
    keyAreas: [
      "Digital Evidence Collection",
      "Forensic Tools & Techniques",
      "Evidence Preservation",
      "Cybercrime Investigation",
      "Legal Procedures",
      "Digital Forensics Analysis"
    ],
    semester1: [
      "Introduction to Digital Forensics",
      "Digital Evidence Fundamentals",
      "Forensic Tools & Software",
      "Evidence Collection Methods",
      "Data Recovery Techniques",
      "Basic Investigation Procedures"
    ],
    semester2: [
      "Advanced Forensic Analysis",
      "Cybercrime Investigation",
      "Evidence Preservation",
      "Legal & Ethical Considerations",
      "Case Study Analysis",
      "Capstone Investigation Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default DigitalForensicsProgram;
