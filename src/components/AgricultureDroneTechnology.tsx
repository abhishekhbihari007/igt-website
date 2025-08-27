import React from 'react';

// --- Data Constants ---
// Storing data in constants makes the component's JSX cleaner and easier to manage.

const careerOpportunities = [
  'Drone Pilot / Operator for Agriculture',
  'Precision Agriculture Consultant',
  'UAV Imaging and Survey Specialist',
  'Drone Data Analyst',
  'AgriTech Systems Developer',
  'Remote Sensing & GIS Analyst',
  'Agri-Robotics Engineer',
  'Government Drone Policy Advisor',
];

const keyAreasOfStudy = [
  'Drone Engineering & Flight Systems',
  'UAV Mapping & Survey Techniques',
  'Remote Sensing & Crop Imaging',
  'Precision Farming & Smart Irrigation',
  'NDVI Analysis for Crop Health',
  'GIS & GPS Integration',
  'AI & Machine Learning in Drone Data',
  'Drone Laws and Compliance',
];

const semester1Syllabus = [
  { subject: 'Fundamentals of Drone Technology', subtopics: 'Types of UAVs, drone mechanics, components, payloads, safety features' },
  { subject: 'Flight Dynamics and Control', subtopics: 'Autopilot systems, telemetry, GPS navigation, mission planning' },
  { subject: 'Introduction to Precision Agriculture', subtopics: 'Site-specific crop management, sensor-based agriculture, smart practices' },
  { subject: 'Aerial Imaging and Remote Sensing', subtopics: 'Camera types, NDVI, orthomosaic generation, calibration techniques' },
  { subject: 'Drone Laws and Safety', subtopics: 'DGCA/FAA guidelines, licensing, no-fly zones, airspace regulations' },
  { subject: 'Practical Lab I', subtopics: 'Drone assembly, manual flying, simulator training, GPS flight testing' },
];

const semester2Syllabus = [
  { subject: 'NDVI & Crop Monitoring', subtopics: 'Vegetation indices, pest & disease detection, soil health visualization' },
  { subject: 'Drone Mapping & Surveying', subtopics: '3D terrain mapping, contour creation, yield prediction, digital elevation models' },
  { subject: 'IoT & Drone Integration', subtopics: 'Sensor fusion, edge devices, automated irrigation alerts, cloud syncing' },
  { subject: 'Capstone Project', subtopics: 'Industry-based research project solving a real-world agri-drone challenge' },
  { subject: 'Practical Lab II', subtopics: 'Autonomous flying, multispectral imaging, spraying modules, advanced missions' },
];


// --- CSS Styles ---
// All styles are defined in this template literal and injected via a <style> tag.
// This makes the component completely self-contained without needing a separate .css file.
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500;700&display=swap');

  .page-container {
    background-color: #f1f5f9;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    color: #1e293b;
  }



  .program-banner {
    background: linear-gradient(135deg, #2e7d32 0%, #1e4620 100%);
    color: white;
    padding: 40px 20px;
    margin-top: 20px;
    box-shadow: 0 8px 25px rgba(46, 125, 50, 0.3);
    border-radius: 0 0 20px 20px;
    position: relative;
    overflow: hidden;
  }

  .program-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" x="0" y="0" width="100" height="100"/></svg>');
    opacity: 0.3;
    pointer-events: none;
  }

  .program-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    position: relative;
    z-index: 1;
  }

  .intro-section {
    padding: 60px 20px;
    background: #f8fafc;
  }

  .intro-container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    border: 1px solid #e2e8f0;
  }

  .intro-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .intro-icon {
    font-size: 1.5rem;
  }

  .intro-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #475569;
    margin: 0;
  }

  .program-title {
    font-size: 3rem;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
    line-height: 1.2;
    color: white;
    margin-bottom: 20px;
  }

  .program-description {
    font-size: 1.25rem;
    color: #e2e8f0;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .main-content {
    max-width: 1152px;
    margin: 0 auto;
    padding: 5rem 1.5rem;
  }
  
  .section-title {
    font-size: 2.25rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }

  .section-title span {
    color: #0d9488;
    margin-right: 1rem;
  }
  
  .intro-section {
    text-align: center;
    max-width: 56rem;
    margin: 0 auto;
  }
  
  .intro-text {
    font-size: 1.25rem;
    line-height: 1.75;
    color: #334155;
  }

  .info-grid {
    display: grid;
    gap: 3rem;
    margin-top: 6rem;
  }

  .info-card {
    background-color: white;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    transition: box-shadow 0.3s ease-in-out;
  }

  .info-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  }
  
  .info-card-title {
    font-size: 1.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
  }
  
  .info-card-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-size: 1.125rem;
    color: #4b5563;
  }
  
  .info-card-list li {
    display: flex;
    align-items: flex-start;
  }
  
  .info-card-list svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #14b8a6;
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  .syllabus-section {
    margin-top: 6rem;
  }

  .syllabus-table-container {
    margin-top: 3rem;
  }
  
  .syllabus-table-title {
    font-size: 1.875rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .table-wrapper {
    overflow-x: auto;
    border-radius: 0.75rem;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  }
  
  .syllabus-table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }

  .syllabus-table th, .syllabus-table td {
    padding: 1.25rem;
  }
  
  .syllabus-table thead {
    background-color: #1e293b;
    color: white;
  }

  .syllabus-table th {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.05em;
  }
  
  .syllabus-table tbody tr {
    border-bottom: 1px solid #e5e7eb;
  }

  .syllabus-table tbody tr:nth-child(odd) {
    background-color: white;
  }

  .syllabus-table tbody tr:nth-child(even) {
    background-color: #f1f5f9;
  }

  .syllabus-table tbody tr:hover {
    background-color: #f0fdfa;
    transition: background-color 0.3s;
  }
  
  .syllabus-table td:first-child {
    font-weight: 500;
    color: #1e293b;
  }

  .syllabus-table td {
    color: #334155;
    line-height: 1.6;
  }

  .apply-button-container {
    text-align: center;
    margin-top: 6rem;
  }
  
  .apply-button {
    display: inline-block;
    background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
    padding: 1.25rem 3rem;
    border-radius: 50px;
    box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
  }

  .apply-button:hover {
    background: linear-gradient(135deg, #45A049 0%, #1B5E20 100%);
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(76, 175, 80, 0.4);
  }

  .footer {
    background-color: #020617;
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-top: 5rem;
  }

  /* Responsive Styles */
  @media (min-width: 768px) {
    .header-title {
      font-size: 3.75rem;
    }
    .info-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

// --- Type Definitions for Component Props ---
interface SectionTitleProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

interface SyllabusTableProps {
  title: string;
  data: {
    subject: string;
    subtopics: string;
  }[];
}

// --- Reusable Components ---
const SectionTitle: React.FC<SectionTitleProps> = ({ icon, children }) => (
  <h2 className="section-title">
    <span>{icon}</span>
    {children}
  </h2>
);

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, items }) => (
    <div className="info-card">
        <h3 className="info-card-title">
            <span>{icon}</span>
            {title}
        </h3>
        <ul className="info-card-list">
            {items.map((item, index) => (
                <li key={index}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const SyllabusTable: React.FC<SyllabusTableProps> = ({ title, data }) => (
  <div className="syllabus-table-container">
    <h3 className="syllabus-table-title">{title}</h3>
    <div className="table-wrapper">
      <table className="syllabus-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Subtopics</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.subtopics}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Main App Component ---
export default function AgricultureDroneTechnology() {
  return (
    <>
      <style>{styles}</style>
      <div className="page-container">
        
        <section className="program-banner text-center py-20">
          <h1 className="program-title">
            MASTER PROGRAM in Agriculture Drones
          </h1>
        </section>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-container">
            <h2 className="intro-title">
              <span className="intro-icon">🛸</span>
              Introduction
            </h2>
            <p className="intro-text">
              The Master's in Agriculture Drone Technology is an advanced postgraduate program designed to revolutionize farming through aerial technology. It blends drone engineering, remote sensing, AI, and data analytics to create intelligent agricultural systems. The course equips students with skills to apply UAVs in crop monitoring, spraying, and yield prediction — boosting productivity and sustainability.
            </p>
          </div>
        </section>

        <main className="main-content">
          
          <section className="info-grid">
              <InfoCard title="Career Opportunities" icon="💼" items={careerOpportunities} />
              <InfoCard title="Key Areas of Study" icon="🎯" items={keyAreasOfStudy} />
          </section>

          <section className="syllabus-section">
            <SectionTitle icon="📘">Semester-wise Syllabus</SectionTitle>
            <SyllabusTable title="Semester 1: Core Foundations" data={semester1Syllabus} />
            <SyllabusTable title="Semester 2: Advanced Applications" data={semester2Syllabus} />
          </section>

          <div className="apply-button-container">
              <a 
                  href="https://brpublication.github.io/IGT_FINAL/form.html"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="apply-button"
              >
                  Apply Now
              </a>
          </div>

        </main>
        
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Agriculture Drone Technology Program. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}
