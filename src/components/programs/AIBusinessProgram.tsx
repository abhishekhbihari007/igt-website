import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIBusinessProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Business",
    description: "Blend artificial intelligence with strategic business applications. Lead organizations through data-driven decision-making, intelligent automation, customer analytics, and innovation-driven management in a rapidly evolving global economy.",
    duration: "12 Months",
    overview: "The Master Program in AI & Business is a future-focused degree that blends artificial intelligence with strategic business applications. It prepares professionals to lead organizations through data-driven decision-making, intelligent automation, customer analytics, and innovation-driven management in a rapidly evolving global economy.",
    careerOpportunities: [
      "AI Business Strategist",
      "AI Product Manager",
      "Data-Driven Marketing Manager",
      "Business Intelligence Analyst",
      "Operations Optimization Specialist",
      "AI Innovation Consultant",
      "Entrepreneur in AI Startups"
    ],
    keyAreas: [
      "AI-Powered Business Models",
      "Business Analytics & Visualization",
      "Customer Intelligence & Personalization",
      "Predictive Analytics & Forecasting",
      "AI in Marketing, Finance & HR",
      "Digital Transformation & Industry 4.0",
      "Ethics & Governance of Business AI"
    ],
    semester1: [
      "Principles of Artificial Intelligence - AI vs ML vs DL, supervised learning, business use-cases",
      "Business Intelligence & Dashboards - Power BI, Tableau, KPIs, real-time decision dashboards",
      "Statistics & Data Analytics - Regression, classification, forecasting models",
      "Python for Business Analytics - Pandas, NumPy, Seaborn, Plotly, Jupyter dashboards",
      "Lab I – AI-Driven Sales Analysis - Sales trend forecasting, churn prediction, product insights"
    ],
    semester2: [
      "AI in Marketing & Personalization - Recommendation systems, NLP in feedback, customer clustering",
      "AI in Financial Analytics - Credit scoring, fraud detection, portfolio prediction",
      "Digital Transformation & Innovation - Industry 4.0, automation, platform business models",
      "Ethics & Responsible AI in Business - Bias, transparency, governance of AI decision systems",
      "Capstone Project - Build a real-world AI application solving a business challenge"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIBusinessProgram;
