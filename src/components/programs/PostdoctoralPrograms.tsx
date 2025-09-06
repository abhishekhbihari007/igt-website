import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const PostdoctoralPrograms: React.FC = () => {
  const programData = {
    title: "Postdoctoral Research Programs",
    description: "Our Postdoctoral Research Programs are tailored for scholars who have completed their doctoral studies and wish to pursue advanced research in specialized domains. These programs support innovation, high-impact publications, and collaborative research with academic, industrial, or international partners.",
    duration: "1-3 Years",
    overview: "The Postdoctoral Research Programs at IGT are designed for scholars who have completed their doctoral studies and wish to pursue advanced research in specialized domains. These programs provide opportunities for innovation, high-impact publications, and collaborative research with academic, industrial, and international partners. Postdoctoral fellows work in state-of-the-art facilities with access to cutting-edge resources and mentorship from senior faculty.",
    careerOpportunities: [
      "Senior Research Scientist",
      "Principal Investigator",
      "Research Director",
      "University Faculty Position",
      "Industry Research Lead",
      "Government Research Advisor",
      "International Research Collaborator",
      "Technology Transfer Specialist"
    ],
    keyAreas: [
      "Artificial Intelligence & Machine Learning",
      "Cybersecurity & Blockchain",
      "Precision Agriculture & AgriTech",
      "Biotechnology & Genomics",
      "Energy Systems & Electric Mobility",
      "Health Informatics & Biomedical Engineering",
      "Digital Transformation & Management Innovation"
    ],
    semester1: [
      "Advanced Research Design - Complex research methodologies, experimental protocols, data collection strategies",
      "Publication and Grant Writing - High-impact journal publications, grant proposal development, funding acquisition",
      "Interdisciplinary Collaboration - Cross-disciplinary research teams, collaborative methodologies, knowledge integration",
      "Technology Transfer and Innovation - Commercialization strategies, patent development, industry partnerships",
      "Mentorship and Leadership - Supervising junior researchers, leading research teams, academic leadership"
    ],
    semester2: [
      "International Research Collaboration - Global research partnerships, international conferences, collaborative projects",
      "Advanced Data Analysis and Modeling - Complex statistical analysis, machine learning applications, predictive modeling",
      "Research Communication and Dissemination - Conference presentations, workshop organization, public engagement",
      "Policy and Impact Assessment - Research impact evaluation, policy recommendations, societal impact measurement",
      "Career Development and Transition - Academic job market preparation, industry transition, entrepreneurial opportunities"
    ],
    eligibility: [
      "Ph.D. in a relevant discipline from a recognized university",
      "Published research papers in indexed journals",
      "Strong research proposal aligned with institutional domains",
      "Demonstrated research excellence and innovation potential",
      "English proficiency (IELTS/TOEFL if applicable)"
    ],
    facilitiesSupport: [
      "Access to advanced labs, computing infrastructure, and journals",
      "Mentorship by senior faculty and interdisciplinary teams",
      "Funding assistance for conferences, workshops, and publications",
      "Collaboration opportunities with national and international institutions"
    ],
    applicationProcess: [
      "Online application and submission of required documents",
      "Research proposal evaluation by expert committee",
      "Interview and presentation of research objectives",
      "Offer of Fellowship and onboarding"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default PostdoctoralPrograms;
