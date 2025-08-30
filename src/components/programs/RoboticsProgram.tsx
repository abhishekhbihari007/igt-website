import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const RoboticsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Robotics Engineering",
    description: "Design and build intelligent robotic systems",
    duration: "2 Years (4 Semesters)",
    overview: "Our Robotics Program covers the design, development, and control of robotic systems. Students learn mechanical design, electronics, programming, control systems, and artificial intelligence for robotics.",
    careerOpportunities: [
      "Robotics Engineer",
      "Automation Engineer",
      "Control Systems Engineer",
      "Robotics Software Developer",
      "Robotics Research Scientist",
      "Robotics Consultant"
    ],
    keyAreas: [
      "Mechanical Design & Robotics",
      "Electronics & Control Systems",
      "Robotics Programming",
      "Artificial Intelligence in Robotics",
      "Robot Kinematics & Dynamics",
      "Robotics Applications"
    ],
    semester1: [
      "Introduction to Robotics",
      "Mechanical Design Fundamentals",
      "Electronics Basics",
      "Programming for Robotics",
      "Control Systems",
      "Basic Robotics Applications"
    ],
    semester2: [
      "Advanced Robotics Design",
      "Control Systems Engineering",
      "AI in Robotics",
      "Robot Kinematics",
      "Robotics Applications",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default RoboticsProgram;
