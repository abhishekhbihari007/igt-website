import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const HydroponicsFarmingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Hydroponics & Vertical Farming",
    description: "Learn sustainable farming techniques without soil in controlled environments",
    duration: "2 Years (4 Semesters)",
    overview: "Our Hydroponics & Vertical Farming Program revolutionizes agriculture through innovative soilless farming techniques and vertical growing systems. Students learn to implement hydroponic systems, utilize vertical farming technologies, and develop sustainable agricultural solutions for urban environments.",
    careerOpportunities: [
      "Hydroponic Farm Manager",
      "Urban Agriculture Specialist",
      "Agricultural Technology Consultant",
      "Vertical Farming Engineer",
      "Sustainable Agriculture Coordinator",
      "Hydroponic System Designer"
    ],
    keyAreas: [
      "Hydroponic Systems & Methods",
      "Vertical Farming Technologies",
      "Nutrient Solution Management",
      "Climate Control Systems",
      "Urban Agriculture Principles",
      "Automated Growing Systems"
    ],
    semester1: [
      "Plant Physiology Fundamentals",
      "Hydroponic System Types",
      "Nutrient Solution Basics",
      "Environmental Control Systems",
      "Urban Agriculture Principles",
      "Basic Hydroponic Operations"
    ],
    semester2: [
      "Advanced Nutrient Management",
      "Vertical Stacking Technologies",
      "Climate Control Technology",
      "Automation and IoT Systems",
      "Disease Prevention & Control",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default HydroponicsFarmingProgram;
