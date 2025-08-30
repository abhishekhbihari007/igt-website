import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const ARVRXRDevelopmentProgram: React.FC = () => {
  const programData = {
    title: "Reality Architect: Master of AR/VR/XR Development",
    description: "Design and develop cutting-edge augmented, virtual, and extended reality experiences. Master 3D modeling, programming, and UX design for immersive technologies.",
    duration: "12 Months",
    overview: "Our comprehensive AR/VR/XR Development program equips you with the skills to create immersive digital experiences. Learn 3D modeling, programming for game engines, user experience design, and development frameworks that power the future of interactive technology.",
    careerOpportunities: [
      "AR/VR Developer",
      "3D Modeler & Animator",
      "UX Designer for Immersive Tech",
      "Game Engine Programmer",
      "XR Experience Designer"
    ],
    keyAreas: [
      "3D Modeling & Animation",
      "Programming for AR/VR",
      "User Experience Design",
      "Game Engine Development",
      "AR/VR Hardware Integration",
      "Immersive Content Creation"
    ],
    semester1: [
      "Introduction to AR/VR Technologies",
      "3D Modeling Fundamentals",
      "Programming for Immersive Tech",
      "User Experience Design Principles",
      "AR/VR Development Frameworks"
    ],
    semester2: [
      "Advanced 3D Animation",
      "Game Engine Programming",
      "AR/VR Hardware & Sensors",
      "Immersive Content Creation",
      "Capstone Project Development"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default ARVRXRDevelopmentProgram;
