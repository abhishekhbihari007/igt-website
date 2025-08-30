import React from 'react';
import { Link } from 'react-router-dom';

const QuantumComputingProgram: React.FC = () => {
  const programData = {
    title: "Quantum Computing Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering quantum computing fundamentals, quantum algorithms, and applications in cryptography and optimization.",
    highlights: [
      "Quantum Mechanics Fundamentals",
      "Quantum Algorithms",
      "Quantum Programming",
      "Quantum Cryptography",
      "Quantum Error Correction"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Quantum Mechanics",
          "Linear Algebra",
          "Complex Numbers",
          "Probability Theory",
          "Information Theory"
        ]
      },
      {
        title: "Quantum Computing Core",
        topics: [
          "Qubits & Quantum Gates",
          "Quantum Circuits",
          "Quantum Algorithms",
          "Quantum Programming (Qiskit)",
          "Quantum Simulation"
        ]
      },
      {
        title: "Advanced Quantum Applications",
        topics: [
          "Quantum Cryptography",
          "Quantum Machine Learning",
          "Quantum Optimization",
          "Quantum Error Correction",
          "Quantum Hardware"
        ]
      }
    ],
    careerOpportunities: [
      "Quantum Computing Researcher",
      "Quantum Algorithm Developer",
      "Quantum Software Engineer",
      "Quantum Cryptography Specialist",
      "Quantum Computing Consultant"
    ],
    admissionRequirements: [
      "Strong background in Mathematics",
      "Understanding of Physics",
      "Programming experience",
      "Advanced analytical skills"
    ]
  };

  return (
    <div className="program-details">
      <div className="program-header">
        <h1>{programData.title}</h1>
        <div className="program-meta">
          <span className="duration">Duration: {programData.duration}</span>
          <span className="level">Level: {programData.level}</span>
        </div>
      </div>

      <div className="program-overview">
        <h2>Program Overview</h2>
        <p>{programData.overview}</p>
        
        <div className="highlights">
          <h3>Key Highlights</h3>
          <ul>
            {programData.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="curriculum">
        <h2>Curriculum</h2>
        {programData.curriculum.map((module, index) => (
          <div key={index} className="curriculum-module">
            <h3>{module.title}</h3>
            <ul>
              {module.topics.map((topic, topicIndex) => (
                <li key={topicIndex}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="career-opportunities">
        <h2>Career Opportunities</h2>
        <ul>
          {programData.careerOpportunities.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      </div>

      <div className="admission-requirements">
        <h2>Admission Requirements</h2>
        <ul>
          {programData.admissionRequirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="program-actions">
        <Link to="/programs" className="btn btn-secondary">Back to Programs</Link>
        <button className="btn btn-primary">Apply Now</button>
      </div>
    </div>
  );
};

export default QuantumComputingProgram;
