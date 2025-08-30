import React from 'react';
import { Link } from 'react-router-dom';

const AgricultureRoboticsProgram: React.FC = () => {
  const programData = {
    title: "Agriculture Robotics Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering robotics in agriculture, automated farming systems, precision agriculture, and smart farming technologies.",
    highlights: [
      "Agricultural Robotics",
      "Precision Agriculture",
      "Automated Farming",
      "Drone Technology",
      "Smart Irrigation Systems"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Agricultural Fundamentals",
          "Robotics Basics",
          "Precision Agriculture",
          "Sensor Technology",
          "Control Systems"
        ]
      },
      {
        title: "Agricultural Robotics Core",
        topics: [
          "Agricultural Robot Design",
          "Automated Harvesting",
          "Weeding Robots",
          "Drone Applications",
          "Smart Irrigation"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "Multi-Robot Systems",
          "AI in Agriculture",
          "Sustainable Farming",
          "Robotics Safety",
          "Future of Ag Robotics"
        ]
      }
    ],
    careerOpportunities: [
      "Agricultural Robotics Engineer",
      "Precision Agriculture Specialist",
      "Smart Farming Consultant",
      "Agricultural Technology Engineer",
      "Robotics Systems Integrator"
    ],
    admissionRequirements: [
      "Background in Agriculture or Engineering",
      "Understanding of robotics",
      "Interest in sustainable farming",
      "Problem-solving skills"
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

export default AgricultureRoboticsProgram;
