import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AgricultureDronesProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Agriculture Drone Technology",
    description: "Revolutionize farming through aerial technology. Blend drone engineering, remote sensing, AI, and data analytics to create intelligent agricultural systems. Apply UAVs in crop monitoring, spraying, and yield prediction.",
    duration: "12 Months",
    overview: "The Master's in Agriculture Drone Technology is an advanced postgraduate program designed to revolutionize farming through aerial technology. It blends drone engineering, remote sensing, AI, and data analytics to create intelligent agricultural systems. The course equips students with skills to apply UAVs in crop monitoring, spraying, and yield prediction — boosting productivity and sustainability.",
    careerOpportunities: [
      "Drone Pilot / Operator for Agriculture",
      "Precision Agriculture Consultant",
      "UAV Imaging and Survey Specialist",
      "Drone Data Analyst",
      "AgriTech Systems Developer",
      "Remote Sensing & GIS Analyst",
      "Agri-Robotics Engineer",
      "Government Drone Policy Advisor"
    ],
    keyAreas: [
      "Drone Engineering & Flight Systems",
      "UAV Mapping & Survey Techniques",
      "Remote Sensing & Crop Imaging",
      "Precision Farming & Smart Irrigation",
      "NDVI Analysis for Crop Health",
      "GIS & GPS Integration",
      "AI & Machine Learning in Drone Data",
      "Drone Laws and Compliance"
    ],
    semester1: [
      "Fundamentals of Drone Technology - Types of UAVs, drone mechanics, components, payloads, safety features",
      "Flight Dynamics and Control - Autopilot systems, telemetry, GPS navigation, mission planning",
      "Introduction to Precision Agriculture - Site-specific crop management, sensor-based agriculture, smart practices",
      "Aerial Imaging and Remote Sensing - Camera types, NDVI, orthomosaic generation, calibration techniques",
      "Drone Laws and Safety - DGCA/FAA guidelines, licensing, no-fly zones, airspace regulations",
      "Practical Lab I - Drone assembly, manual flying, simulator training, GPS flight testing"
    ],
    semester2: [
      "NDVI & Crop Monitoring - Vegetation indices, pest & disease detection, soil health visualization",
      "Drone Mapping & Surveying - 3D terrain mapping, contour creation, yield prediction, digital elevation models",
      "Drone Data Analytics - Data cleaning, AI/ML for crop classification, pattern recognition, dashboards",
      "IoT & Drone Integration - Sensor fusion, edge devices, automated irrigation alerts, cloud syncing",
      "Capstone Project - Industry-based research project solving a real-world agri-drone challenge",
      "Practical Lab II - Autonomous flying, multispectral imaging, spraying modules, advanced missions"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AgricultureDronesProgram;
