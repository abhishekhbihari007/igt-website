import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIArtsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Arts",
    description: "Explore the intersection of artificial intelligence and creative arts. Master generative art algorithms, AI-assisted composition, and digital creativity tools for innovative artistic expression.",
    duration: "12 Months",
    overview: "Our AI & Arts program explores the fascinating intersection of artificial intelligence and creative expression. Learn generative art algorithms, AI-assisted composition, and digital creativity tools that open new possibilities for innovative artistic creation.",
    careerOpportunities: [
      "AI Artist",
      "Digital Art Creator",
      "Creative AI Developer",
      "AI Art Consultant",
      "Digital Media Artist"
    ],
    keyAreas: [
      "Generative Art Algorithms",
      "AI-Assisted Composition",
      "Digital Creativity Tools",
      "Creative AI Applications",
      "Artistic AI Development",
      "Digital Media Creation"
    ],
    semester1: [
      "Introduction to AI & Arts",
      "Digital Art Fundamentals",
      "Generative Art Basics",
      "AI Composition Tools",
      "Creative AI Software",
      "Digital Media Creation"
    ],
    semester2: [
      "Advanced Generative Art",
      "AI-Assisted Creativity",
      "Interactive Art Systems",
      "Creative AI Development",
      "AI Art Applications",
      "Capstone Art Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIArtsProgram;
