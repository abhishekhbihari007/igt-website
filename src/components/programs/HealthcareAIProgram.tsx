import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const HealthcareAIProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Healthcare AI",
    description: "Transform healthcare with artificial intelligence and machine learning",
    duration: "2 Years (4 Semesters)",
    overview: "Our Healthcare AI Program combines artificial intelligence with healthcare to improve patient care, diagnosis, and treatment. Students learn AI applications in medical imaging, drug discovery, patient monitoring, and healthcare analytics.",
    careerOpportunities: [
      "Healthcare AI Engineer",
      "Medical AI Researcher",
      "Clinical Data Scientist",
      "AI Healthcare Consultant",
      "Medical Imaging AI Specialist",
      "Healthcare Technology Manager"
    ],
    keyAreas: [
      "AI in Medical Imaging",
      "Healthcare Data Analytics",
      "Drug Discovery AI",
      "Patient Monitoring Systems",
      "Clinical Decision Support",
      "Healthcare AI Ethics"
    ],
    semester1: [
      "Introduction to Healthcare AI",
      "Healthcare Fundamentals",
      "AI & Machine Learning Basics",
      "Medical Data Management",
      "Healthcare Systems",
      "AI Ethics in Healthcare"
    ],
    semester2: [
      "Advanced Healthcare AI",
      "Medical Imaging AI",
      "Clinical Decision Support",
      "Healthcare Analytics",
      "AI Implementation",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default HealthcareAIProgram;
