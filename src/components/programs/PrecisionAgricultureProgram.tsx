

import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const PrecisionAgricultureProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Precision Agriculture",
    description: "Interdisciplinary course aimed at modernizing farming practices using cutting-edge technology. Integrate data science, geospatial technology, sensors, and AI to enhance agricultural productivity, sustainability, and resource optimization.",
    duration: "12 Months",
    overview: "The Master's Program in Precision Agriculture is an interdisciplinary course aimed at modernizing farming practices using cutting-edge technology. The program integrates data science, geospatial technology, sensors, and AI to enhance agricultural productivity, sustainability, and resource optimization.",
    careerOpportunities: [
      "Precision Agriculture Specialist",
      "GIS Analyst in Agriculture",
      "AgriTech Consultant",
      "Remote Sensing Analyst",
      "IoT Application Engineer in Farming",
      "Crop Modeling and Forecasting Expert",
      "Farm Automation Engineer"
    ],
    keyAreas: [
      "Remote Sensing and GIS in Agriculture",
      "IoT and Sensor-Based Farming",
      "Soil Health Monitoring and Smart Irrigation",
      "Big Data and Machine Learning in AgriTech",
      "Drone Applications in Farming",
      "Sustainable Crop Management",
      "Agri-Robotics and Automation"
    ],
    semester1: [
      "Fundamentals of Precision Agriculture - Site-specific farming, yield mapping, sensor technologies, introduction to AgriTech",
      "GIS and Remote Sensing - Satellite imagery, crop classification, spatial data analysis, NDVI",
      "Soil and Water Management - Soil sensors, moisture analysis, smart irrigation systems, nutrient monitoring",
      "IoT in Agriculture - Sensor networks, wireless communication, Arduino/Raspberry Pi for agriculture",
      "Lab Work - Mapping & Monitoring Tools - QGIS, GPS devices, field data collection, mobile applications"
    ],
    semester2: [
      "Data Analytics for Agriculture - Big data tools, time-series forecasting, crop prediction models, dashboards",
      "Drone & Aerial Technologies - Drone mapping, image stitching, UAV regulations, precision spraying",
      "AI & Machine Learning in Farming - Crop disease detection, yield estimation, weed detection, smart classification",
      "Agri Robotics & Farm Automation - Autonomous tractors, seeding robots, automation in greenhouses",
      "Capstone Project - Field-based or simulated project solving a real-world precision agriculture problem"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default PrecisionAgricultureProgram;
