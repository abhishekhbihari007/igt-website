import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const ARVRTechnologyProgram: React.FC = () => {
  const programData = {
    title: "EU ACC Master Program in AR & VR Technology",
    description: "Explore the Future of Immersive Technology through advanced augmented and virtual reality applications",
    duration: "2 Years (4 Semesters)",
    overview: "This comprehensive program focuses on immersive technologies including augmented reality, virtual reality, and mixed reality. You'll develop skills in 3D modeling, spatial computing, interactive design, and create engaging virtual experiences for various industries.",
    careerOpportunities: [
      "AR/VR Developer",
      "Immersive Technology Specialist",
      "3D Modeler & Designer",
      "Spatial Computing Engineer",
      "Interactive Experience Designer",
      "XR Technology Consultant"
    ],
    keyAreas: [
      "Augmented Reality Development",
      "Virtual Reality Applications",
      "3D Modeling & Design",
      "Spatial Computing",
      "Interactive Design",
      "Immersive Technology Integration"
    ],
    semester1: [
      "Introduction to AR/VR Technology",
      "3D Modeling Fundamentals",
      "Spatial Computing Basics",
      "Interactive Design Principles",
      "AR Development Tools",
      "VR Hardware & Software"
    ],
    semester2: [
      "Advanced AR Applications",
      "VR Experience Design",
      "Mixed Reality Development",
      "3D Asset Creation",
      "User Experience in XR",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default ARVRTechnologyProgram;
