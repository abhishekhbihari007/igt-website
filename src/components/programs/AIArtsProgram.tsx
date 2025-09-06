import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const AIArtsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Arts",
    description: "Explore the intersection of artificial intelligence and creative expression. Equip students with tools to use AI for artistic creation, performance, and storytelling across visual arts, music, literature, and multimedia design.",
    duration: "12 Months",
    overview: "The Master Program in AI & Arts explores the intersection of artificial intelligence and creative expression. It equips students with the tools to use AI for artistic creation, performance, and storytelling across various disciplines including visual arts, music, literature, and multimedia design. The program fosters innovation at the crossroads of technology and human imagination.",
    careerOpportunities: [
      "AI-Driven Visual Artist",
      "Creative Coder / Generative Art Developer",
      "Interactive Installation Designer",
      "AI Music Composer / Sound Designer",
      "Digital Media Curator",
      "AI Storyteller / Narrative Designer",
      "Researcher in Computational Creativity"
    ],
    keyAreas: [
      "Generative Art and Neural Style Transfer",
      "AI in Music and Audio Synthesis",
      "Creative Writing with Large Language Models",
      "Computer Vision for Artistic Applications",
      "Philosophy of Creativity and Machine Intelligence",
      "Data-Driven Performance & Interactive Media",
      "Ethics and Copyright in AI-Generated Art"
    ],
    semester1: [
      "Introduction to AI in the Arts - History, tools, key thinkers, artistic AI breakthroughs",
      "Creative Coding & Visual Design - Processing, p5.js, generative graphics, interactivity",
      "AI & Sound Generation - Neural audio, soundscape synthesis, ML in music",
      "Lab I – Visual Art using Neural Networks - StyleGAN, DeepDream, VQGAN+CLIP, RunwayML"
    ],
    semester2: [
      "Language Models for Storytelling - Prompt engineering, narrative generation, GPT models",
      "Immersive Experiences & Interactive Installations - AR/VR storytelling, projection art, generative motion",
      "AI Ethics and the Future of Creativity - Bias, authorship, originality, copyright challenges",
      "Capstone Project - Creation of a multisensory AI-powered artistic experience"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default AIArtsProgram;
