import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const GameDevelopmentProgram: React.FC = () => {
  const programData = {
    title: "Game Changer: Master Program in XR Gaming",
    description: "Designed for the next generation of game developers who want to build highly interactive, immersive experiences. Blend advanced XR technology with core game design principles, offering hands-on experience in developing cutting-edge AR/VR/XR games.",
    duration: "12 Months",
    overview: "The Game Changer Master Program in XR Gaming is designed for the next generation of game developers who want to build highly interactive, immersive experiences. The curriculum blends advanced XR technology with core game design principles, offering hands-on experience in developing cutting-edge AR/VR/XR games using Unity, Unreal Engine, and WebXR.",
    careerOpportunities: [
      "XR Game Developer",
      "VR/AR Level Designer",
      "Interaction & Gameplay Programmer",
      "Multiplayer Game Architect",
      "XR Technical Artist",
      "Metaverse Game Developer",
      "Immersive Environment Designer"
    ],
    keyAreas: [
      "XR Game Engines (Unity, Unreal)",
      "Immersive Game Design Principles",
      "AR/VR Interaction Mechanics",
      "Multiplayer Systems in XR",
      "3D Asset Integration and Optimization",
      "Gamification & User Engagement",
      "Performance Optimization in XR Games"
    ],
    semester1: [
      "Introduction to Game Design - Gameplay loops, mechanics, storytelling in games",
      "Unity Game Development - C# scripting, 3D environments, physics engines",
      "VR Interaction & Gameplay - Gaze, gesture, haptic feedback, locomotion systems",
      "3D Art & Animation for Games - Asset pipelines, animation states, rigging basics"
    ],
    semester2: [
      "Multiplayer Game Architecture - Networking, Photon, voice chat, synchronization",
      "Unreal Engine for XR Games - Blueprints, material systems, cinematic gameplay",
      "WebXR & Cross-Platform Deployment - WebGL, Babylon.js, browser-based XR games",
      "Capstone XR Game Project - Complete development and pitch of a game prototype"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default GameDevelopmentProgram;
