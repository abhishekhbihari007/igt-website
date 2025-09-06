import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const MedicalCodingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Medical Coding",
    description: "Tailored for healthcare professionals and graduates aiming to specialize in medical data processing and compliance. Focus on medical terminology, clinical documentation, international coding standards, and software tools for accurate and compliant coding.",
    duration: "12 Months",
    overview: "The Master Program in Medical Coding is tailored for healthcare professionals and graduates aiming to specialize in medical data processing and compliance. The course focuses on medical terminology, clinical documentation, international coding standards, and software tools for accurate and compliant coding in medical billing and reimbursement.",
    careerOpportunities: [
      "Certified Medical Coder",
      "Health Information Technician",
      "Medical Billing Specialist",
      "Clinical Coding Auditor",
      "Compliance & Reimbursement Analyst",
      "ICD/CPT/HIPAA Specialist",
      "Revenue Cycle Analyst"
    ],
    keyAreas: [
      "Medical Terminology and Human Anatomy",
      "ICD-10-CM, ICD-10-PCS, CPT, HCPCS Coding",
      "Health Records & Documentation Review",
      "Healthcare Laws, HIPAA & Compliance",
      "Medical Billing and Revenue Cycle Management",
      "Claims Processing and Denial Management",
      "Medical Coding Software and EHR Systems"
    ],
    semester1: [
      "Medical Terminology & Human Anatomy - Body systems, medical abbreviations, disease terms",
      "ICD-10-CM Coding - Code structure, guidelines, diagnosis coding",
      "CPT & HCPCS Coding - Procedure codes, modifiers, outpatient coding",
      "Health Records & Documentation - EMR interpretation, SOAP notes, case reviews",
      "Lab I – Practical Coding Exercises - Real patient scenarios and mock coding tests"
    ],
    semester2: [
      "ICD-10-PCS & Inpatient Coding - Procedure classification, MS-DRGs, severity coding",
      "Medical Billing & RCM - Claims cycle, billing software, remittance posting",
      "HIPAA, Legal, and Compliance - Privacy laws, audits, ethical coding practices",
      "Denial Management & Quality Improvement - Error analysis, appeal writing, payment reconciliation",
      "Capstone Project - Comprehensive coding and billing simulation"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default MedicalCodingProgram;
