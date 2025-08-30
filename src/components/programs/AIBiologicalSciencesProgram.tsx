import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIBiologicalSciencesProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Biological Sciences",
    description: "Apply AI to biological research, drug discovery, and genetic analysis. Master bioinformatics algorithms, protein structure prediction, and AI-driven drug screening for pharmaceutical development.",
    duration: "12 Months",
    overview: "Our AI & Biological Sciences program combines artificial intelligence with biological research to accelerate drug discovery and genetic analysis. Learn bioinformatics algorithms, protein structure prediction, and AI-driven drug screening techniques that are revolutionizing pharmaceutical development.",
    careerOpportunities: [
      "Bioinformatics Specialist",
      "AI Drug Discovery Researcher",
      "Computational Biologist",
      "Pharmaceutical AI Developer",
      "Genetic Data Analyst"
    ],
    keyAreas: [
      "Bioinformatics Algorithms",
      "Protein Structure Prediction",
      "AI-Driven Drug Screening",
      "Genetic Data Analysis",
      "Machine Learning in Biology",
      "Computational Drug Design"
    ],
    semester1: [
      "Introduction to AI in Biology",
      "Bioinformatics Fundamentals",
      "Machine Learning for Biology",
      "Protein Structure Analysis",
      "Genetic Data Processing",
      "AI Tools in Research"
    ],
    semester2: [
      "Advanced Bioinformatics",
      "Drug Discovery Algorithms",
      "Protein Folding Prediction",
      "AI Drug Screening",
      "Computational Biology",
      "Capstone Research Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIBiologicalSciencesProgram;
