import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const MobileAppDevelopmentProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Mobile App Development",
    description: "Create innovative mobile applications for iOS and Android",
    duration: "2 Years (4 Semesters)",
    overview: "Our Mobile App Development Program covers the complete mobile app development lifecycle. Students learn iOS and Android development, cross-platform solutions, UI/UX design, and mobile app deployment.",
    careerOpportunities: [
      "Mobile App Developer",
      "iOS Developer",
      "Android Developer",
      "Cross-Platform Developer",
      "Mobile UI/UX Designer",
      "Mobile App Consultant"
    ],
    keyAreas: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Development",
      "Mobile UI/UX Design",
      "Mobile App Testing",
      "App Store Deployment"
    ],
    semester1: [
      "Introduction to Mobile Development",
      "Programming Fundamentals",
      "Mobile UI/UX Basics",
      "iOS Development Basics",
      "Android Development Basics",
      "Mobile App Design"
    ],
    semester2: [
      "Advanced iOS Development",
      "Advanced Android Development",
      "Cross-Platform Development",
      "Mobile App Testing",
      "App Store Deployment",
      "Capstone Project Planning"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default MobileAppDevelopmentProgram;
