import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const MachineLearningProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Machine Learning",
    description: "Master algorithms and models that learn from data",
    duration: "2 Years (4 Semesters)",
    overview: "Our Machine Learning Program covers the development of algorithms and models that can learn from data. Students learn supervised and unsupervised learning, neural networks, deep learning, and real-world ML applications.",
    careerOpportunities: [
      "Machine Learning Engineer",
      "ML Research Scientist",
      "Data Scientist",
      "AI Engineer",
      "ML Product Manager",
      "ML Consultant"
    ],
    keyAreas: [
      "Supervised & Unsupervised Learning",
      "Neural Networks & Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "ML Model Deployment",
      "ML Ethics & Fairness"
    ],
    semester1: [
      "Introduction to Machine Learning",
      "Mathematics for ML",
      "Programming Fundamentals",
      "Data Preprocessing",
      "Supervised Learning",
      "Model Evaluation"
    ],
    semester2: [
      "Advanced ML Algorithms",
      "Deep Learning & Neural Networks",
      "Unsupervised Learning",
      "ML Model Deployment",
      "ML Ethics & Fairness",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default MachineLearningProgram;
