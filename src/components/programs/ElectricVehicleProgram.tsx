import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const ElectricVehicleProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Electric Vehicle (EV) Technology",
    description: "Lead innovations in the fast-growing EV sector. Cover fundamentals of EV architecture, battery systems, power electronics, drivetrain engineering, and charging infrastructure aligned with global trends toward cleaner mobility.",
    duration: "12 Months",
    overview: "The Master Program in Electric Vehicle Technology prepares students to lead innovations in the fast-growing EV sector. It covers the fundamentals of EV architecture, battery systems, power electronics, drivetrain engineering, and charging infrastructure. The curriculum is aligned with global trends toward cleaner mobility and smarter transportation systems.",
    careerOpportunities: [
      "EV Design Engineer",
      "Battery Systems Engineer",
      "Powertrain & Control Systems Developer",
      "EV Charging Infrastructure Specialist",
      "Automotive Embedded Systems Engineer",
      "Vehicle Testing & Validation Engineer",
      "R&D Engineer for Smart Mobility"
    ],
    keyAreas: [
      "Electric Vehicle Architecture & Components",
      "Battery Technology & BMS (Battery Management Systems)",
      "Power Electronics & Motor Drives",
      "Embedded Systems & Control Engineering",
      "Charging Infrastructure and Smart Grids",
      "Thermal Management Systems",
      "Vehicle Dynamics & Simulation"
    ],
    semester1: [
      "EV Fundamentals & Architecture - Types of EVs, subsystems, propulsion systems",
      "Battery Technology & Management - Li-ion cells, SOC, SOH, thermal control, safety",
      "Power Electronics & Motor Control - DC-DC converters, inverters, BLDC/AC motors",
      "Vehicle Dynamics & Simulation - EV modeling, simulation using MATLAB/Simulink"
    ],
    semester2: [
      "Embedded Systems for EVs - Microcontrollers, CAN protocols, real-time systems",
      "EV Charging Infrastructure - On-board/off-board charging, fast charging, V2G",
      "Thermal Systems & Energy Efficiency - Cooling techniques, thermal mapping, HVAC integration",
      "Capstone Project - Prototype development or system integration project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default ElectricVehicleProgram;
