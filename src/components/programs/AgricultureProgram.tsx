import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AgricultureProgram: React.FC = () => {
  const programData = {
    title: "Agriculture Technology Program",
    subtitle: "Transform traditional farming through cutting-edge technology and sustainable practices",
    introduction: [
      "Our Agriculture Technology Program is designed to revolutionize farming practices through the integration of modern technology, sustainable methods, and innovative agricultural solutions.",
      "Students will learn to implement precision agriculture techniques, utilize IoT sensors for crop monitoring, and develop smart farming systems that optimize resource usage and increase yields.",
      "The program covers advanced topics including drone technology for crop surveillance, automated irrigation systems, and data-driven decision making for agricultural operations.",
      "We emphasize sustainable farming practices, environmental conservation, and the development of eco-friendly agricultural solutions for the future.",
      "Our curriculum integrates traditional agricultural knowledge with cutting-edge technology, preparing students to lead the next generation of smart farming initiatives.",
      "Students will gain hands-on experience with real agricultural technology systems, working on actual farms and research facilities throughout their studies.",
      "The program includes specialized tracks in precision agriculture, agricultural robotics, and sustainable farming systems, allowing students to focus on their areas of interest.",
      "Graduates will be equipped to implement smart farming solutions, manage agricultural technology systems, and drive innovation in the agricultural sector."
    ],
    stats: {
      jobPlacement: "95%",
      industryPartners: "50+",
      duration: "12 Months",
      level: "Advanced"
    },
    features: [
      {
        icon: "fas fa-drone",
        title: "Drone Technology",
        description: "Learn to use drones for crop monitoring, mapping, and precision agriculture applications"
      },
      {
        icon: "fas fa-robot",
        title: "Agricultural Robotics",
        description: "Master automated farming systems and robotic solutions for modern agriculture"
      },
      {
        icon: "fas fa-leaf",
        title: "Sustainable Practices",
        description: "Develop eco-friendly farming methods and sustainable agricultural solutions"
      }
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Agricultural Science Fundamentals",
          "Soil Science and Management",
          "Plant Physiology and Growth",
          "Climate and Weather Patterns",
          "Agricultural Economics"
        ]
      },
      {
        title: "Technology Integration",
        topics: [
          "IoT in Agriculture",
          "Drone Technology for Farming",
          "GPS and GIS Applications",
          "Automated Irrigation Systems",
          "Smart Greenhouse Technology"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "Precision Agriculture",
          "Agricultural Robotics",
          "Data Analytics in Farming",
          "Sustainable Practices",
          "Future of Agriculture"
        ]
      }
    ],
    careers: [
      {
        icon: "fas fa-seedling",
        title: "Agricultural Technology Specialist",
        description: "Design and implement technology solutions for modern farming operations"
      },
      {
        icon: "fas fa-crosshairs",
        title: "Precision Agriculture Consultant",
        description: "Advise farmers on implementing precision agriculture techniques and technologies"
      },
      {
        icon: "fas fa-robot",
        title: "Smart Farming Manager",
        description: "Oversee automated farming systems and agricultural technology operations"
      }
    ],
    applyTitle: "Ready to Transform Agriculture?",
    applyDescription: "Join the next generation of agricultural innovators and shape the future of farming with cutting-edge technology."
  };

  return <ProgramTemplate programData={programData} />;
};

export default AgricultureProgram;
