import React from 'react';
import './ProgramTemplate.css';

interface ProgramData {
  title: string;
  description: string;
  duration: string;
  overview: string;
  careerOpportunities: string[];
  keyAreas: string[];
  semester1: string[];
  semester2: string[];
}

interface ProgramTemplateProps {
  programData: ProgramData;
}

const ProgramTemplate: React.FC<ProgramTemplateProps> = ({ programData }) => {
  return (
    <div className="program-template">
      {/* Introduction Part (Title Only) */}
      <section className="introduction-section">
        <div className="container">
          <div className="section-header">
            <h1 className="program-title">
              {programData.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction Section (Content) */}
      <section className="introduction-content-section">
        <div className="container">
          <div className="section-header">
            <h2>Introduction</h2>
            <div className="section-underline"></div>
          </div>
          <div className="overview-content">
            <p>{programData.overview}</p>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="career-opportunities-section">
        <div className="container">
          <div className="section-header">
            <h2>Career Opportunities</h2>
            <div className="section-underline"></div>
          </div>
          <div className="career-grid">
            {programData.careerOpportunities.map((career, index) => (
              <div key={index} className="career-card">
                <div className="career-icon">💼</div>
                <h3>{career}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Areas of Study */}
      <section className="key-areas-section">
        <div className="container">
          <div className="section-header">
            <h2>Key Areas of Study</h2>
            <div className="section-underline"></div>
          </div>
          <div className="areas-grid">
            {programData.keyAreas.map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-icon">📚</div>
                <h3>{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semester-wise Syllabus */}
      <section className="syllabus-section">
        <div className="container">
          <div className="section-header">
            <h2>Semester-wise Syllabus</h2>
            <div className="section-underline"></div>
          </div>
          <div className="semester-container">
            {/* Semester 1 */}
            <div className="semester-module">
              <div className="semester-header">
                <h3>Semester 1</h3>
              </div>
              <ul className="semester-topics">
                {programData.semester1.map((topic, index) => (
                  <li key={index}>
                    <span className="topic-checkmark">✓</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Semester 2 */}
            <div className="semester-module">
              <div className="semester-header">
                <h3>Semester 2</h3>
              </div>
              <ul className="semester-topics">
                {programData.semester2.map((topic, index) => (
                  <li key={index}>
                    <span className="topic-checkmark">✓</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Button */}
      <section className="apply-section">
        <div className="container">
          <div className="apply-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join our program and transform your career</p>
            <button className="apply-button">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramTemplate;
