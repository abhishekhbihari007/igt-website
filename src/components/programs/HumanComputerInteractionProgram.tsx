import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const HumanComputerInteractionProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Human-Computer Interaction",
    description: "Design intuitive user experiences and interactive systems",
    duration: "2 Years (4 Semesters)",
    overview: "Our HCI Program focuses on designing user-friendly interfaces and interactive systems. Students learn user research, interface design, usability testing, and creating seamless human-computer interactions.",
    careerOpportunities: [
      "UX/UI Designer",
      "Interaction Designer",
      "User Experience Researcher",
      "Usability Specialist",
      "Product Designer",
      "HCI Researcher"
    ],
    keyAreas: [
      "User Experience Design",
      "Interface Design & Prototyping",
      "User Research & Testing",
      "Information Architecture",
      "Accessibility Design",
      "Interactive Systems"
    ],
    semester1: [
      "Introduction to HCI",
      "User Experience Fundamentals",
      "Design Principles",
      "User Research Methods",
      "Prototyping Tools",
      "Human Factors"
    ],
    semester2: [
      "Advanced UX Design",
      "Interface Design",
      "Usability Testing",
      "Accessibility Design",
      "Interactive Systems",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default HumanComputerInteractionProgram;
