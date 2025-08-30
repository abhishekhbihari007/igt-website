import React from 'react';
import { Link } from 'react-router-dom';

const IoTProgram: React.FC = () => {
  const programData = {
    title: "Internet of Things (IoT) Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering IoT technologies, sensor networks, embedded systems, and connected device development.",
    highlights: [
      "IoT Architecture",
      "Sensor Technology",
      "Embedded Systems",
      "Wireless Communication",
      "IoT Security"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Electronics Fundamentals",
          "Digital Logic Design",
          "Microcontroller Programming",
          "Sensor Technology",
          "Wireless Communication"
        ]
      },
      {
        title: "IoT Development",
        topics: [
          "IoT Architecture Design",
          "Embedded Systems Programming",
          "Sensor Data Processing",
          "Cloud Integration",
          "Edge Computing"
        ]
      },
      {
        title: "Advanced IoT Applications",
        topics: [
          "Smart Cities",
          "Industrial IoT (IIoT)",
          "IoT Security & Privacy",
          "Data Analytics",
          "IoT Standards & Protocols"
        ]
      }
    ],
    careerOpportunities: [
      "IoT Engineer",
      "Embedded Systems Developer",
      "IoT Solutions Architect",
      "Sensor Network Engineer",
      "IoT Security Specialist"
    ],
    admissionRequirements: [
      "Basic electronics knowledge",
      "Programming experience",
      "Understanding of networking",
      "Interest in connected devices"
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

export default IoTProgram;
