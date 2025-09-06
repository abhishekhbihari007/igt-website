import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const DoctoralPrograms: React.FC = () => {
  const programData = {
    title: "Doctoral Programs (Ph.D.)",
    description: "Our Doctoral Programs are designed for scholars and professionals aiming to pursue advanced research, innovation, and academic excellence in their field of interest. With expert mentorship, access to state-of-the-art facilities, and industry collaboration, Ph.D. scholars contribute to groundbreaking discoveries and future-defining technologies.",
    duration: "3-5 Years",
    overview: "The Doctoral Programs at IGT provide comprehensive research training for scholars and professionals seeking to advance knowledge in their respective fields. Our programs combine rigorous academic coursework with cutting-edge research opportunities, expert mentorship, and access to state-of-the-art facilities. Ph.D. scholars work closely with faculty mentors and industry partners to contribute to groundbreaking discoveries and develop future-defining technologies.",
    careerOpportunities: [
      "Research Scientist",
      "University Professor",
      "Industry Research Director",
      "Government Research Advisor",
      "Technology Innovation Consultant",
      "Patent Attorney",
      "Policy Research Analyst",
      "Entrepreneur in Deep Tech"
    ],
    keyAreas: [
      "Computer Science & Engineering",
      "Artificial Intelligence and Machine Learning",
      "Cybersecurity and Blockchain",
      "Biotechnology & Life Sciences",
      "Management Studies & Entrepreneurship",
      "Agriculture, Robotics & Sustainable Tech",
      "Data Science & Business Analytics",
      "Electrical, Electronics, and Communication Engineering"
    ],
    semester1: [
      "Research Methodology and Design - Advanced research methods, statistical analysis, experimental design",
      "Literature Review and Critical Analysis - Systematic review techniques, meta-analysis, research gap identification",
      "Advanced Research Ethics - Research integrity, ethical considerations, responsible conduct of research",
      "Specialized Coursework - Advanced topics in chosen field of specialization",
      "Research Proposal Development - Formulating research questions, hypothesis development, methodology design"
    ],
    semester2: [
      "Advanced Data Analysis - Statistical modeling, machine learning applications, data visualization",
      "Research Communication - Academic writing, presentation skills, conference participation",
      "Interdisciplinary Research Methods - Cross-disciplinary approaches, collaborative research techniques",
      "Industry Collaboration and Internships - Real-world research applications, industry partnerships",
      "Thesis Preparation and Defense - Comprehensive thesis writing, defense preparation, publication strategies"
    ],
    eligibility: [
      "Master's degree in relevant field with a minimum of 55% marks (or equivalent CGPA)",
      "UGC NET / GATE / University Entrance Exam qualification preferred",
      "Statement of Research Interest / Concept Note",
      "Strong academic background and research potential",
      "English proficiency (IELTS/TOEFL if applicable)"
    ],
    researchFocusAreas: [
      "AI for Healthcare, Agriculture & Smart Cities",
      "Embedded Systems and IoT Integration",
      "Renewable Energy & Electric Vehicles",
      "Genomics, Bioinformatics, and Precision Medicine",
      "EdTech, FinTech & Digital Transformation",
      "Supply Chain, Logistics & Management Innovation"
    ],
    admissionProcess: [
      "Online Application & Document Submission",
      "Entrance Exam (if applicable)",
      "Research Proposal Review & Interview",
      "Provisional Admission & Supervisor Allocation"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default DoctoralPrograms;
