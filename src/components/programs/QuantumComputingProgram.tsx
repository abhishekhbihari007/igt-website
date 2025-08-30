import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const QuantumComputingProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Quantum Computing",
    description: "Explore the future of computing with quantum technologies",
    duration: "2 Years (4 Semesters)",
    overview: "Our Quantum Computing Program covers the principles of quantum mechanics applied to computing. Students learn quantum algorithms, quantum programming, quantum cryptography, and the development of quantum applications.",
    careerOpportunities: [
      "Quantum Computing Engineer",
      "Quantum Algorithm Developer",
      "Quantum Software Engineer",
      "Quantum Research Scientist",
      "Quantum Technology Consultant",
      "Quantum Cryptography Specialist"
    ],
    keyAreas: [
      "Quantum Mechanics Fundamentals",
      "Quantum Algorithms & Programming",
      "Quantum Cryptography",
      "Quantum Error Correction",
      "Quantum Hardware",
      "Quantum Applications"
    ],
    semester1: [
      "Introduction to Quantum Computing",
      "Quantum Mechanics Basics",
      "Linear Algebra for Quantum",
      "Quantum Gates & Circuits",
      "Basic Quantum Algorithms",
      "Quantum Programming Tools"
    ],
    semester2: [
      "Advanced Quantum Algorithms",
      "Quantum Error Correction",
      "Quantum Cryptography",
      "Quantum Hardware",
      "Quantum Applications",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default QuantumComputingProgram;
