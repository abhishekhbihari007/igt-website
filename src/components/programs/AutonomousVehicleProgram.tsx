import React from 'react';
import { Link } from 'react-router-dom';

const AutonomousVehicleProgram: React.FC = () => {
  const programData = {
    title: "Autonomous Vehicle Technology Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering autonomous vehicle technology, robotics, computer vision, and intelligent transportation systems.",
    highlights: [
      "Autonomous Vehicle Systems",
      "Computer Vision & Perception",
      "Robotics & Control",
      "Sensor Fusion",
      "Intelligent Transportation"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Robotics Fundamentals",
          "Computer Vision",
          "Control Systems",
          "Sensor Technology",
          "Machine Learning Basics"
        ]
      },
      {
        title: "Autonomous Vehicle Core",
        topics: [
          "Perception Systems",
          "Localization & Mapping",
          "Path Planning",
          "Motion Control",
          "Sensor Fusion"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "Multi-Vehicle Systems",
          "Safety & Reliability",
          "Regulatory Compliance",
          "Testing & Validation",
          "Future Mobility Solutions"
        ]
      }
    ],
    careerOpportunities: [
      "Autonomous Vehicle Engineer",
      "Robotics Engineer",
      "Computer Vision Engineer",
      "Control Systems Engineer",
      "Intelligent Transportation Specialist"
    ],
    admissionRequirements: [
      "Background in Engineering or Technology",
      "Understanding of robotics",
      "Programming experience",
      "Interest in autonomous systems"
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

export default AutonomousVehicleProgram;
