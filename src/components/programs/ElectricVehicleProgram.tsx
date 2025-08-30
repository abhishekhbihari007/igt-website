import React from 'react';
import { Link } from 'react-router-dom';

const ElectricVehicleProgram: React.FC = () => {
  const programData = {
    title: "Electric Vehicle Technology Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering electric vehicle technology, battery systems, charging infrastructure, and sustainable transportation solutions.",
    highlights: [
      "EV Technology Fundamentals",
      "Battery Systems & Management",
      "Charging Infrastructure",
      "Electric Motor Design",
      "Sustainable Transportation"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Electrical Engineering Basics",
          "Automotive Fundamentals",
          "Battery Chemistry",
          "Power Electronics",
          "Control Systems"
        ]
      },
      {
        title: "EV Core Technologies",
        topics: [
          "Electric Motor Design",
          "Battery Management Systems",
          "Power Conversion Systems",
          "Vehicle Control Units",
          "Thermal Management"
        ]
      },
      {
        title: "Advanced EV Applications",
        topics: [
          "Fast Charging Technology",
          "Wireless Charging",
          "Vehicle-to-Grid (V2G)",
          "Autonomous EVs",
          "EV Infrastructure Planning"
        ]
      }
    ],
    careerOpportunities: [
      "EV Engineer",
      "Battery Systems Engineer",
      "Charging Infrastructure Specialist",
      "Electric Vehicle Designer",
      "Sustainable Transportation Consultant"
    ],
    admissionRequirements: [
      "Background in Engineering or Technology",
      "Understanding of electrical systems",
      "Interest in sustainable technology",
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

export default ElectricVehicleProgram;
