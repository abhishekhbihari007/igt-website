import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const IoTProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Internet of Things",
    description: "Connect and control smart devices in the digital world",
    duration: "2 Years (4 Semesters)",
    overview: "Our IoT Program covers the development of connected devices and smart systems. Students learn sensor technology, embedded systems, cloud computing, data analytics, and creating intelligent IoT solutions.",
    careerOpportunities: [
      "IoT Engineer",
      "Embedded Systems Developer",
      "IoT Solutions Architect",
      "Smart Device Developer",
      "IoT Data Analyst",
      "IoT Security Specialist"
    ],
    keyAreas: [
      "Embedded Systems & Sensors",
      "IoT Connectivity & Protocols",
      "Cloud Computing & IoT",
      "IoT Data Analytics",
      "IoT Security & Privacy",
      "Smart Device Development"
    ],
    semester1: [
      "Introduction to Internet of Things",
      "Embedded Systems Basics",
      "Sensor Technology",
      "IoT Connectivity",
      "Programming for IoT",
      "Basic IoT Applications"
    ],
    semester2: [
      "Advanced IoT Development",
      "Cloud IoT Integration",
      "IoT Data Analytics",
      "IoT Security",
      "Smart Device Development",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default IoTProgram;
