import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const PrecisionAgricultureProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Precision Agriculture",
    description: "Advanced technology-driven agricultural practices for sustainable farming",
    duration: "2 Years (4 Semesters)",
    overview: "This comprehensive program combines cutting-edge technology with traditional agricultural knowledge to prepare students for the future of farming. You'll learn to use drones, sensors, AI, and data analytics to optimize crop production, reduce resource waste, and increase agricultural efficiency.",
    careerOpportunities: [
      "Precision Agriculture Specialist",
      "Agricultural Technology Consultant",
      "Farm Management Analyst",
      "Drone Technology Expert",
      "Agricultural Data Scientist",
      "Smart Farming Coordinator"
    ],
    keyAreas: [
      "Drone Technology & Remote Sensing",
      "Soil & Crop Monitoring Systems",
      "Data Analytics & AI in Agriculture",
      "Sustainable Resource Management",
      "Agricultural Robotics & Automation",
      "Climate-Smart Farming Practices"
    ],
    semester1: [
      "Introduction to Precision Agriculture",
      "Agricultural Technology Fundamentals",
      "Soil Science & Management",
      "Crop Physiology & Monitoring",
      "Basic Data Analysis for Agriculture",
      "Agricultural Drone Operations"
    ],
    semester2: [
      "Advanced Remote Sensing Techniques",
      "AI & Machine Learning in Agriculture",
      "Precision Irrigation Systems",
      "Crop Modeling & Prediction",
      "Agricultural Robotics & Automation",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default PrecisionAgricultureProgram;
