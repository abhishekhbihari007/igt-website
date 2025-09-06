import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIBiologicalSciencesProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Biological Sciences",
    description: "Bridge artificial intelligence with life sciences. Train in using AI tools to explore complex biological data, analyze genetic sequences, model protein structures, and accelerate biomedical research and biotechnology innovations.",
    duration: "12 Months",
    overview: "The Master Program in AI & Biological Sciences is a cutting-edge interdisciplinary program that bridges artificial intelligence with life sciences. It is designed to train students in using AI tools to explore complex biological data, analyze genetic sequences, model protein structures, and accelerate biomedical research and biotechnology innovations.",
    careerOpportunities: [
      "Bioinformatics Analyst",
      "AI in Drug Discovery Engineer",
      "Biomedical Data Scientist",
      "Genomics & Precision Medicine Specialist",
      "Computational Biologist",
      "AI/ML Researcher in Life Sciences",
      "Healthcare Innovation Consultant"
    ],
    keyAreas: [
      "Bioinformatics and Genomic Data Analysis",
      "Machine Learning for Biomedical Applications",
      "AI for Drug Discovery and Disease Prediction",
      "Systems Biology and Network Modeling",
      "Protein Structure Prediction & Molecular Simulations",
      "Medical Imaging and AI Diagnostics",
      "Ethical AI in Healthcare and Biosciences"
    ],
    semester1: [
      "Foundations of Biological Sciences - Cell biology, molecular biology, genetics basics",
      "Introduction to Bioinformatics - Genomic data formats, BLAST, sequence alignment",
      "Machine Learning Fundamentals - Classification, clustering, supervised/unsupervised ML",
      "Python for Data Science - Pandas, Biopython, NumPy, visualization libraries",
      "Lab I – Genomic Data Analysis - DNA sequence classification, gene prediction models"
    ],
    semester2: [
      "AI in Drug Discovery - Ligand-receptor modeling, QSAR, virtual screening",
      "Systems Biology and Network Analysis - Gene/protein interaction networks, pathways modeling",
      "Medical Image Analysis - MRI/CT scans, image segmentation, CNNs for diagnostics",
      "AI Ethics in Life Sciences - Data privacy, informed consent, clinical AI safety",
      "Capstone Project - AI model development for biological or healthcare problem"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIBiologicalSciencesProgram;
