import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const IoTProgram: React.FC = () => {
  const programData = {
    title: "Master Program in IoT and Embedded Systems",
    description: "Prepare engineers for the future of smart, connected devices and intelligent systems. Blend real-time embedded development with IoT communication protocols, cloud integration, and hardware-software co-design for automation, healthcare, industry, agriculture, and smart cities.",
    duration: "12 Months",
    overview: "The Master Program in IoT and Embedded Systems is designed to prepare engineers for the future of smart, connected devices and intelligent systems. This program blends real-time embedded development with IoT communication protocols, cloud integration, and hardware-software co-design, enabling graduates to innovate in automation, healthcare, industry, agriculture, and smart cities.",
    careerOpportunities: [
      "IoT Systems Architect",
      "Embedded Systems Engineer",
      "Firmware Developer",
      "Wireless Sensor Network Specialist",
      "Industrial IoT (IIoT) Engineer",
      "Smart Device Product Developer",
      "Edge AI & Embedded ML Developer"
    ],
    keyAreas: [
      "Embedded C/C++ Programming & RTOS",
      "IoT Communication Protocols (MQTT, CoAP)",
      "Microcontrollers (ARM Cortex, ESP32, STM32)",
      "Sensor Integration & Actuators",
      "Wireless Communication (BLE, LoRa, Zigbee)",
      "Cloud Integration (AWS, Azure, Firebase)",
      "Security in Embedded and IoT Systems"
    ],
    semester1: [
      "Embedded C & Microcontroller Programming - Registers, GPIO, timers, interrupts, UART, SPI",
      "RTOS Concepts & Applications - Tasks, semaphores, scheduling, FreeRTOS, CMSIS",
      "Digital Electronics for Embedded Devices - Logic gates, ADC/DAC, signal interfacing",
      "Embedded Systems Lab I - Hands-on projects with Arduino/STM32/ESP32"
    ],
    semester2: [
      "IoT Architecture & Protocols - MQTT, HTTP, CoAP, Node-RED, IoT Gateway Design",
      "Cloud & Mobile Integration - Firebase, AWS IoT, REST APIs, IoT Dashboards",
      "Security & Cryptography in IoT - Data encryption, secure boot, TLS, authentication",
      "Capstone Project - End-to-end IoT product development & deployment"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default IoTProgram;
