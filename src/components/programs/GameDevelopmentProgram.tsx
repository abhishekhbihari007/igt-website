import React from 'react';
import { Link } from 'react-router-dom';

const GameDevelopmentProgram: React.FC = () => {
  const programData = {
    title: "Game Development Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering game development, game design, programming, and interactive media creation.",
    highlights: [
      "Game Design Principles",
      "Unity & Unreal Engine",
      "3D Modeling & Animation",
      "Game Programming",
      "Game Art & Graphics"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Game Design Fundamentals",
          "Game Development Pipeline",
          "Programming Basics",
          "Mathematics for Games",
          "Game Art Fundamentals"
        ]
      },
      {
        title: "Game Development Tools",
        topics: [
          "Unity Game Engine",
          "Unreal Engine",
          "3D Modeling (Blender)",
          "Game Programming (C#/C++)",
          "Game Audio Design"
        ]
      },
      {
        title: "Advanced Game Development",
        topics: [
          "3D Game Development",
          "Mobile Game Development",
          "Game Physics & AI",
          "Multiplayer Games",
          "Game Monetization"
        ]
      }
    ],
    careerOpportunities: [
      "Game Developer",
      "Game Designer",
      "3D Artist",
      "Game Programmer",
      "Level Designer"
    ],
    admissionRequirements: [
      "Creative thinking skills",
      "Basic computer literacy",
      "Interest in gaming",
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

export default GameDevelopmentProgram;
