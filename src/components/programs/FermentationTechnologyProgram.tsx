import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const FermentationTechnologyProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Fermentation Technology",
    description: "Master the science and technology of industrial fermentation processes",
    duration: "2 Years (4 Semesters)",
    overview: "Our Fermentation Technology Program covers the scientific principles and industrial applications of fermentation processes. Students learn to design, operate, and optimize fermentation systems for food, pharmaceutical, and biofuel production.",
    careerOpportunities: [
      "Fermentation Engineer",
      "Biotechnology Specialist",
      "Food Technology Engineer",
      "Pharmaceutical Process Engineer",
      "Biofuel Production Specialist",
      "Quality Control Manager"
    ],
    keyAreas: [
      "Fermentation Science & Microbiology",
      "Industrial Fermentation Processes",
      "Bioreactor Design & Operation",
      "Downstream Processing",
      "Quality Control & Assurance",
      "Scale-up & Optimization"
    ],
    semester1: [
      "Introduction to Fermentation Technology",
      "Microbiology Fundamentals",
      "Biochemistry Basics",
      "Fermentation Kinetics",
      "Bioreactor Fundamentals",
      "Process Control Basics"
    ],
    semester2: [
      "Advanced Fermentation Processes",
      "Industrial Scale Operations",
      "Downstream Processing",
      "Quality Control Systems",
      "Process Optimization",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default FermentationTechnologyProgram;
