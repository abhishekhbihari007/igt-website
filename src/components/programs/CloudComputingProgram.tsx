import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const CloudComputingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Cloud Computing",
    description: "Master cloud infrastructure and scalable computing solutions",
    duration: "2 Years (4 Semesters)",
    overview: "Our Cloud Computing Program covers cloud infrastructure, platform services, and software solutions. Students learn AWS, Azure, Google Cloud, containerization, and building scalable cloud applications.",
    careerOpportunities: [
      "Cloud Engineer",
      "DevOps Engineer",
      "Cloud Solutions Architect",
      "Cloud Security Specialist",
      "Cloud Infrastructure Manager",
      "Cloud Consultant"
    ],
    keyAreas: [
      "Cloud Infrastructure & Services",
      "Cloud Security & Compliance",
      "Containerization & Orchestration",
      "Serverless Computing",
      "Cloud Migration & Strategy",
      "Multi-Cloud Management"
    ],
    semester1: [
      "Introduction to Cloud Computing",
      "Cloud Fundamentals",
      "Virtualization Technology",
      "Cloud Security Basics",
      "Programming for Cloud",
      "Basic Cloud Services"
    ],
    semester2: [
      "Advanced Cloud Services",
      "Containerization & Kubernetes",
      "Cloud Security & Compliance",
      "Serverless Computing",
      "Cloud Migration",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default CloudComputingProgram;
