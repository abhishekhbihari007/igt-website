import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AgricultureRoboticsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Agriculture Robotics",
    description: "Automate farming operations with cutting-edge robotics and AI technology",
    duration: "2 Years (4 Semesters)",
    overview: "Our Agriculture Robotics Program combines robotics engineering with agricultural science to create intelligent farming systems. Students learn to design, build, and program robots for planting, harvesting, monitoring, and maintaining crops.",
    careerOpportunities: [
      "Agricultural Robotics Engineer",
      "Automation Specialist",
      "Robotics System Designer",
      "Precision Agriculture Engineer",
      "Agricultural Technology Consultant",
      "Robotics Maintenance Technician"
    ],
    keyAreas: [
      "Robotics Engineering & Design",
      "Agricultural Automation Systems",
      "Computer Vision & AI",
      "Precision Agriculture Technology",
      "Sensor Integration",
      "Robotic Control Systems"
    ],
    semester1: [
      "Introduction to Agricultural Robotics",
      "Robotics Fundamentals",
      "Agricultural Science Basics",
      "Programming for Robotics",
      "Mechanical Design Principles",
      "Sensor Technology"
    ],
    semester2: [
      "Advanced Robotics Systems",
      "Computer Vision & AI",
      "Agricultural Automation",
      "Precision Agriculture",
      "Robotic Control Systems",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AgricultureRoboticsProgram;
