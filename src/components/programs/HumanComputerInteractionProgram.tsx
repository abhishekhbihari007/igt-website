import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const HumanComputerInteractionProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Human-Computer Interaction (HCI)",
    description: "Blend computer science, psychology, cognitive science, and design. Create intuitive, accessible, and engaging user experiences across mobile, web, XR, and AI systems by understanding how humans interact with technology.",
    duration: "12 Months",
    overview: "The Master Program in Human-Computer Interaction (HCI) is an interdisciplinary course that blends computer science, psychology, cognitive science, and design. The program equips students to create intuitive, accessible, and engaging user experiences across mobile, web, XR, and AI systems by understanding how humans interact with technology.",
    careerOpportunities: [
      "UX/UI Designer",
      "Interaction Designer",
      "Usability Engineer",
      "HCI Researcher",
      "Human Factors Specialist",
      "Voice UI Designer",
      "Design Technologist"
    ],
    keyAreas: [
      "User-Centered Design & Usability Principles",
      "Cognitive Psychology & Human Perception",
      "Prototyping Tools (Figma, Adobe XD, etc.)",
      "Information Architecture & Accessibility",
      "Human-AI Interaction & Conversational Interfaces",
      "AR/VR Interface Design",
      "Design Thinking & User Research"
    ],
    semester1: [
      "Introduction to HCI - HCI principles, usability, interaction paradigms",
      "User-Centered Design - Personas, user journeys, prototyping, testing",
      "Cognitive Psychology - Memory, attention, perception, human error",
      "UX Tools & Wireframing - Figma, Adobe XD, paper prototyping, Balsamiq"
    ],
    semester2: [
      "Multimodal Interfaces - Touch, voice, gesture, eye tracking, haptics",
      "Human-AI Collaboration - Ethical AI, explainable UX, chatbots, feedback loops",
      "Accessibility & Inclusive Design - WCAG, ARIA, designing for all abilities",
      "Capstone HCI Project - UX case study, real-world research & redesign"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default HumanComputerInteractionProgram;
