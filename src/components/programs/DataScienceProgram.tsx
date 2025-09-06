import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const DataScienceProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Data Analytics",
    description: "Extract actionable insights from data using advanced Artificial Intelligence techniques. Blend machine learning, statistical modeling, big data processing, and modern AI tools to build intelligent, data-driven systems.",
    duration: "12 Months",
    overview: "The Master Program in AI & Data Analytics is designed to empower students with the ability to extract actionable insights from data using advanced Artificial Intelligence techniques. It blends machine learning, statistical modeling, big data processing, and modern AI tools to build intelligent, data-driven systems and solutions.",
    careerOpportunities: [
      "Data Scientist / Machine Learning Engineer",
      "AI & Analytics Consultant",
      "Business Intelligence Analyst",
      "Big Data Engineer",
      "Data Visualization Expert",
      "Product Analyst / AI Product Manager",
      "Predictive Modeling Specialist"
    ],
    keyAreas: [
      "Machine Learning & Deep Learning",
      "Big Data Analytics & Cloud Platforms",
      "Data Mining & Data Warehousing",
      "Predictive Analytics & Forecasting",
      "Natural Language Processing",
      "Business Intelligence Tools & Dashboards",
      "Responsible AI and Ethics"
    ],
    semester1: [
      "Foundations of AI & ML - Supervised & unsupervised learning, neural networks, model training",
      "Data Mining & Warehousing - ETL processes, data marts, clustering & association techniques",
      "Statistics for Data Science - Probability, hypothesis testing, regression, inferential stats",
      "Python & Data Visualization - NumPy, Pandas, Matplotlib, Seaborn, Dash/Plotly",
      "Lab I – ML Models on Real-world Datasets - Hands-on with datasets in healthcare, agriculture, finance"
    ],
    semester2: [
      "Deep Learning & Neural Networks - CNNs, RNNs, LSTMs, model tuning, Keras/PyTorch",
      "Big Data Analytics - Hadoop, Spark, Hive, distributed data processing",
      "Natural Language Processing - Text classification, sentiment analysis, transformers",
      "AI Ethics & Explainability - Bias, fairness, transparency, model interpretability",
      "Capstone Project - End-to-end AI/Analytics solution to a real industry problem"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default DataScienceProgram;
