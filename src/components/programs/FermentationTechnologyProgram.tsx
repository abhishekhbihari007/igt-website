import React from 'react';
import { Link } from 'react-router-dom';

const FermentationTechnologyProgram: React.FC = () => {
  const programData = {
    title: "Fermentation Technology Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering fermentation technology, microbial processes, bioprocessing, and industrial fermentation applications.",
    highlights: [
      "Microbial Fermentation",
      "Bioprocessing Technology",
      "Industrial Applications",
      "Quality Control",
      "Process Optimization"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Microbiology Fundamentals",
          "Biochemistry Basics",
          "Fermentation Principles",
          "Microbial Growth",
          "Metabolic Pathways"
        ]
      },
      {
        title: "Fermentation Core",
        topics: [
          "Fermentation Systems",
          "Strain Development",
          "Process Control",
          "Scale-up Technology",
          "Product Recovery"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "Industrial Fermentation",
          "Food & Beverage Production",
          "Pharmaceutical Applications",
          "Biofuel Production",
          "Waste Treatment"
        ]
      }
    ],
    careerOpportunities: [
      "Fermentation Technologist",
      "Bioprocessing Engineer",
      "Microbial Process Specialist",
      "Quality Control Analyst",
      "Industrial Biotechnologist"
    ],
    admissionRequirements: [
      "Background in Biology or Chemistry",
      "Understanding of microbiology",
      "Interest in biotechnology",
      "Laboratory skills preferred"
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

export default FermentationTechnologyProgram;
