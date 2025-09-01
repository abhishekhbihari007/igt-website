import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const MedicalRoboticsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Medical Robotics",
    description: "Transform healthcare with robotic innovation through surgical robotics, rehabilitation systems, and medical automation",
    duration: "2 Years (4 Semesters)",
    overview: "This comprehensive program focuses on robotic applications in healthcare, surgery, and medical diagnostics. You'll learn to develop and implement robotic solutions for surgical procedures, rehabilitation systems, prosthetics, and healthcare technology integration.",
    careerOpportunities: [
      "Medical Robotics Engineer",
      "Surgical Robotics Specialist",
      "Healthcare Technology Consultant",
      "Medical Device Developer",
      "Robotics Research Scientist",
      "Clinical Robotics Coordinator"
    ],
    keyAreas: [
      "Surgical Robotics & Automation",
      "Rehabilitation Systems",
      "Medical Device Integration",
      "Healthcare Technology Management",
      "Robotic Surgery Techniques",
      "Medical Robotics Safety & Standards"
    ],
    semester1: [
      "Introduction to Medical Robotics",
      "Healthcare Technology Fundamentals",
      "Medical Device Design Principles",
      "Robotics in Surgery",
      "Medical Imaging & Navigation",
      "Healthcare Safety Standards"
    ],
    semester2: [
      "Advanced Surgical Robotics",
      "Rehabilitation Robotics Systems",
      "Medical Device Integration",
      "Robotic Surgery Techniques",
      "Healthcare Technology Management",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default MedicalRoboticsProgram;
