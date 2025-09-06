import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AdvancedTechnologiesAgricultureProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Advanced Technologies in Agriculture",
    description: "Equip yourself with modern tools and knowledge to transform traditional farming practices. Integrate precision farming, automation, AI, IoT, drone tech, and sustainable innovations to build the future of smart agriculture.",
    duration: "12 Months",
    overview: "The Master's Program in Advanced Technologies in Agriculture aims to equip students with modern tools and knowledge to transform traditional farming practices. It integrates precision farming, automation, AI, IoT, drone tech, and sustainable innovations to build the future of smart agriculture. Students gain hands-on experience with technologies shaping global agri-systems.",
    careerOpportunities: [
      "AgriTech Solution Architect",
      "Precision Agriculture Specialist",
      "AI/ML Expert in Farming Analytics",
      "Drone & IoT Integration Engineer",
      "Remote Sensing & GIS Analyst",
      "R&D Scientist in Sustainable AgTech",
      "Policy Advisor for Smart Agriculture"
    ],
    keyAreas: [
      "Smart Farming & Precision Agriculture",
      "Remote Sensing & Satellite Technologies",
      "IoT & Wireless Sensor Networks",
      "AI & Data Science for Agriculture",
      "Agri Drones and Robotics",
      "Climate-Smart Agriculture & Sustainability",
      "Agri Business Models & AgriTech Startups"
    ],
    semester1: [
      "Introduction to Smart Agriculture - Smart farms, automation, impact of emerging technologies",
      "Remote Sensing & GIS in Agriculture - Crop mapping, NDVI, multispectral data, decision support",
      "IoT for Agri Systems - Sensor networks, wireless data, real-time environment monitoring",
      "AI & ML Fundamentals - Prediction models, image classification, precision inputs",
      "Lab I – Smart Farm Setup - IoT deployment, mobile app integration, data visualization"
    ],
    semester2: [
      "Agri Drones & Robotics - UAV tech, robotic seeding/harvesting, automation in the field",
      "Big Data & Predictive Analytics - Cloud storage, pattern analysis, crop yield prediction models",
      "Sustainable & Climate-Smart Agriculture - Water use efficiency, carbon reduction, regenerative practices",
      "AgriTech Entrepreneurship - Startup building, innovation in food-tech, funding opportunities",
      "Capstone Project - Tech-enabled solution to real-life agriculture problem"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AdvancedTechnologiesAgricultureProgram;
