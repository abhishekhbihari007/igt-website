import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const DatabaseManagementProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Database Management",
    description: "Master database design, administration, and optimization",
    duration: "2 Years (4 Semesters)",
    overview: "Our Database Management Program covers database design, administration, optimization, and management. Students learn SQL, database architecture, data modeling, and database security for enterprise applications.",
    careerOpportunities: [
      "Database Administrator",
      "Database Developer",
      "Data Engineer",
      "Database Architect",
      "Data Analyst",
      "Database Security Specialist"
    ],
    keyAreas: [
      "Database Design & Architecture",
      "SQL & Database Programming",
      "Database Administration",
      "Data Modeling & Optimization",
      "Database Security",
      "Big Data Technologies"
    ],
    semester1: [
      "Introduction to Database Management",
      "Database Fundamentals",
      "SQL Programming",
      "Data Modeling",
      "Database Design",
      "Relational Database Theory"
    ],
    semester2: [
      "Advanced Database Administration",
      "Database Optimization",
      "Database Security",
      "Big Data Technologies",
      "Cloud Databases",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default DatabaseManagementProgram;
