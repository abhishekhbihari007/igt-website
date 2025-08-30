import React from 'react';
import { Link } from 'react-router-dom';

const MobileAppDevelopmentProgram: React.FC = () => {
  const programData = {
    title: "Mobile App Development Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering mobile app development for iOS and Android platforms, including modern frameworks and best practices.",
    highlights: [
      "iOS Development (Swift)",
      "Android Development (Kotlin)",
      "Cross-Platform Development",
      "Mobile UI/UX Design",
      "App Store Deployment"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Programming Fundamentals",
          "Mobile App Architecture",
          "User Interface Design",
          "Mobile UX Principles",
          "App Development Lifecycle"
        ]
      },
      {
        title: "Platform Development",
        topics: [
          "iOS Development with Swift",
          "Android Development with Kotlin",
          "Cross-Platform with React Native",
          "Mobile Database Design",
          "API Integration"
        ]
      },
      {
        title: "Advanced Mobile Technologies",
        topics: [
          "Mobile App Testing",
          "Performance Optimization",
          "Push Notifications",
          "In-App Purchases",
          "App Store Guidelines"
        ]
      }
    ],
    careerOpportunities: [
      "iOS Developer",
      "Android Developer",
      "Mobile App Developer",
      "Cross-Platform Developer",
      "Mobile UI/UX Designer"
    ],
    admissionRequirements: [
      "Basic programming knowledge",
      "Understanding of mobile devices",
      "Creative thinking skills",
      "Interest in mobile technology"
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

export default MobileAppDevelopmentProgram;
