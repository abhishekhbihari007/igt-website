import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const ARVRTechnologyProgram: React.FC = () => {
  const programData = {
    title: "EU ACC Master Program in AR/VR Technology",
    description: "Become an AR/VR Expert. Learn from experts of Google, IITs and top industries. Comprehensive program designed to equip students with skills and knowledge necessary to design, develop, and deploy cutting-edge applications for AR/VR platforms.",
    duration: "12 Months",
    overview: "The Master program in AR/VR is a comprehensive program designed to equip students with the skills and knowledge necessary to design, develop, and deploy cutting-edge applications for AR/VR platforms. This program combines theoretical foundations with practical skills, ensuring students are well-prepared for the industry with flexible learning hours, hands-on practice, portfolio building, and real-world internship opportunities.",
    careerOpportunities: [
      "Unreal Developer",
      "XR Developer",
      "3D Modeler",
      "UX Designer",
      "Simulation Engineer",
      "AR/VR Developer",
      "Immersive Technology Specialist"
    ],
    keyAreas: [
      "AR/VR Development",
      "3D Modeling & Animation",
      "User Experience Design",
      "Programming",
      "Project Management",
      "Hardware Understanding",
      "Industry Applications"
    ],
    semester1: [
      "Introduction to AR/VR - Overview of AR/VR technologies, history and evolution, current trends and applications",
      "3D Modeling and Animation - Fundamentals of 3D modeling, industry-standard 3D software (Blender), animation techniques and principles",
      "Programming for AR/VR - Introduction to programming languages (C#, Java, Python), game engines (Unity, Unreal Engine), AR/VR development frameworks and tools",
      "User Experience Design - Principles of UX design, designing intuitive and engaging user experiences, human-centered design approach",
      "AR/VR Development Fundamentals - Designing and developing immersive AR/VR experiences, understanding AR/VR hardware and physical structure"
    ],
    semester2: [
      "Advanced AR/VR Development - Advanced techniques for AR/VR development, integration with AI, ML, and other technologies, optimization and performance enhancement",
      "Project Management and Teamwork - Principles of project management, agile development methodologies, teamwork and collaboration in AR/VR development",
      "Specialized AR/VR Topics - Advanced 3D modeling and animation techniques, AR/VR for specific industries (healthcare, education), emerging trends and technologies in AR/VR",
      "Capstone Project - Development of a comprehensive AR/VR project, application of skills and knowledge gained throughout the program, portfolio development and presentation",
      "Internship and Industry Exposure - Real-world experience in AR/VR development, networking opportunities with industry professionals, application of theoretical knowledge in practical settings"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default ARVRTechnologyProgram;
