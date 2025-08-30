import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const SoftwareEngineeringProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Software Engineering",
    description: "Build robust, scalable software systems and applications",
    duration: "2 Years (4 Semesters)",
    overview: "Our Software Engineering Program covers the complete software development lifecycle, from design to deployment. Students learn programming, software architecture, testing, DevOps, and best practices for building quality software.",
    careerOpportunities: [
      "Software Engineer",
      "Full-Stack Developer",
      "Software Architect",
      "DevOps Engineer",
      "Quality Assurance Engineer",
      "Technical Lead"
    ],
    keyAreas: [
      "Software Development Lifecycle",
      "Programming & Algorithms",
      "Software Architecture & Design",
      "Testing & Quality Assurance",
      "DevOps & Deployment",
      "Software Project Management"
    ],
    semester1: [
      "Introduction to Software Engineering",
      "Programming Fundamentals",
      "Data Structures & Algorithms",
      "Software Design Principles",
      "Version Control Systems",
      "Basic Testing Methods"
    ],
    semester2: [
      "Advanced Programming",
      "Software Architecture",
      "Database Design",
      "Testing & Quality Assurance",
      "DevOps Practices",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default SoftwareEngineeringProgram;
