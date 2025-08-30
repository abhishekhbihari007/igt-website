import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AutonomousVehicleProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Autonomous Vehicle Technology",
    description: "Develop self-driving vehicles and advanced transportation systems",
    duration: "2 Years (4 Semesters)",
    overview: "Our Autonomous Vehicle Program covers the development of self-driving cars, drones, and transportation systems. Students learn computer vision, robotics, AI algorithms, and safety systems for autonomous vehicles.",
    careerOpportunities: [
      "Autonomous Vehicle Engineer",
      "Robotics Engineer",
      "Computer Vision Specialist",
      "Autonomous Systems Developer",
      "Safety Systems Engineer",
      "Transportation Technology Specialist"
    ],
    keyAreas: [
      "Computer Vision & Perception",
      "Robotics & Control Systems",
      "AI & Machine Learning",
      "Sensor Fusion & Localization",
      "Safety & Reliability Systems",
      "Autonomous Navigation"
    ],
    semester1: [
      "Introduction to Autonomous Vehicles",
      "Computer Vision Fundamentals",
      "Robotics Basics",
      "Sensor Technology",
      "Programming for Robotics",
      "Control Systems"
    ],
    semester2: [
      "Advanced Computer Vision",
      "Autonomous Navigation",
      "Safety Systems",
      "Sensor Fusion",
      "Real-time Systems",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AutonomousVehicleProgram;
