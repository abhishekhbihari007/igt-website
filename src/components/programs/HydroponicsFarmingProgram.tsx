import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const HydroponicsFarmingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Hydroponics & Vertical Farming",
    description: "Advanced interdisciplinary course focusing on sustainable and soil-less farming techniques. Explore integration of plant biology, environmental control, automation, and agribusiness in vertical growing environments for urban agriculture and food security.",
    duration: "12 Months",
    overview: "The Master's Program in Hydroponics & Vertical Farming is an advanced interdisciplinary course that focuses on sustainable and soil-less farming techniques. It explores the integration of plant biology, environmental control, automation, and agribusiness in vertical growing environments. The program empowers students to lead innovation in urban agriculture, food security, and controlled-environment farming systems.",
    careerOpportunities: [
      "Hydroponics Specialist / Agronomist",
      "Urban Farming Consultant",
      "Vertical Farm Manager",
      "Greenhouse Automation Engineer",
      "Climate-Control Technician",
      "AgriTech Product Designer",
      "Agro-Entrepreneur in Smart Farming",
      "R&D Scientist in Sustainable Agriculture"
    ],
    keyAreas: [
      "Soilless Cultivation Techniques (NFT, DWC, Aeroponics)",
      "Plant Physiology and Nutrient Management",
      "Climate Control Systems & Sensor Technologies",
      "Automation & IoT in Greenhouses",
      "LED Lighting and Photobiology",
      "Water Recycling & Sustainable Practices",
      "Agri-Business Models for Urban Farming"
    ],
    semester1: [
      "Introduction to Controlled Environment Agriculture (CEA) - Types of vertical farms, urban agriculture, indoor farming advantages",
      "Hydroponic Systems & Techniques - Deep water culture (DWC), nutrient film technique (NFT), aeroponics",
      "Plant Nutrition & Root-Zone Management - Macro/micronutrients, EC & pH balance, fertigation",
      "Lighting and Energy Efficiency - Grow light spectra, photoperiodism, LED lighting systems",
      "Lab I – Hydroponic Setup - Hands-on with NFT/DWC systems, nutrient mix preparation, pH monitoring"
    ],
    semester2: [
      "Automation and IoT in Vertical Farming - Sensor integration, remote monitoring, cloud-based farm control",
      "Climate Control & Environmental Management - Humidity, CO2, temperature, air circulation, smart greenhouse design",
      "Integrated Pest Management - Biological control, organic solutions, early detection via sensors",
      "Urban Farming Business Models - Feasibility studies, ROI analysis, market access, agri-startups",
      "Capstone Project - Designing a sustainable hydroponic vertical farm model with automation"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default HydroponicsFarmingProgram;
