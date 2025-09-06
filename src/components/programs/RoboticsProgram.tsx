import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const RoboticsProgram: React.FC = () => {
  const programData = {
    title: "Master Program in AI & Robotics",
    description: "Integrate Artificial Intelligence, Machine Learning, and Robotics. Prepare for a future of intelligent machines, autonomous systems, and human-robot collaboration across industries like healthcare, agriculture, defense, and manufacturing.",
    duration: "12 Months",
    overview: "The Master's Program in AI & Robotics is an interdisciplinary curriculum focused on integrating Artificial Intelligence, Machine Learning, and Robotics. It aims to prepare students for a future of intelligent machines, autonomous systems, and human-robot collaboration across industries like healthcare, agriculture, defense, and manufacturing.",
    careerOpportunities: [
      "AI & ML Engineer",
      "Robotics Software Developer",
      "Automation Engineer",
      "Computer Vision Expert",
      "AI Research Scientist",
      "Robotic Process Automation (RPA) Developer",
      "Embedded Systems & Control Engineer"
    ],
    keyAreas: [
      "Artificial Intelligence & Deep Learning",
      "Robotics Design & Mechatronics",
      "Computer Vision and Image Processing",
      "Autonomous Navigation Systems",
      "Human-Robot Interaction (HRI)",
      "IoT, Sensors, and Actuators",
      "Ethics in AI and Responsible Robotics"
    ],
    semester1: [
      "Introduction to AI & ML - Supervised & unsupervised learning, regression, clustering, neural networks",
      "Robotics Fundamentals - Mechanics, kinematics, actuators, sensors, robot control systems",
      "Python for AI - NumPy, Pandas, Scikit-learn, TensorFlow basics",
      "Embedded Systems - Microcontrollers (Arduino/Raspberry Pi), interfacing, real-time programming",
      "Lab I – Robot Programming - Basic robot arm control, sensor inputs, obstacle avoidance logic"
    ],
    semester2: [
      "Deep Learning for Robotics - CNNs, RNNs, object recognition, reinforcement learning",
      "Computer Vision & Image Processing - OpenCV, real-time detection, image segmentation, gesture recognition",
      "Autonomous Navigation - SLAM, path planning, GPS & LiDAR, obstacle detection",
      "Ethical AI and Robotics - Bias, transparency, ethical frameworks, safety design in robotics",
      "Capstone Project - Develop and demo an intelligent autonomous robot system"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default RoboticsProgram;
