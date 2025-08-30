import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const NetworkEngineeringProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Network Engineering",
    description: "Design, build, and maintain robust network infrastructure",
    duration: "2 Years (4 Semesters)",
    overview: "Our Network Engineering Program covers the design, implementation, and management of computer networks. Students learn network protocols, security, wireless technologies, and cloud networking for enterprise environments.",
    careerOpportunities: [
      "Network Engineer",
      "Network Administrator",
      "Network Security Specialist",
      "Cloud Network Engineer",
      "Network Architect",
      "IT Infrastructure Manager"
    ],
    keyAreas: [
      "Network Design & Architecture",
      "Network Protocols & Standards",
      "Network Security & Firewalls",
      "Wireless & Mobile Networks",
      "Cloud Networking",
      "Network Management & Monitoring"
    ],
    semester1: [
      "Introduction to Network Engineering",
      "Network Fundamentals",
      "Network Protocols",
      "Network Security Basics",
      "Network Design Principles",
      "Basic Network Administration"
    ],
    semester2: [
      "Advanced Network Design",
      "Network Security & Firewalls",
      "Wireless Networks",
      "Cloud Networking",
      "Network Management",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default NetworkEngineeringProgram;
