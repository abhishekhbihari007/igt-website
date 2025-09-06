import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIManagementCertificateProgram: React.FC = () => {
  const programData = {
    title: "EU ACC Certificate Program in AI & Management",
    description: "Lead the AI Revolution in Your Industry. Equip professionals with knowledge and skills to leverage AI technologies for business transformation.",
    duration: "1 Month (Sep 1-30, 2025)",
    overview: "The EU ACC Certificate Program in AI & Management equips professionals with knowledge and skills to leverage AI technologies for business transformation. This program provides a deep understanding of AI concepts, tools, and techniques, develops strategic management skills for AI technologies and projects, and fosters critical thinking and problem-solving skills for AI-driven solutions.",
    careerOpportunities: [
      "AI Strategy Manager",
      "Digital Transformation Leader",
      "AI Business Analyst",
      "Operations & Automation Manager",
      "Management Consultant with AI Expertise",
      "AI Innovation Consultant",
      "Enterprise AI Solutions Architect"
    ],
    keyAreas: [
      "AI Fundamentals and Applications in Business",
      "AI Strategy, Governance, and Ethics",
      "AI Project Management and Team Leadership",
      "AI Tools and Platforms (TensorFlow, PyTorch)",
      "AI in Marketing, Finance, HR, and Operations",
      "AI Ethics and Bias Mitigation",
      "AI Implementation and Change Management"
    ],
    semester1: [
      "Week 1: Introduction to AI and its History - Overview of AI concepts and applications, brief history of AI and its evolution",
      "Week 1: Machine Learning Fundamentals - Introduction to machine learning and its types, understanding machine learning algorithms and models",
      "Week 1: Deep Learning Fundamentals - Introduction to deep learning and its applications, understanding CNNs, RNNs, etc.",
      "Week 1: AI Tools and Platforms - TensorFlow, PyTorch, etc., hands-on experience",
      "Week 1: AI Applications in Business - Overview and case studies"
    ],
    semester2: [
      "Week 2: AI in Marketing and Sales - Overview and case studies",
      "Week 2: AI in Finance and Accounting - Overview and case studies",
      "Week 2: AI in Operations and Supply Chain - Overview and optimization case studies",
      "Week 2: AI in HR and Talent Management - Recruitment and development case studies",
      "Week 2: AI Ethics and Bias - Overview and mitigation"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIManagementCertificateProgram;
