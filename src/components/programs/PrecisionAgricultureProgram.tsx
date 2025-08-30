import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const PrecisionAgricultureProgram: React.FC = () => {
  const programData = {
    title: "Precision Agriculture Program",
    subtitle: "Master data-driven farming techniques using IoT, sensors, and AI for crop optimization",
    introduction: [
      "Our Precision Agriculture Program is designed to revolutionize farming practices through the integration of cutting-edge technology, data analytics, and sustainable agricultural methods.",
      "Students will learn to implement precision agriculture techniques, utilize IoT sensors for crop monitoring, and develop smart farming systems that optimize resource usage and increase yields.",
      "The program covers advanced topics including GPS mapping, variable rate technology, remote sensing, and data-driven decision making for agricultural operations.",
      "We emphasize sustainable farming practices, environmental conservation, and the development of eco-friendly agricultural solutions for the future.",
      "Our curriculum integrates traditional agricultural knowledge with modern technology, preparing students to lead the next generation of smart farming initiatives.",
      "Students will gain hands-on experience with real precision agriculture systems, working on actual farms and research facilities throughout their studies.",
      "The program includes specialized tracks in GPS technology, sensor systems, and data analytics, allowing students to focus on their areas of interest.",
      "Graduates will be equipped to implement precision farming solutions, manage agricultural technology systems, and drive innovation in the agricultural sector."
    ],
    stats: {
      jobPlacement: "95%",
      industryPartners: "50+",
      duration: "12 Months",
      level: "Advanced"
    },
    features: [
      {
        icon: "fas fa-satellite",
        title: "GPS & GIS Technology",
        description: "Master satellite navigation and geographic information systems for precision farming applications"
      },
      {
        icon: "fas fa-microchip",
        title: "Sensor Technology",
        description: "Learn to use advanced sensors for soil monitoring, weather prediction, and crop health assessment"
      },
      {
        icon: "fas fa-chart-line",
        title: "Data-Driven Farming",
        description: "Develop skills in agricultural data analytics and predictive modeling for optimal crop management"
      }
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Agricultural Science Fundamentals",
          "GPS & GIS Basics",
          "Sensor Technology Principles",
          "Data Collection Methods",
          "Mapping Fundamentals"
        ]
      },
      {
        title: "Precision Agriculture Core",
        topics: [
          "GPS Mapping Systems",
          "Variable Rate Technology",
          "Remote Sensing Applications",
          "Data Analysis Techniques",
          "Precision Equipment Operation"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "AI in Precision Agriculture",
          "Automated Farming Systems",
          "Sustainability Practices",
          "Economic Analysis",
          "Future Technologies"
        ]
      }
    ],
    careers: [
      {
        icon: "fas fa-seedling",
        title: "Precision Agriculture Specialist",
        description: "Design and implement precision farming solutions for modern agricultural operations"
      },
      {
        icon: "fas fa-crosshairs",
        title: "Agricultural Technology Consultant",
        description: "Advise farmers on implementing precision agriculture techniques and technologies"
      },
      {
        icon: "fas fa-map-marked-alt",
        title: "GIS Specialist",
        description: "Manage geographic information systems and spatial data for agricultural applications"
      }
    ],
    applyTitle: "Ready to Transform Agriculture?",
    applyDescription: "Join the next generation of precision agriculture innovators and shape the future of farming with cutting-edge technology."
  };

  return <ProgramTemplate programData={programData} />;
};

export default PrecisionAgricultureProgram;
