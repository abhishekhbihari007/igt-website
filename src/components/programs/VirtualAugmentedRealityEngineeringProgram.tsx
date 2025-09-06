import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const VirtualAugmentedRealityEngineeringProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AR and Mixed Reality",
    description: "Train students to develop and design immersive technologies that combine real and virtual environments. Using the latest in AR hardware, software frameworks, and spatial computing, create experiences that blend the digital world with physical space.",
    duration: "12 Months",
    overview: "The Master Program in AR and Mixed Reality trains students to develop and design immersive technologies that combine real and virtual environments. Using the latest in AR hardware, software frameworks, and spatial computing, learners will create experiences that blend the digital world with physical space for various industries.",
    careerOpportunities: [
      "AR/MR Application Developer",
      "Spatial Computing Engineer",
      "Mixed Reality UX Designer",
      "Industry 4.0 Immersive Systems Expert",
      "MR Product Developer (HoloLens, Magic Leap)",
      "Digital Twin Specialist",
      "Healthcare & Training Simulation Engineer"
    ],
    keyAreas: [
      "Augmented Reality Development (ARKit, ARCore)",
      "Mixed Reality Tools: HoloLens, Magic Leap",
      "3D Spatial Mapping and Computer Vision",
      "Interaction Design in Physical/Digital Spaces",
      "Cross-platform XR Frameworks (Unity/Unreal)",
      "Cloud and Edge XR Deployment",
      "Human-Centered Design in Mixed Environments"
    ],
    semester1: [
      "Introduction to AR and MR - History, types, devices, current trends",
      "Unity for Spatial Computing - 3D asset integration, physics, lighting, scripting",
      "AR Development with ARCore/ARKit - Plane detection, motion tracking, occlusion",
      "Interaction Design in AR/MR - Gaze, hand-tracking, audio interaction"
    ],
    semester2: [
      "HoloLens and Mixed Reality Toolkit (MRTK) - Spatial anchors, voice commands, UI/UX",
      "Computer Vision & SLAM - Object tracking, scene understanding",
      "Project: Real-World AR/MR Application - End-to-end AR/MR experience with deployment",
      "Ethics & Future of Mixed Reality - Data privacy, ethics, sustainable interfaces"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default VirtualAugmentedRealityEngineeringProgram;
