import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const HydroponicsFarmingProgram: React.FC = () => {
  const programData = {
    title: "Hydroponics & Vertical Farming Program",
    subtitle: "Learn sustainable farming techniques without soil in controlled environments",
    introduction: [
      "Our Hydroponics & Vertical Farming Program is designed to revolutionize agriculture through innovative soilless farming techniques and vertical growing systems.",
      "Students will learn to implement hydroponic systems, utilize vertical farming technologies, and develop sustainable agricultural solutions for urban environments.",
      "The program covers advanced topics including nutrient solution management, climate control systems, vertical stacking technologies, and automated growing systems.",
      "We emphasize sustainable farming practices, water conservation, and the development of eco-friendly agricultural solutions for the future.",
      "Our curriculum integrates traditional agricultural knowledge with cutting-edge hydroponic technology, preparing students to lead the next generation of urban farming initiatives.",
      "Students will gain hands-on experience with real hydroponic systems, working on actual vertical farms and research facilities throughout their studies.",
      "The program includes specialized tracks in hydroponic systems, vertical farming technology, and urban agriculture, allowing students to focus on their areas of interest.",
      "Graduates will be equipped to implement hydroponic farming solutions, manage vertical farming operations, and drive innovation in the urban agriculture sector."
    ],
    stats: {
      jobPlacement: "92%",
      industryPartners: "45+",
      duration: "12 Months",
      level: "Advanced"
    },
    features: [
      {
        icon: "fas fa-leaf",
        title: "Hydroponic Systems",
        description: "Master various hydroponic growing methods including NFT, DWC, and aeroponics for optimal plant growth"
      },
      {
        icon: "fas fa-arrow-up",
        title: "Vertical Farming",
        description: "Learn vertical stacking technologies and space optimization for urban agricultural operations"
      },
      {
        icon: "fas fa-tint",
        title: "Nutrient Management",
        description: "Develop expertise in nutrient solution formulation and pH management for hydroponic crops"
      }
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Plant Physiology Fundamentals",
          "Hydroponic System Types",
          "Nutrient Solution Basics",
          "Environmental Control",
          "Urban Agriculture Principles"
        ]
      },
      {
        title: "Advanced Hydroponics",
        topics: [
          "Nutrient Solution Management",
          "pH and EC Control",
          "Disease Prevention",
          "Crop Selection",
          "System Maintenance"
        ]
      },
      {
        title: "Vertical Farming Technology",
        topics: [
          "Vertical Stacking Systems",
          "Climate Control Technology",
          "Automation and IoT",
          "Energy Efficiency",
          "Future Technologies"
        ]
      }
    ],
    careers: [
      {
        icon: "fas fa-seedling",
        title: "Hydroponic Farm Manager",
        description: "Oversee hydroponic farming operations and manage vertical farming facilities"
      },
      {
        icon: "fas fa-building",
        title: "Urban Agriculture Specialist",
        description: "Design and implement urban farming solutions for city environments"
      },
      {
        icon: "fas fa-cogs",
        title: "Agricultural Technology Consultant",
        description: "Advise on hydroponic system implementation and vertical farming technologies"
      }
    ],
    applyTitle: "Ready to Grow the Future?",
    applyDescription: "Join the next generation of urban agriculture innovators and shape the future of sustainable farming with cutting-edge hydroponic technology."
  };

  return <ProgramTemplate programData={programData} />;
};

export default HydroponicsFarmingProgram;
