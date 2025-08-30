import React from 'react';
import { Link } from 'react-router-dom';

const HumanComputerInteractionProgram: React.FC = () => {
  const programData = {
    title: "Human-Computer Interaction Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering user experience design, interface design, usability testing, and human-centered technology development.",
    highlights: [
      "User Experience (UX) Design",
      "Interface Design",
      "Usability Testing",
      "User Research",
      "Interaction Design"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "HCI Fundamentals",
          "Psychology & Cognition",
          "Design Principles",
          "User Research Methods",
          "Information Architecture"
        ]
      },
      {
        title: "Design & Development",
        topics: [
          "User Interface Design",
          "Prototyping Tools",
          "Wireframing & Mockups",
          "Design Systems",
          "Accessibility Design"
        ]
      },
      {
        title: "Advanced HCI Applications",
        topics: [
          "Usability Testing",
          "User Experience Research",
          "Mobile & Responsive Design",
          "Voice & Gesture Interfaces",
          "Emerging Technologies"
        ]
      }
    ],
    careerOpportunities: [
      "UX Designer",
      "UI Designer",
      "User Researcher",
      "Interaction Designer",
      "Usability Specialist"
    ],
    admissionRequirements: [
      "Creative thinking skills",
      "Interest in user experience",
      "Basic design skills preferred",
      "No prior programming experience required"
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

export default HumanComputerInteractionProgram;
