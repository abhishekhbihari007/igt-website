import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIDesigningTechnologyProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Designing Technology",
    description: "Blend artificial intelligence with human-centric design. Create intelligent interfaces, generative design tools, smart products, and digital experiences that adapt to user behavior through machine learning and data analysis.",
    duration: "12 Months",
    overview: "The Master Program in AI & Designing Technology is an interdisciplinary course that blends the power of artificial intelligence with human-centric design. It trains students to create intelligent interfaces, generative design tools, smart products, and digital experiences that adapt to user behavior through machine learning and data analysis.",
    careerOpportunities: [
      "AI-Powered UX/UI Designer",
      "Creative Technologist",
      "Human-AI Interaction Designer",
      "Design Automation Specialist",
      "Product Designer with ML Expertise",
      "Generative Design Developer",
      "AR/VR Interaction Engineer"
    ],
    keyAreas: [
      "AI & Human-Centered Design",
      "User Experience (UX) and Interface Design",
      "Generative Art & Computational Creativity",
      "AI for Prototyping and Personalization",
      "Design Thinking with Data-Driven Insights",
      "AR/VR/XR Design with AI Integration",
      "Ethics, Accessibility & Inclusive AI Systems"
    ],
    semester1: [
      "Introduction to AI and ML - Supervised/unsupervised learning, neural networks, tools",
      "Principles of Design Thinking - Empathy, ideation, prototyping, user testing",
      "Human-AI Interaction - HCI principles, user behavior modeling, AI ethics",
      "Creative Coding & Generative Design - Processing, p5.js, generative patterns, data art",
      "Lab I – AI Tools in Visual Design - Figma plugins, Midjourney, RunwayML, Adobe Firefly"
    ],
    semester2: [
      "Data-Driven UX/UI - Analytics, A/B testing, AI in personalization",
      "Design Automation & Scripting - Python scripting, automation in design workflows",
      "AI in AR/VR and Immersive Environments - Unity, gesture tracking, eye movement analysis",
      "Capstone Project - Develop an intelligent design system or AI-based product interface"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIDesigningTechnologyProgram;
