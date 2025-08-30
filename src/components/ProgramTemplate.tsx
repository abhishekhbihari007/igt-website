import React from 'react';
import './ProgramTemplate.css';

// Interface for program data
interface ProgramData {
  title: string;
  subtitle: string;
  introduction: string[];
  stats: {
    jobPlacement: string;
    industryPartners: string;
    duration: string;
    level: string;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  curriculum: {
    title: string;
    topics: string[];
  }[];
  careers: {
    icon: string;
    title: string;
    description: string;
  }[];
  applyTitle: string;
  applyDescription: string;
}

interface ProgramTemplateProps {
  programData: ProgramData;
}

const ProgramTemplate: React.FC<ProgramTemplateProps> = ({ programData }) => {
  return (
    <div className="program-details-page">
      {/* ============== PROGRAM BANNER SECTION ============== */}
      <div className="program-banner">
        <div className="banner-content">
          <h1>{programData.title}</h1>
          <p className="program-banner-subtitle">
            {programData.subtitle}
          </p>
        </div>
      </div>

      {/* ============== MAIN CONTENT SECTIONS ============== */}
      <div className="program-content-wrapper">
        
        {/* ============== INTRODUCTION SECTION ============== */}
        <div className="program-content-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h2>Introduction</h2>
            </div>
            
            {programData.introduction.map((paragraph, index) => (
              <p key={index} className="section-subtitle">
                {paragraph}
              </p>
            ))}
            
            {/* Key statistics grid showing program highlights */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">{programData.stats.jobPlacement}</div>
                <div className="stat-label">Job Placement Rate</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{programData.stats.industryPartners}</div>
                <div className="stat-label">Industry Partners</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{programData.stats.duration}</div>
                <div className="stat-label">Duration</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{programData.stats.level}</div>
                <div className="stat-label">Program Level</div>
              </div>
            </div>

            {/* Program features highlighting key benefits */}
            <div className="program-features">
              <div className="section-header">
                <div className="section-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h2>Program Features</h2>
              </div>
              
              {/* Grid of feature cards */}
              <div className="features-grid">
                {programData.features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============== CURRICULUM SECTION ============== */}
        <div className="program-content-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h2>Curriculum</h2>
            </div>
            
            <div className="curriculum-grid">
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
          </div>
        </div>

        {/* ============== CAREERS SECTION ============== */}
        <div className="program-content-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h2>Career Opportunities</h2>
            </div>
            
            <div className="career-grid">
              {programData.careers.map((career, index) => (
                <div key={index} className="career-card">
                  <div className="career-icon">
                    <i className={career.icon}></i>
                  </div>
                  <div className="career-content">
                    <h3>{career.title}</h3>
                    <p>{career.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============== APPLY SECTION ============== */}
        <div className="program-content-section">
          <div className="section-container">
            <div className="apply-section">
              <div className="apply-content">
                <h3>{programData.applyTitle}</h3>
                <p>{programData.applyDescription}</p>
                <button className="apply-button">
                  APPLY NOW
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramTemplate;
