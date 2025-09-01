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

      {/* Career Opportunities Section */}
      <section className="career-section">
        <div className="container">
          <div className="section-header">
            <h2>Career Opportunities</h2>
            <div className="section-underline"></div>
          </div>

          <div className="career-grid">
            {programData.careerOpportunities.slice(0, 5).map((career, index) => (
              <div key={index} className="career-card">
                <div className="card-gradient-border"></div>
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
                <h3>Semester 1: Foundations</h3>
              </div>
              <div className="course-list">
                {programData.semester1.map((topic, index) => (
                  <div key={index} className="course-item">
                    <div className="course-header">
                      <h4 className="course-title">{topic}</h4>
                    </div>
                    <div className="learning-objectives">
                      <h5>Learning Objectives:</h5>
                      <ul>
                        <li>Master fundamental concepts and principles</li>
                        <li>Develop practical skills and techniques</li>
                        <li>Apply knowledge to real-world scenarios</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Semester 2 */}
            <div className="semester-module">
              <div className="semester-header">
                <h3>Semester 2: Advanced Applications</h3>
              </div>
              <div className="course-list">
                {programData.semester2.map((topic, index) => (
                  <div key={index} className="course-item">
                    <div className="course-header">
                      <h4 className="course-title">{topic}</h4>
                    </div>
                    <div className="learning-objectives">
                      <h5>Learning Objectives:</h5>
                      <ul>
                        <li>Advanced implementation and development</li>
                        <li>Industry-standard practices and tools</li>
                        <li>Project-based learning and assessment</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
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
            <a href="/apply" className="apply-button">
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramTemplate;
