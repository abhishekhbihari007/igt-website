import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const WebDevelopmentProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Web Development",
    description: "Build modern, responsive websites and web applications",
    duration: "2 Years (4 Semesters)",
    overview: "Our Web Development Program covers full-stack web development including frontend, backend, and database technologies. Students learn HTML, CSS, JavaScript, modern frameworks, and web application deployment.",
    careerOpportunities: [
      "Full-Stack Web Developer",
      "Frontend Developer",
      "Backend Developer",
      "Web Application Developer",
      "Web UI/UX Developer",
      "Web Development Consultant"
    ],
    keyAreas: [
      "Frontend Development (HTML, CSS, JavaScript)",
      "Backend Development & APIs",
      "Database Design & Management",
      "Modern Web Frameworks",
      "Web Security & Performance",
      "Web Application Deployment"
    ],
    semester1: [
      "Introduction to Web Development",
      "HTML & CSS Fundamentals",
      "JavaScript Programming",
      "Web Design Principles",
      "Basic Backend Concepts",
      "Web Development Tools"
    ],
    semester2: [
      "Advanced Frontend Development",
      "Backend Development",
      "Database Integration",
      "Web Security",
      "Web Application Deployment",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default WebDevelopmentProgram;
