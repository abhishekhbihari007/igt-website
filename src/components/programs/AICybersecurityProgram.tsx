import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AICybersecurityProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Cybersecurity Systems",
    description: "Apply artificial intelligence techniques for detection, prevention, and response to modern cyber threats. Combine deep learning, anomaly detection, network security, ethical hacking, and secure AI deployment.",
    duration: "12 Months",
    overview: "The Master Program in AI & Cybersecurity Systems trains students to apply artificial intelligence techniques for the detection, prevention, and response to modern cyber threats. This program combines deep learning, anomaly detection, network security, ethical hacking, and secure AI deployment to prepare future-ready cybersecurity professionals.",
    careerOpportunities: [
      "Cybersecurity Analyst with AI specialization",
      "Security Data Scientist",
      "AI-Powered Threat Intelligence Engineer",
      "Cybersecurity Automation Architect",
      "Penetration Tester & Ethical Hacker",
      "AI Malware Detection Expert",
      "Cloud Security & Compliance Engineer"
    ],
    keyAreas: [
      "AI & Machine Learning for Cyber Threat Detection",
      "Network Security and Ethical Hacking",
      "Security Automation with AI",
      "Intrusion Detection & Prevention Systems (IDPS)",
      "Secure AI Development Practices",
      "Blockchain for Cybersecurity",
      "Cyber Forensics and Malware Analysis"
    ],
    semester1: [
      "Introduction to Cybersecurity - Threat types, attack vectors, CIA triad, security frameworks",
      "Machine Learning for Security - Anomaly detection, supervised learning, threat classification",
      "Network & Cloud Security - Firewalls, VPNs, IDS/IPS, cloud protection techniques",
      "Python for AI & Cybersecurity - Log parsing, packet analysis, building classifiers",
      "Lab I – AI-based Intrusion Detection - KDD dataset, classifier models, real-time alert systems"
    ],
    semester2: [
      "Deep Learning for Cyber Threats - RNNs for log analysis, malware image classification, neural IDS",
      "Cybersecurity Automation & AI Ops - SOAR tools, auto-response, bot detection & mitigation",
      "Cyber Forensics & Malware Analysis - Reverse engineering, ransomware behavior, AI-assisted triage",
      "Ethical Hacking & AI Ethics - Pen testing, red team AI, fairness & transparency in AI tools",
      "Capstone Project - AI-enabled cyber defense platform or real-time attack simulation"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AICybersecurityProgram;
