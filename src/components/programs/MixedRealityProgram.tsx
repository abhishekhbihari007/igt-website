import React from 'react';
import { Link } from 'react-router-dom';

const MixedRealityProgram: React.FC = () => {
  const programData = {
    title: "Mixed Reality Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering mixed reality technologies, spatial computing, and immersive experience development across AR, VR, and MR platforms.",
    highlights: [
      "Mixed Reality Development",
      "Spatial Computing",
      "3D Content Creation",
      "Immersive Experiences",
      "Cross-Platform Development"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Mixed Reality Fundamentals",
          "3D Graphics & Modeling",
          "Spatial Computing",
          "Human-Computer Interaction",
          "Computer Vision"
        ]
      },
      {
        title: "Mixed Reality Development",
        topics: [
          "Unity MR Development",
          "Unreal Engine MR",
          "HoloLens Development",
          "3D Content Creation",
          "Spatial Audio Design"
        ]
      },
      {
        title: "Advanced MR Applications",
        topics: [
          "Enterprise MR Solutions",
          "Medical & Healthcare MR",
          "Education & Training MR",
          "Social MR Platforms",
          "MR Analytics & Insights"
        ]
      }
    ],
    careerOpportunities: [
      "Mixed Reality Developer",
      "3D Content Creator",
      "MR Experience Designer",
      "Spatial Computing Engineer",
      "MR Solutions Architect"
    ],
    admissionRequirements: [
      "Basic programming knowledge",
      "3D design skills preferred",
      "Creative thinking",
      "Interest in immersive technology"
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

export default MixedRealityProgram;
