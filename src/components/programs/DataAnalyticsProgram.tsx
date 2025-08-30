import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const DataAnalyticsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Data Analytics",
    description: "Transform raw data into actionable business insights",
    duration: "2 Years (4 Semesters)",
    overview: "Our Data Analytics Program teaches students to analyze complex data sets and extract meaningful insights. Students learn statistical analysis, data visualization, predictive modeling, and business intelligence tools.",
    careerOpportunities: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Visualization Specialist",
      "Predictive Analytics Expert",
      "Data Strategy Consultant",
      "Analytics Manager"
    ],
    keyAreas: [
      "Statistical Analysis & Modeling",
      "Data Visualization & Storytelling",
      "Predictive Analytics",
      "Business Intelligence",
      "Data Mining & Processing",
      "Analytics Tools & Platforms"
    ],
    semester1: [
      "Introduction to Data Analytics",
      "Statistics & Probability",
      "Data Management",
      "Programming for Analytics",
      "Data Visualization Basics",
      "Business Intelligence Tools"
    ],
    semester2: [
      "Advanced Statistical Analysis",
      "Predictive Modeling",
      "Data Mining Techniques",
      "Advanced Visualization",
      "Analytics Strategy",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default DataAnalyticsProgram;
