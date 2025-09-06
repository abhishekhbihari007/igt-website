import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const IPLawProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Intellectual Property (IP) Law",
    description: "Specialized postgraduate course that equips students with comprehensive understanding of legal frameworks governing trademarks, copyrights, patents, trade secrets, and international IP treaties. Blend legal theory with practical knowledge of global IP systems.",
    duration: "12 Months",
    overview: "The Master Program in Intellectual Property (IP) Law is a specialized postgraduate course that equips students with a comprehensive understanding of legal frameworks governing trademarks, copyrights, patents, trade secrets, and international IP treaties. The program blends legal theory with practical knowledge of global IP systems, digital rights, and innovation protection.",
    careerOpportunities: [
      "Patent Attorney or Agent",
      "Trademark and Copyright Specialist",
      "IP Consultant in Tech & Pharma",
      "Legal Advisor for Innovation Startups",
      "Policy Analyst in Intellectual Property",
      "IP Litigator or In-House Counsel",
      "Academician & Researcher in IP Law"
    ],
    keyAreas: [
      "Patent Law & Drafting Techniques",
      "Trademark, Copyright & Design Law",
      "IP Management & Licensing",
      "Digital & International IP Law",
      "Trade Secrets and Unfair Competition",
      "WIPO, TRIPS, and Global Treaties",
      "IP in Technology, Pharma, and Creative Industries"
    ],
    semester1: [
      "Introduction to Intellectual Property Rights - Types of IP, IP policies, global scope",
      "Patent Law & Procedure - Patentability, drafting, infringement, filing process",
      "Trademark & Copyright Law - Marks, logos, original works, registration, infringement",
      "WIPO and International IP Systems - TRIPS, WIPO treaties, PCT, Madrid protocol",
      "Lab I – Patent Search & Drafting - Using databases (WIPO, USPTO), prior art search, draft filing"
    ],
    semester2: [
      "IP in the Digital Economy - Software patents, AI/ML copyrights, data rights",
      "IP Litigation & Enforcement - Civil remedies, criminal enforcement, case studies",
      "Licensing & Commercialization of IP - FRAND, royalties, technology transfer agreements",
      "Trade Secrets and Industrial Design - Protection of confidential information, aesthetic rights",
      "Capstone Project - Case study analysis or mock IP trial/patent filing"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default IPLawProgram;
