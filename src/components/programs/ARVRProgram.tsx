import React from 'react';
import { Link } from 'react-router-dom';

const ARVRProgram: React.FC = () => {
  const programData = {
    title: "Augmented & Virtual Reality Program",
    duration: "12 Months",
    level: "Advanced",
    overview: "Comprehensive program covering AR/VR development, 3D modeling, immersive experiences, and spatial computing technologies.",
    highlights: [
      "AR/VR Development",
      "3D Modeling & Animation",
      "Unity & Unreal Engine",
      "Spatial Computing",
      "Immersive Experience Design"
    ],
    curriculum: [
      {
        title: "Foundation Modules",
        topics: [
          "3D Graphics Fundamentals",
          "Computer Vision",
          "Human-Computer Interaction",
          "Spatial Computing",
          "3D Mathematics"
        ]
      },
      {
        title: "AR/VR Development",
        topics: [
          "Unity VR Development",
          "Unreal Engine VR",
          "AR Development (ARKit/ARCore)",
          "3D Modeling (Blender)",
          "Spatial Audio Design"
        ]
      },
      {
        title: "Advanced AR/VR Applications",
        topics: [
          "Mixed Reality Development",
          "Haptic Feedback Systems",
          "Gesture Recognition",
          "Social VR Platforms",
          "AR/VR for Enterprise"
        ]
      }
    ],
    careerOpportunities: [
      "AR/VR Developer",
      "3D Artist",
      "Immersive Experience Designer",
      "Spatial Computing Engineer",
      "AR/VR Content Creator"
    ],
    admissionRequirements: [
      "Basic programming knowledge",
      "3D design skills preferred",
      "Creative thinking",
      "Interest in immersive technology"
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

export default ARVRProgram;
