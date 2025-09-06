import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIMarketingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Marketing",
    description: "Equip students with advanced knowledge in artificial intelligence and its strategic applications in marketing. From customer insights to predictive campaigns and marketing automation, lead with data and innovation.",
    duration: "12 Months",
    overview: "The Master Program in AI & Marketing is designed to equip students with advanced knowledge in artificial intelligence and its strategic applications in marketing. From customer insights to predictive campaigns and marketing automation, this program prepares future marketers to lead with data and innovation.",
    careerOpportunities: [
      "Marketing Data Scientist",
      "AI-Powered Brand Strategist",
      "Marketing Automation Manager",
      "Predictive Analytics Expert",
      "Customer Experience (CX) Analyst",
      "SEO/SEM Intelligence Specialist",
      "CRM & Loyalty Program Analyst"
    ],
    keyAreas: [
      "AI in Consumer Behavior & Market Analysis",
      "Personalized Marketing & Recommender Systems",
      "Marketing Automation & CRM Systems",
      "Social Media Analytics & Sentiment Mining",
      "AdTech, Search, and Content Optimization",
      "AI-Driven Campaign Forecasting & ROI",
      "Ethics & Privacy in Data-Driven Marketing"
    ],
    semester1: [
      "AI Fundamentals & Marketing Use Cases - Classification, clustering, regression for marketing",
      "Consumer Behavior & Data Analytics - Segmentation, buyer journeys, preference modeling",
      "Digital Marketing & AI Trends - SEO, programmatic ads, personalization engines",
      "Python & ML Tools for Marketers - Pandas, Seaborn, Scikit-learn, campaign simulations",
      "Lab I – Predictive Campaign Builder - Churn prediction, lead scoring, A/B test optimizer"
    ],
    semester2: [
      "Recommender Systems & Customer Journeys - Collaborative filtering, upsell/cross-sell modeling",
      "Marketing Automation Platforms - CRM, workflows, email triggers, personalization engines",
      "Social Media & Sentiment Analytics - NLP, brand reputation, real-time response bots",
      "ROI Modeling & Ad Performance Metrics - Attribution modeling, campaign ROI tracking, dashboards",
      "Capstone Project - Design and simulate an AI-driven multi-channel campaign"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIMarketingProgram;
