import React from 'react';
import { Link } from 'react-router-dom';

const MachineLearningProgram: React.FC = () => {
  const programData = {
    title: "Machine Learning Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering machine learning algorithms, deep learning, neural networks, and practical ML applications.",
    highlights: [
      "Supervised & Unsupervised Learning",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "ML Model Deployment"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "Mathematics for ML",
          "Python Programming",
          "Statistics & Probability",
          "Linear Algebra",
          "Data Preprocessing"
        ]
      },
      {
        title: "Machine Learning Core",
        topics: [
          "Supervised Learning Algorithms",
          "Unsupervised Learning",
          "Model Evaluation",
          "Feature Engineering",
          "Cross-Validation"
        ]
      },
      {
        title: "Advanced ML Applications",
        topics: [
          "Deep Learning",
          "Neural Networks",
          "Computer Vision",
          "Natural Language Processing",
          "ML Model Deployment"
        ]
      }
    ],
    careerOpportunities: [
      "Machine Learning Engineer",
      "Data Scientist",
      "ML Research Scientist",
      "AI Engineer",
      "ML Product Manager"
    ],
    admissionRequirements: [
      "Strong mathematical background",
      "Programming experience (Python)",
      "Understanding of statistics",
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

export default MachineLearningProgram;
