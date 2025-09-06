import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const DigitalForensicsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Digital Forensics",
    description: "Equip students with technical skills and investigative knowledge required to examine and analyze digital devices, systems, and networks. Detect, collect, and preserve digital evidence to support legal or cybersecurity cases.",
    duration: "12 Months",
    overview: "The Master Program in Digital Forensics equips students with the technical skills and investigative knowledge required to examine and analyze digital devices, systems, and networks. This program prepares students to detect, collect, and preserve digital evidence to support legal or cybersecurity cases, ensuring justice and organizational security in the digital era.",
    careerOpportunities: [
      "Digital Forensics Investigator",
      "Cybercrime Analyst",
      "Incident Response Specialist",
      "Forensic Malware Analyst",
      "Computer Forensics Consultant",
      "Law Enforcement Digital Analyst",
      "Threat Intelligence Analyst"
    ],
    keyAreas: [
      "Cybercrime Laws and Legal Compliance",
      "Digital Evidence Collection & Chain of Custody",
      "Network Forensics and Intrusion Detection",
      "Mobile and Cloud Forensics",
      "Malware Reverse Engineering",
      "Data Recovery and Steganography Analysis",
      "Incident Reporting & Courtroom Testimony"
    ],
    semester1: [
      "Introduction to Digital Forensics - Fundamentals, incident categories, investigative models",
      "Computer Systems & File Structures - File systems (FAT, NTFS), metadata, registry analysis",
      "Cybercrime and Law - IT Act, evidence admissibility, global standards",
      "Evidence Acquisition & Chain of Custody - Imaging, hashing, preservation, documentation",
      "Lab I – Disk Imaging & Data Recovery - FTK, Autopsy, hex viewers, deleted file recovery"
    ],
    semester2: [
      "Network Forensics & Log Analysis - Packet capture, SIEM tools, traffic analysis, intrusion detection",
      "Malware and Ransomware Forensics - Reverse engineering, behavior tracing, persistence mechanisms",
      "Mobile and Cloud Forensics - Mobile OS artifacts, cloud log extraction, virtualization traces",
      "Reporting & Expert Testimony - Legal documentation, expert witness protocols, courtroom simulation",
      "Capstone Project - Investigation simulation involving end-to-end evidence analysis"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default DigitalForensicsProgram;
