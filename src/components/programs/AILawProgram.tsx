import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AILawProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Law",
    description: "Blend artificial intelligence, machine learning, and legal studies. Use intelligent technologies for legal research, contract analysis, regulatory compliance, and judicial decision prediction in a digital world.",
    duration: "12 Months",
    overview: "The Master Program in AI & Law is a pioneering interdisciplinary course that blends artificial intelligence, machine learning, and legal studies. It trains students to use intelligent technologies for legal research, contract analysis, regulatory compliance, and judicial decision prediction, empowering them for modern legal challenges in a digital world.",
    careerOpportunities: [
      "Legal AI Consultant",
      "Technology & IP Law Specialist",
      "Compliance & Regulatory Analyst",
      "AI Policy and Ethics Advisor",
      "Legal Tech Product Manager",
      "Digital Forensics & Cyberlaw Analyst",
      "AI in Judicial Systems Researcher"
    ],
    keyAreas: [
      "AI in Legal Research & Document Review",
      "Natural Language Processing in Law",
      "Data Privacy, Cyber Law & Ethics",
      "Judicial Analytics and Sentencing Models",
      "Contracts Automation and Legal Chatbots",
      "AI Policy, Regulation, and Governance",
      "Blockchain & Smart Contracts in Legal Practice"
    ],
    semester1: [
      "Introduction to AI & Machine Learning - Supervised/unsupervised learning, legal use-cases",
      "Constitutional & Cyber Law - Privacy rights, IT Act, digital jurisdiction",
      "Legal Research Methods & AI Tools - Document search, AI-assisted case law review",
      "Natural Language Processing for Legal Texts - Text mining, summarization, keyword extraction",
      "Lab I – AI for Legal Document Analysis - Contract parsing, statute classification, case similarity"
    ],
    semester2: [
      "AI in Judicial Systems - Predictive justice, sentencing models, legal precedent analysis",
      "Blockchain, Smart Contracts & Evidence - Proof of record, decentralized law, admissibility",
      "Ethics & Governance in Legal AI - Bias mitigation, transparency, legal liability of AI",
      "AI Policy & International Regulation - GDPR, global AI frameworks, tech regulation trends",
      "Capstone Project - Legal AI prototype: chatbot, automation tool, or NLP system"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AILawProgram;
