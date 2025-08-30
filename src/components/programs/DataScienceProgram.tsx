import React from 'react';
import { Link } from 'react-router-dom';

const DataScienceProgram: React.FC = () => {
  const programData = {
    title: "Data Science Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering data science, statistical analysis, machine learning, and data visualization techniques.",
    highlights: [
      "Statistical Analysis",
      "Machine Learning",
      "Data Visualization",
      "Big Data Processing",
      "Predictive Analytics"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Statistics & Probability",
          "Python Programming",
          "Data Manipulation",
          "SQL & Database Management",
          "Mathematics for Data Science"
        ]
      },
      {
        title: "Core Data Science",
        topics: [
          "Exploratory Data Analysis",
          "Statistical Modeling",
          "Machine Learning Algorithms",
          "Data Visualization",
          "Feature Engineering"
        ]
      },
      {
        title: "Advanced Applications",
        topics: [
          "Deep Learning",
          "Big Data Technologies",
          "Natural Language Processing",
          "Time Series Analysis",
          "Data Science Ethics"
        ]
      }
    ],
    careerOpportunities: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Data Engineer"
    ],
    admissionRequirements: [
      "Bachelor's degree in Mathematics, Statistics, or related field",
      "Strong mathematical background",
      "Programming experience (Python/R)",
      "Analytical thinking skills"
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

export default DataScienceProgram;
