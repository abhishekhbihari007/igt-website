import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const FermentationTechnologyProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Industrial Fermentation Technology",
    description: "Focus on large-scale application of microbial fermentation processes for producing biochemicals, pharmaceuticals, biofuels, and food products. Emphasize bioprocess engineering, microbial physiology, scale-up techniques, and regulatory aspects.",
    duration: "12 Months",
    overview: "The Master Program in Industrial Fermentation Technology focuses on the large-scale application of microbial fermentation processes for producing biochemicals, pharmaceuticals, biofuels, and food products. The program emphasizes bioprocess engineering, microbial physiology, scale-up techniques, and regulatory aspects relevant to fermentation-based industries.",
    careerOpportunities: [
      "Fermentation Technologist",
      "Bioprocess Engineer",
      "Microbiologist in Industry",
      "Quality Assurance & Regulatory Affairs Officer",
      "Production Manager in Biotech/Food Industry",
      "Research Scientist in Biochemical Engineering",
      "Consultant for Sustainable Bio-Manufacturing"
    ],
    keyAreas: [
      "Microbial Metabolism and Physiology",
      "Fermentation Process Design & Control",
      "Bioreactor Engineering and Scale-up",
      "Downstream Processing & Purification",
      "Industrial Enzymes and Biochemical Production",
      "Quality Control and Regulatory Compliance",
      "Sustainable Fermentation & Bioproducts"
    ],
    semester1: [
      "Microbial Physiology & Biochemistry - Metabolism, growth kinetics, industrial microbes",
      "Introduction to Fermentation Technology - Types of fermentation, substrates, inoculum development",
      "Bioreactor Design & Instrumentation - Stirred tank, airlift, control systems, sensors",
      "Analytical Techniques in Fermentation - pH, DO, biomass estimation, chromatography",
      "Lab I – Batch & Fed-Batch Fermentation - Lab-scale fermenter operations, parameter monitoring"
    ],
    semester2: [
      "Industrial Fermentation Products - Antibiotics, alcohol, enzymes, organic acids",
      "Downstream Processing - Filtration, centrifugation, extraction, drying",
      "Regulatory Affairs in Biotech Production - GMP, HACCP, biosafety, FDA/EMA compliance",
      "Sustainable and Green Fermentation - Biofuels, waste utilization, carbon efficiency",
      "Capstone Project - Design & scale-up of a fermentation-based process"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default FermentationTechnologyProgram;
