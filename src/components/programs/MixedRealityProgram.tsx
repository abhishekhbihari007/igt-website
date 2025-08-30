import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const MixedRealityProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Mixed Reality",
    description: "Create immersive mixed reality experiences and applications",
    duration: "2 Years (4 Semesters)",
    overview: "Our Mixed Reality Program covers the development of applications that blend virtual and real-world elements. Students learn AR/VR development, 3D modeling, spatial computing, and creating seamless mixed reality experiences.",
    careerOpportunities: [
      "Mixed Reality Developer",
      "AR/VR Developer",
      "3D Content Creator",
      "Spatial Computing Specialist",
      "Immersive Experience Designer",
      "MR Technology Consultant"
    ],
    keyAreas: [
      "Augmented Reality Development",
      "Virtual Reality Applications",
      "3D Content Creation",
      "Spatial Computing",
      "Mixed Reality Hardware",
      "Immersive Storytelling"
    ],
    semester1: [
      "Introduction to Mixed Reality",
      "AR/VR Fundamentals",
      "3D Modeling Basics",
      "Programming for MR",
      "Spatial Computing",
      "MR Hardware Overview"
    ],
    semester2: [
      "Advanced AR Development",
      "VR Application Development",
      "3D Animation & Rigging",
      "Spatial Audio Design",
      "MR User Experience",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default MixedRealityProgram;
