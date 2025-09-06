import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const ClinicalResearchRegulatoryAffairsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Clinical Research & Regulatory Affairs",
    description: "In-depth understanding of clinical trial methodology, pharmaceutical development, ethics, and regulatory compliance. Designed for students aiming to enter or advance in healthcare, biotech, and pharmaceutical industries by ensuring safe and ethical research practices.",
    duration: "12 Months",
    overview: "The Master Program in Clinical Research & Regulatory Affairs provides an in-depth understanding of clinical trial methodology, pharmaceutical development, ethics, and regulatory compliance. It is designed for students aiming to enter or advance in the healthcare, biotech, and pharmaceutical industries by ensuring safe and ethical research practices aligned with global standards.",
    careerOpportunities: [
      "Clinical Research Associate (CRA)",
      "Regulatory Affairs Specialist",
      "Clinical Data Manager",
      "Drug Safety & Pharmacovigilance Officer",
      "Medical Affairs Manager",
      "Quality Assurance Officer in Clinical Trials",
      "Regulatory Submission Coordinator"
    ],
    keyAreas: [
      "Clinical Trial Design & Management",
      "Good Clinical Practice (GCP) Guidelines",
      "Pharmacovigilance & Drug Safety Monitoring",
      "Global Regulatory Frameworks (FDA, EMA, ICH)",
      "Bioethics in Human Research",
      "Clinical Data Management Systems",
      "Documentation and Regulatory Submission"
    ],
    semester1: [
      "Introduction to Clinical Research - Phases of trials, trial stakeholders, clinical protocols",
      "Ethics & Good Clinical Practice (GCP) - ICMR, Helsinki Declaration, informed consent, GCP guidelines",
      "Clinical Trial Operations - Site selection, budgeting, monitoring, SOPs",
      "Clinical Data Management - eCRF, EDC systems, query management, CDISC standards",
      "Lab I – Clinical Trial Design - Mock trial setup, protocol creation, ICF design"
    ],
    semester2: [
      "Global Regulatory Environment - FDA, EMA, ICH, CDSCO, NDA/ANDA submissions",
      "Pharmacovigilance & Drug Safety - Adverse event reporting, signal detection, PSURs",
      "Regulatory Documentation & Dossier Filing - CTD/eCTD format, Module 1-5, regulatory pathways",
      "Quality Assurance & Compliance - Audit preparation, CAPA, validation protocols",
      "Capstone Project - Prepare a regulatory submission package for a new drug"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default ClinicalResearchRegulatoryAffairsProgram;
