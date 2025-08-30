import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const VirtualAugmentedRealityEngineeringProgram: React.FC = () => {
  const programData = {
    title: "Virtual Vanguard: Master in Virtual & Augmented Reality Engineering",
    description: "Engineer advanced virtual and augmented systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge VR/AR solutions.",
    duration: "12 Months",
    overview: "Our Virtual & Augmented Reality Engineering program positions you as a Virtual Vanguard, engineering advanced VR/AR systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge solutions.",
    careerOpportunities: [
      "VR/AR Engineer",
      "Immersive Systems Developer",
      "Hardware Integration Specialist",
      "VR/AR Software Developer",
      "Immersive Technology Engineer"
    ],
    keyAreas: [
      "Hardware Integration",
      "Software Development",
      "User Interface Design",
      "VR/AR Systems Engineering",
      "Immersive Technology",
      "System Architecture"
    ],
    semester1: [
      "Introduction to VR/AR Engineering",
      "Hardware Fundamentals",
      "Software Development Basics",
      "User Interface Design",
      "VR/AR System Architecture",
      "Engineering Principles"
    ],
    semester2: [
      "Advanced Hardware Integration",
      "Software Development",
      "System Optimization",
      "User Experience Design",
      "VR/AR Applications",
      "Capstone Engineering Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default VirtualAugmentedRealityEngineeringProgram;
