import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const VaccineTechnologyProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Vaccine Technology",
    description: "Develop life-saving vaccines and advance immunization science",
    duration: "2 Years (4 Semesters)",
    overview: "Our Vaccine Technology Program covers the development, production, and distribution of vaccines. Students learn immunology, vaccine design, manufacturing processes, and regulatory requirements for vaccine development.",
    careerOpportunities: [
      "Vaccine Development Scientist",
      "Immunology Researcher",
      "Vaccine Manufacturing Specialist",
      "Clinical Research Associate",
      "Regulatory Affairs Specialist",
      "Public Health Advisor"
    ],
    keyAreas: [
      "Immunology & Vaccine Science",
      "Vaccine Development & Design",
      "Manufacturing & Quality Control",
      "Clinical Trials & Safety",
      "Regulatory Compliance",
      "Public Health Applications"
    ],
    semester1: [
      "Introduction to Vaccine Technology",
      "Immunology Fundamentals",
      "Microbiology Basics",
      "Vaccine Development Principles",
      "Laboratory Safety",
      "Research Methods"
    ],
    semester2: [
      "Advanced Vaccine Development",
      "Manufacturing Processes",
      "Clinical Trial Design",
      "Quality Control Systems",
      "Regulatory Requirements",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default VaccineTechnologyProgram;
