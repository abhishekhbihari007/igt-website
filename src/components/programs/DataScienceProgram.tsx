import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const DataScienceProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Data Science",
    description: "Transform data into actionable insights with advanced analytics and machine learning",
    duration: "2 Years (4 Semesters)",
    overview: "Our Data Science Program equips students with the skills to extract meaningful insights from complex data sets. Students learn statistical analysis, machine learning, data visualization, and big data technologies to solve real-world problems.",
    careerOpportunities: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Data Engineer",
      "Quantitative Analyst"
    ],
    keyAreas: [
      "Statistical Analysis & Modeling",
      "Machine Learning Algorithms",
      "Data Visualization & Storytelling",
      "Big Data Technologies",
      "Database Management",
      "Predictive Analytics"
    ],
    semester1: [
      "Introduction to Data Science",
      "Statistics & Probability",
      "Programming for Data Science",
      "Data Wrangling & Cleaning",
      "Exploratory Data Analysis",
      "Database Fundamentals"
    ],
    semester2: [
      "Machine Learning Fundamentals",
      "Advanced Statistical Modeling",
      "Data Visualization Techniques",
      "Big Data Processing",
      "Predictive Analytics",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default DataScienceProgram;
