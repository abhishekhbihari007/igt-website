import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIManagementStudiesProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Management Studies",
    description: "Blend the power of Artificial Intelligence with strategic management principles. Drive innovation, make data-informed decisions, and lead organizations in an AI-first economy.",
    duration: "12 Months",
    overview: "The Master Program in AI & Management Studies is a unique interdisciplinary program that blends the power of Artificial Intelligence with strategic management principles. It equips students with the ability to drive innovation, make data-informed decisions, and lead organizations in an AI-first economy.",
    careerOpportunities: [
      "AI Strategy Manager",
      "Digital Transformation Leader",
      "Product & Innovation Consultant",
      "AI Business Analyst",
      "Operations & Automation Manager",
      "Management Consultant with AI Expertise",
      "Enterprise AI Solutions Architect"
    ],
    keyAreas: [
      "AI in Strategic Decision-Making",
      "Operations & Supply Chain Optimization",
      "HR Tech and Talent Analytics",
      "Marketing and Customer Intelligence",
      "Organizational Behavior & AI-Driven Change",
      "Leadership in the Age of AI",
      "Ethics, Governance & Risk Management in AI"
    ],
    semester1: [
      "Foundations of Artificial Intelligence - ML algorithms, AI tools, applications in business",
      "Principles of Management & Organizational Behavior - Leadership, culture, change, team dynamics",
      "Business Analytics and Decision Making - Data visualization, descriptive/predictive analytics",
      "AI for Marketing & Consumer Insights - Segmentation, personalization, NLP for reviews",
      "Lab I – AI for Business Intelligence - Dashboards, Tableau/Power BI, predictive KPIs"
    ],
    semester2: [
      "Strategic Management with AI - AI-driven strategies, market adaptation, global case studies",
      "AI in Human Resources & Talent Analytics - Recruitment automation, performance prediction, retention",
      "Operations & Supply Chain AI - Forecasting, route optimization, inventory management",
      "Ethical Leadership & Governance in AI - Responsible AI, regulatory frameworks, bias control",
      "Capstone Project - Real-world AI-based management solution or innovation strategy"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIManagementStudiesProgram;
