import React from 'react';
import { Link } from 'react-router-dom';

const AgriEntrepreneurshipProgram: React.FC = () => {
  const programData = {
    title: "Agri-Entrepreneurship Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering agricultural entrepreneurship, business development, sustainable farming practices, and agricultural innovation.",
    highlights: [
      "Agricultural Business",
      "Sustainable Farming",
      "Innovation in Agriculture",
      "Market Analysis",
      "Agricultural Technology"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Agricultural Fundamentals",
          "Business Basics",
          "Entrepreneurship Principles",
          "Sustainable Agriculture",
          "Market Research"
        ]
      },
      {
        title: "Agricultural Business",
        topics: [
          "Agricultural Business Models",
          "Supply Chain Management",
          "Agricultural Marketing",
          "Financial Management",
          "Risk Management"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "Agricultural Innovation",
          "Technology Integration",
          "International Markets",
          "Agricultural Policy",
          "Future of Agriculture"
        ]
      }
    ],
    careerOpportunities: [
      "Agricultural Entrepreneur",
      "Agricultural Business Manager",
      "Sustainable Farming Consultant",
      "Agricultural Innovation Specialist",
      "Agricultural Technology Advisor"
    ],
    admissionRequirements: [
      "Interest in agriculture",
      "Entrepreneurial mindset",
      "Business acumen",
      "No prior experience required"
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

export default AgriEntrepreneurshipProgram;
