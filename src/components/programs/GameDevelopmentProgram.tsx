import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const GameDevelopmentProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Game Development",
    description: "Create engaging games and interactive entertainment experiences",
    duration: "2 Years (4 Semesters)",
    overview: "Our Game Development Program covers the complete game development process from concept to deployment. Students learn game design, programming, 3D modeling, animation, and game engine development.",
    careerOpportunities: [
      "Game Developer",
      "Game Designer",
      "3D Game Artist",
      "Game Programmer",
      "Game Producer",
      "Game Quality Assurance Tester"
    ],
    keyAreas: [
      "Game Design & Mechanics",
      "Game Programming & Development",
      "3D Modeling & Animation",
      "Game Engine Development",
      "Game Audio & Visual Effects",
      "Game Testing & Quality Assurance"
    ],
    semester1: [
      "Introduction to Game Development",
      "Game Design Fundamentals",
      "Programming for Games",
      "3D Modeling Basics",
      "Game Engine Overview",
      "Basic Game Development"
    ],
    semester2: [
      "Advanced Game Programming",
      "3D Animation & Rigging",
      "Game Engine Development",
      "Game Audio & Effects",
      "Game Testing & QA",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default GameDevelopmentProgram;
