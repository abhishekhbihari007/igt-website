import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AgricultureRoboticsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Agriculture Robotics",
    description: "Apply robotics, AI, and automation to modern agriculture. Solve key farming challenges like labor shortages, crop monitoring, and smart harvesting through interdisciplinary robotics engineering.",
    duration: "12 Months",
    overview: "The Master's in Agriculture Robotics is an advanced program focused on applying robotics, AI, and automation to modern agriculture. This interdisciplinary course equips students with knowledge in mechanical systems, computer vision, automation, and machine learning to solve key challenges in farming such as labor shortages, crop monitoring, and smart harvesting.",
    careerOpportunities: [
      "Agricultural Robotics Engineer",
      "Autonomous Farm Equipment Developer",
      "AgriTech Research Scientist",
      "Precision Farming Technologist",
      "Embedded Systems Developer for Agriculture",
      "Drone & Robot Integration Specialist",
      "R&D Engineer in Agri Automation"
    ],
    keyAreas: [
      "Field Robotics & Autonomous Navigation",
      "AI & ML in Agricultural Systems",
      "Computer Vision for Crop Monitoring",
      "Sensor Fusion & Real-Time Control",
      "Mechanical Design for Agricultural Robots",
      "Embedded Systems & Microcontrollers",
      "Robotic Harvesting & Weeding Systems"
    ],
    semester1: [
      "Introduction to Robotics & Mechatronics - Actuators, sensors, microcontrollers, servo motors, kinematics",
      "Foundations of Agriculture Systems - Farming cycles, crop types, soil & irrigation systems, agri processes",
      "Embedded Systems & Arduino/Raspberry Pi - Microcontroller programming, sensor integration, real-time systems",
      "Computer Vision in Agriculture - Image processing, OpenCV, object detection, crop health monitoring",
      "Practical Lab I - Mini agri-robot prototype using Arduino, soil sensor projects"
    ],
    semester2: [
      "Autonomous Navigation and GPS Control - Path planning, GPS modules, RTK, LiDAR integration",
      "AI & Machine Learning for Robotics - Training models for classification, crop maturity, weed detection",
      "Robotic Harvesting & Seeding Systems - End effectors, robotic arms, precision seeding, depth control",
      "IoT for Smart Agriculture - Wireless networks, data transmission, sensor networks, cloud dashboards",
      "Capstone Project - Design and testing of a fully autonomous robot for crop monitoring or harvesting"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AgricultureRoboticsProgram;
