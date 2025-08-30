import React from 'react';
import { Link } from 'react-router-dom';

const RoboticsProgram: React.FC = () => {
  const programData = {
    title: "Robotics Engineering Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering robotics engineering, automation, control systems, and industrial robotics applications.",
    highlights: [
      "Robotics Fundamentals",
      "Automation & Control Systems",
      "Industrial Robotics",
      "Robot Programming",
      "Human-Robot Interaction"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Mechanics & Kinematics",
          "Electronics & Circuits",
          "Programming Fundamentals",
          "Mathematics for Robotics",
          "Physics of Motion"
        ]
      },
      {
        title: "Robotics Core",
        topics: [
          "Robot Design & Construction",
          "Control Systems",
          "Sensors & Actuators",
          "Robot Programming",
          "Motion Planning"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "Industrial Automation",
          "Mobile Robotics",
          "Human-Robot Collaboration",
          "AI in Robotics",
          "Robotics Ethics"
        ]
      }
    ],
    careerOpportunities: [
      "Robotics Engineer",
      "Automation Engineer",
      "Control Systems Engineer",
      "Robotics Programmer",
      "Industrial Robotics Specialist"
    ],
    admissionRequirements: [
      "Bachelor's degree in Engineering or related field",
      "Strong background in mathematics and physics",
      "Programming experience",
      "Mechanical aptitude"
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

export default RoboticsProgram;
