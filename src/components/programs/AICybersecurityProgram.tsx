import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AICybersecurityProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI Cybersecurity",
    description: "Protect systems using artificial intelligence and advanced security techniques",
    duration: "2 Years (4 Semesters)",
    overview: "Our AI Cybersecurity Program combines artificial intelligence with cybersecurity to create intelligent defense systems. Students learn AI-powered threat detection, automated security responses, and advanced cybersecurity techniques.",
    careerOpportunities: [
      "AI Cybersecurity Engineer",
      "Security AI Specialist",
      "Threat Intelligence Analyst",
      "AI Security Researcher",
      "Cybersecurity Architect",
      "Security Automation Engineer"
    ],
    keyAreas: [
      "AI-Powered Threat Detection",
      "Machine Learning Security",
      "Automated Security Response",
      "Cybersecurity Fundamentals",
      "AI Security Ethics",
      "Advanced Security Analytics"
    ],
    semester1: [
      "Introduction to AI Cybersecurity",
      "Cybersecurity Fundamentals",
      "AI & Machine Learning Basics",
      "Network Security",
      "Programming for Security",
      "Security Tools & Techniques"
    ],
    semester2: [
      "AI-Powered Security Systems",
      "Advanced Threat Detection",
      "Security Automation",
      "AI Security Ethics",
      "Incident Response AI",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AICybersecurityProgram;
