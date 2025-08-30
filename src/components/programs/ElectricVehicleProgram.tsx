import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const ElectricVehicleProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Electric Vehicle Technology",
    description: "Design and develop next-generation electric vehicles and charging systems",
    duration: "2 Years (4 Semesters)",
    overview: "Our Electric Vehicle Program covers the design, development, and implementation of electric vehicles and charging infrastructure. Students learn battery technology, electric motors, power electronics, and sustainable transportation solutions.",
    careerOpportunities: [
      "Electric Vehicle Engineer",
      "Battery Systems Engineer",
      "Charging Infrastructure Specialist",
      "Power Electronics Engineer",
      "EV Technology Consultant",
      "Sustainable Transportation Engineer"
    ],
    keyAreas: [
      "Battery Technology & Management",
      "Electric Motor Design",
      "Power Electronics & Control",
      "Charging Infrastructure",
      "Vehicle Integration",
      "Sustainable Transportation"
    ],
    semester1: [
      "Introduction to Electric Vehicles",
      "Battery Technology Fundamentals",
      "Electric Motor Basics",
      "Power Electronics",
      "Vehicle Dynamics",
      "Charging Systems"
    ],
    semester2: [
      "Advanced Battery Management",
      "Electric Motor Design",
      "Power Control Systems",
      "Charging Infrastructure",
      "Vehicle Integration",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default ElectricVehicleProgram;
