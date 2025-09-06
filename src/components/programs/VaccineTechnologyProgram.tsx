import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const VaccineTechnologyProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Vaccine Technology",
    description: "Advanced knowledge of vaccine development, from discovery and design to manufacturing and regulatory compliance. Bridge immunology, biotechnology, and clinical research to prepare students for impactful careers in global health and biopharma industries.",
    duration: "12 Months",
    overview: "The Master Program in Vaccine Technology provides advanced knowledge of vaccine development, from discovery and design to manufacturing and regulatory compliance. This program bridges immunology, biotechnology, and clinical research to prepare students for impactful careers in global health and biopharma industries.",
    careerOpportunities: [
      "Vaccine Research Scientist",
      "Bioprocess Development Engineer",
      "Clinical Trials Associate (Vaccines)",
      "Regulatory Affairs Specialist",
      "Immunology Analyst",
      "Biomanufacturing Quality Officer",
      "Vaccine Safety and Surveillance Officer"
    ],
    keyAreas: [
      "Immunology and Antigen Design",
      "Traditional & Modern Vaccine Platforms (e.g., mRNA, DNA)",
      "Vaccine Delivery Systems",
      "Bioprocess Scale-up & Manufacturing",
      "Regulatory Pathways and Clinical Trials",
      "Vaccine Storage, Stability, and Distribution",
      "Ethics, Safety, and Public Health Strategy"
    ],
    semester1: [
      "Advanced Immunology - Immune response, antigens, adjuvants, T/B cell mechanisms",
      "Vaccine Types & Platforms - Inactivated, live attenuated, subunit, mRNA, vector-based",
      "Antigen Discovery & Design - Epitope prediction, protein expression, pathogen analysis",
      "Lab I – Immunoassays & Cell Culture - ELISA, flow cytometry, hybridoma, virus neutralization"
    ],
    semester2: [
      "Bioprocess Engineering - Fermentation, cell line development, purification",
      "Vaccine Clinical Trials & Regulation - Phase I–IV trials, ICMR/FDA/WHO guidelines, GCP",
      "Cold Chain & Logistics - Storage stability, supply chain management, global distribution",
      "Capstone Project - Design a pre-clinical vaccine project with process planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default VaccineTechnologyProgram;
