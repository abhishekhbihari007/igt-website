import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AgricultureDronesProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Agriculture Drones",
    description: "Train in drone piloting, imaging, and data analysis for agricultural applications. Master flight planning, multispectral imaging, and thermal sensing for crop health monitoring.",
    duration: "12 Months",
    overview: "Our comprehensive Agriculture Drones program equips you with the skills to operate and manage drone technology for modern farming. Learn advanced flight planning, multispectral imaging, thermal sensing, and data analysis techniques that revolutionize agricultural practices.",
    careerOpportunities: [
      "Drone Pilot for Agriculture",
      "Precision Agriculture Specialist",
      "Agricultural Data Analyst",
      "Drone Technology Consultant",
      "Crop Monitoring Specialist"
    ],
    keyAreas: [
      "Drone Flight Planning & Operations",
      "Multispectral Imaging & Analysis",
      "Thermal Sensing & Crop Health",
      "Agricultural Data Processing",
      "Drone Maintenance & Safety",
      "Regulatory Compliance"
    ],
    semester1: [
      "Introduction to Agricultural Drones",
      "Drone Flight Principles & Safety",
      "Basic Flight Planning & Operations",
      "Multispectral Camera Systems",
      "Thermal Imaging Fundamentals",
      "Agricultural Applications Overview"
    ],
    semester2: [
      "Advanced Flight Planning",
      "Data Collection & Processing",
      "Crop Health Analysis",
      "Precision Agriculture Integration",
      "Drone Maintenance & Troubleshooting",
      "Capstone Project Implementation"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AgricultureDronesProgram;
