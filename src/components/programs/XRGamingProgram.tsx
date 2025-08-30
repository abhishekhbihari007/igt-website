import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const XRGamingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in XR Gaming",
    description: "Create immersive gaming experiences with extended reality technology",
    duration: "2 Years (4 Semesters)",
    overview: "Our XR Gaming Program covers virtual reality, augmented reality, and mixed reality gaming development. Students learn 3D modeling, game design, VR/AR development, and immersive storytelling for next-generation gaming.",
    careerOpportunities: [
      "XR Game Developer",
      "VR/AR Developer",
      "3D Game Artist",
      "Game Designer",
      "XR Technology Specialist",
      "Immersive Experience Designer"
    ],
    keyAreas: [
      "Virtual Reality Development",
      "Augmented Reality Gaming",
      "3D Modeling & Animation",
      "Game Design & Mechanics",
      "XR Hardware Integration",
      "Immersive Storytelling"
    ],
    semester1: [
      "Introduction to XR Gaming",
      "Game Development Fundamentals",
      "3D Modeling Basics",
      "Programming for Games",
      "Game Design Principles",
      "XR Technology Overview"
    ],
    semester2: [
      "Advanced VR Development",
      "AR Gaming Applications",
      "3D Animation & Rigging",
      "Game Engine Integration",
      "XR User Experience",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default XRGamingProgram;
