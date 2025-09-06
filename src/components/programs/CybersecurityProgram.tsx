import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const CybersecurityProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Cybersecurity",
    description: "Master the art of protecting digital assets and securing information systems. Learn ethical hacking, threat analysis, incident response, and security architecture to defend organizations against evolving cyber threats.",
    duration: "12 Months",
    overview: "The Master Program in Cybersecurity provides comprehensive training in protecting digital assets and securing information systems. Students master ethical hacking, network security, cryptography, incident response, and security architecture to defend organizations against sophisticated cyber threats.",
    careerOpportunities: [
      "Cybersecurity Analyst",
      "Penetration Tester",
      "Security Engineer",
      "Incident Response Specialist",
      "Security Architect",
      "Cybersecurity Consultant",
      "Threat Intelligence Analyst"
    ],
    keyAreas: [
      "Network Security & Defense",
      "Ethical Hacking & Penetration Testing",
      "Cryptography & Encryption",
      "Incident Response & Digital Forensics",
      "Security Architecture & Design",
      "Cyber Threat Intelligence",
      "Security Compliance & Governance"
    ],
    semester1: [
      "Cybersecurity Fundamentals - Threat landscape, attack vectors, security frameworks, risk assessment",
      "Network Security - Firewalls, IDS/IPS, VPNs, network monitoring, intrusion detection",
      "Ethical Hacking - Reconnaissance, scanning, enumeration, exploitation, post-exploitation",
      "Cryptography - Symmetric/asymmetric encryption, digital signatures, PKI, cryptographic protocols",
      "Operating System Security - Windows/Linux security, privilege escalation, system hardening"
    ],
    semester2: [
      "Advanced Penetration Testing - Web application security, wireless security, mobile security testing",
      "Digital Forensics - Evidence collection, analysis tools, incident investigation, legal considerations",
      "Incident Response - Security operations center, incident handling, malware analysis, threat hunting",
      "Security Architecture - Security design principles, zero-trust architecture, security controls",
      "Capstone Project - Comprehensive security assessment and incident response simulation"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default CybersecurityProgram;
