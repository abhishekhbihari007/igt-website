import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIMLAgricultureProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & ML in Agriculture",
    description: "Focus on data-driven approaches to improve productivity, predict outcomes, and automate tasks in agriculture. Leverage computer vision, predictive analytics, and intelligent systems to revolutionize smart farming, crop monitoring, soil diagnostics, and agri-supply chains.",
    duration: "12 Months",
    overview: "The Master's Program in Artificial Intelligence and Machine Learning in Agriculture focuses on data-driven approaches to improve productivity, predict outcomes, and automate tasks in the agriculture sector. By leveraging computer vision, predictive analytics, and intelligent systems, students will help revolutionize smart farming, crop monitoring, soil diagnostics, and agri-supply chains.",
    careerOpportunities: [
      "Agri Data Scientist / AI Engineer",
      "Crop Yield Prediction Analyst",
      "AgriTech Product Developer",
      "Remote Sensing & Image Analyst",
      "Farm Automation Expert",
      "AI Consultant for Agri Startups",
      "Government Policy Data Analyst"
    ],
    keyAreas: [
      "Computer Vision for Plant Disease Detection",
      "AI in Weather Forecasting & Yield Modeling",
      "Machine Learning for Soil & Crop Analysis",
      "Big Data Platforms (Hadoop, Spark)",
      "Satellite Imagery & Remote Sensing",
      "IoT & Sensor Integration with ML",
      "Deep Learning Models for Agri Robotics"
    ],
    semester1: [
      "Introduction to AI & ML - Supervised/unsupervised learning, regression, classification, clustering",
      "Data Analytics in Agriculture - Data cleaning, agri-datasets, visualization, Pandas/NumPy/Matplotlib",
      "Remote Sensing and GIS - NDVI, crop mapping, spectral data interpretation, satellite data",
      "Crop Disease Detection using Computer Vision - Image datasets, OpenCV, CNN models for leaf disease classification",
      "Practical Lab I - Python for ML, scikit-learn models, dataset preprocessing, accuracy tuning"
    ],
    semester2: [
      "Deep Learning for Yield & Weather Prediction - RNN, LSTM, time-series models, historical data training",
      "AI for Precision Farming - ML for fertilizer optimization, irrigation prediction, soil health tracking",
      "Agri IoT Systems and Sensor Networks - Real-time data from temperature, pH, moisture sensors; anomaly detection",
      "AI Ethics and Responsible Innovation - Bias in agri data, sustainable models, decision support systems",
      "Capstone Project - Full-cycle AI model development for a real-world agricultural problem"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIMLAgricultureProgram;
