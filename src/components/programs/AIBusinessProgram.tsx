import React from 'react';
import { Link } from 'react-router-dom';

const AIBusinessProgram: React.FC = () => {
  const programData = {
    title: "AI Business Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering artificial intelligence in business, AI strategy, implementation, and business transformation.",
    highlights: [
      "AI Business Strategy",
      "AI Implementation",
      "Business Process Automation",
      "AI Ethics & Governance",
      "Digital Transformation"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Business Fundamentals",
          "AI & Machine Learning Basics",
          "Digital Transformation",
          "Business Strategy",
          "Change Management"
        ]
      },
      {
        title: "AI Business Applications",
        topics: [
          "AI in Marketing",
          "AI in Operations",
          "AI in Finance",
          "AI in Customer Service",
          "AI in Supply Chain"
        ]
      },
      {
        title: "Advanced AI Business",
        topics: [
          "AI Strategy Development",
          "AI Implementation Roadmap",
          "AI Ethics & Governance",
          "AI ROI & Metrics",
          "Future of AI in Business"
        ]
      }
    ],
    careerOpportunities: [
      "AI Business Strategist",
      "Digital Transformation Consultant",
      "AI Implementation Manager",
      "Business AI Analyst",
      "AI Product Manager"
    ],
    admissionRequirements: [
      "Business or Technology background",
      "Understanding of business processes",
      "Interest in AI applications",
      "Strategic thinking skills"
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

export default AIBusinessProgram;
