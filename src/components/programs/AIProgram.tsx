import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Artificial Intelligence",
    description: "Master cutting-edge AI technologies and machine learning algorithms",
    duration: "2 Years (4 Semesters)",
    overview: "Our AI Program provides comprehensive training in artificial intelligence, machine learning, and deep learning technologies. Students learn to develop intelligent systems, implement AI algorithms, and create innovative solutions for real-world problems.",
    careerOpportunities: [
      "AI Engineer",
      "Machine Learning Specialist",
      "Data Scientist",
      "AI Research Analyst",
      "AI Product Manager",
      "AI Consultant"
    ],
    keyAreas: [
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "AI Ethics & Governance",
      "AI System Development"
    ],
    semester1: [
      "Introduction to Artificial Intelligence",
      "Mathematics for AI",
      "Programming Fundamentals",
      "Machine Learning Basics",
      "Data Structures & Algorithms",
      "Statistics for AI"
    ],
    semester2: [
      "Advanced Machine Learning",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "AI Ethics & Governance",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIProgram;
