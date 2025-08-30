import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const ARVRProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AR/VR Development",
    description: "Create immersive augmented and virtual reality experiences",
    duration: "2 Years (4 Semesters)",
    overview: "Our AR/VR Program covers the development of augmented and virtual reality applications. Students learn 3D modeling, game development, spatial computing, and creating immersive digital experiences.",
    careerOpportunities: [
      "AR/VR Developer",
      "3D Content Creator",
      "Immersive Experience Designer",
      "AR/VR Engineer",
      "Spatial Computing Specialist",
      "Virtual World Designer"
    ],
    keyAreas: [
      "Augmented Reality Development",
      "Virtual Reality Applications",
      "3D Modeling & Animation",
      "Spatial Computing",
      "Immersive Storytelling",
      "AR/VR Hardware Integration"
    ],
    semester1: [
      "Introduction to AR/VR",
      "3D Modeling Fundamentals",
      "Game Development Basics",
      "Programming for AR/VR",
      "Spatial Computing",
      "AR/VR Hardware Overview"
    ],
    semester2: [
      "Advanced AR Development",
      "VR Application Development",
      "3D Animation & Rigging",
      "Spatial Audio Design",
      "AR/VR User Experience",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default ARVRProgram;
