import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const MedicalCodingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Medical Coding",
    description: "Master healthcare coding systems and medical billing procedures",
    duration: "2 Years (4 Semesters)",
    overview: "Our Medical Coding Program provides comprehensive training in healthcare coding systems, medical terminology, and billing procedures. Students learn to accurately code medical procedures and diagnoses for healthcare reimbursement.",
    careerOpportunities: [
      "Medical Coder",
      "Medical Biller",
      "Health Information Specialist",
      "Coding Auditor",
      "Healthcare Administrator",
      "Medical Records Manager"
    ],
    keyAreas: [
      "Medical Coding Systems (ICD, CPT, HCPCS)",
      "Medical Terminology & Anatomy",
      "Healthcare Billing Procedures",
      "Health Information Management",
      "Coding Compliance & Ethics",
      "Healthcare Reimbursement"
    ],
    semester1: [
      "Introduction to Medical Coding",
      "Medical Terminology",
      "Human Anatomy & Physiology",
      "Basic Coding Systems",
      "Healthcare Documentation",
      "Medical Ethics & Compliance"
    ],
    semester2: [
      "Advanced Coding Systems",
      "Specialty Area Coding",
      "Healthcare Billing",
      "Coding Auditing",
      "Health Information Management",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default MedicalCodingProgram;
