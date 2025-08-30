import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const GenerativeAIProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Generative AI",
    description: "Master the creation of AI models that generate text, images, and media. Learn advanced techniques in natural language processing, computer vision, and creative AI applications for content generation.",
    duration: "12 Months",
    overview: "Our Generative AI program teaches you to create sophisticated AI models that generate text, images, and multimedia content. Master natural language processing, computer vision, and creative AI applications that are transforming content creation across industries.",
    careerOpportunities: [
      "Generative AI Engineer",
      "AI Content Creator",
      "Natural Language Processing Specialist",
      "Computer Vision Engineer",
      "Creative AI Developer"
    ],
    keyAreas: [
      "Natural Language Processing",
      "Computer Vision & Image Generation",
      "Text Generation Models",
      "Creative AI Applications",
      "Model Training & Optimization",
      "Ethical AI Development"
    ],
    semester1: [
      "Introduction to Generative AI",
      "Natural Language Processing Fundamentals",
      "Text Generation Models",
      "Computer Vision Basics",
      "Image Generation Techniques",
      "AI Model Architecture"
    ],
    semester2: [
      "Advanced Language Models",
      "Multimodal AI Generation",
      "Creative AI Applications",
      "Model Training & Fine-tuning",
      "Ethical Considerations",
      "Capstone Project"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default GenerativeAIProgram;
