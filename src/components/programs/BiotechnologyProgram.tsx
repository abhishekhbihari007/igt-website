import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const BiotechnologyProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Biotechnology",
    description: "Advance healthcare and industry through biological innovation",
    duration: "2 Years (4 Semesters)",
    overview: "Our Biotechnology Program covers the application of biological processes for industrial and medical purposes. Students learn genetic engineering, bioprocessing, pharmaceutical biotechnology, and sustainable biotech solutions.",
    careerOpportunities: [
      "Biotechnology Engineer",
      "Research Scientist",
      "Pharmaceutical Biotechnologist",
      "Biotech Product Developer",
      "Quality Control Specialist",
      "Biotech Consultant"
    ],
    keyAreas: [
      "Genetic Engineering & Genomics",
      "Bioprocessing & Fermentation",
      "Pharmaceutical Biotechnology",
      "Agricultural Biotechnology",
      "Biotech Quality Control",
      "Sustainable Biotech Solutions"
    ],
    semester1: [
      "Introduction to Biotechnology",
      "Molecular Biology",
      "Cell Biology",
      "Biochemistry Fundamentals",
      "Laboratory Techniques",
      "Biotech Safety"
    ],
    semester2: [
      "Advanced Genetic Engineering",
      "Bioprocessing Technology",
      "Pharmaceutical Applications",
      "Quality Control Systems",
      "Biotech Regulations",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default BiotechnologyProgram;
