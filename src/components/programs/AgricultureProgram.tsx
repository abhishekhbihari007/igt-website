import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AgricultureProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Agriculture Technology",
    description: "Transform traditional farming through cutting-edge technology and sustainable practices",
    duration: "2 Years (4 Semesters)",
    overview: "Our Agriculture Technology Program revolutionizes farming practices through modern technology integration, sustainable methods, and innovative agricultural solutions. Students learn precision agriculture techniques, IoT sensors for crop monitoring, and smart farming systems that optimize resource usage and increase yields.",
    careerOpportunities: [
      "Agricultural Technology Specialist",
      "Precision Agriculture Consultant",
      "Smart Farming Manager",
      "Agricultural Robotics Engineer",
      "Sustainable Farming Coordinator",
      "Agricultural Data Analyst"
    ],
    keyAreas: [
      "Drone Technology & Crop Monitoring",
      "IoT & Smart Farming Systems",
      "Agricultural Robotics & Automation",
      "Precision Agriculture Techniques",
      "Sustainable Farming Practices",
      "Agricultural Data Analytics"
    ],
    semester1: [
      "Agricultural Science Fundamentals",
      "Soil Science and Management",
      "Plant Physiology and Growth",
      "Climate and Weather Patterns",
      "Agricultural Economics Basics",
      "Introduction to Agricultural Technology"
    ],
    semester2: [
      "IoT in Agriculture",
      "Drone Technology for Farming",
      "GPS and GIS Applications",
      "Automated Irrigation Systems",
      "Smart Greenhouse Technology",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AgricultureProgram;

