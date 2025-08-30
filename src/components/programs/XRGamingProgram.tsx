import React from 'react';
import { Link } from 'react-router-dom';

const XRGamingProgram: React.FC = () => {
  const programData = {
    title: "XR Gaming Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering extended reality gaming, immersive game development, and interactive entertainment experiences.",
    highlights: [
      "XR Game Development",
      "Immersive Gaming",
      "3D Game Design",
      "Interactive Storytelling",
      "Gaming Analytics"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Game Design Fundamentals",
          "3D Graphics & Animation",
          "XR Technology Basics",
          "Game Development Pipeline",
          "Interactive Design"
        ]
      },
      {
        title: "XR Game Development",
        topics: [
          "Unity XR Development",
          "Unreal Engine XR",
          "3D Modeling for Games",
          "Spatial Audio Design",
          "Gesture & Motion Controls"
        ]
      },
      {
        title: "Advanced XR Gaming",
        topics: [
          "Multiplayer XR Games",
          "Social Gaming Platforms",
          "Gaming Analytics",
          "Performance Optimization",
          "XR Game Monetization"
        ]
      }
    ],
    careerOpportunities: [
      "XR Game Developer",
      "3D Game Artist",
      "Game Designer",
      "XR Gaming Engineer",
      "Interactive Entertainment Developer"
    ],
    admissionRequirements: [
      "Creative thinking skills",
      "Interest in gaming",
      "Basic computer literacy",
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

export default XRGamingProgram;
