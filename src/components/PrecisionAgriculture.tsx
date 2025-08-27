import React from 'react';

// --- Data Constants ---
// Storing data in constants makes the component's JSX cleaner and easier to manage.

interface SyllabusItem {
  subject: string;
  subtopics: string;
}

const careerOpportunities: string[] = [
  'Precision Agriculture Specialist',
  'IoT & Sensor Technology Consultant',
  'Crop Management Systems Developer',
  'Agricultural Data Analyst',
  'Smart Farming Solutions Engineer',
  'Climate & Weather Prediction Specialist',
  'Agricultural Automation Engineer',
  'Sustainable Agriculture Consultant',
];

const keyAreasOfStudy: string[] = [
  'IoT Sensors & Smart Monitoring',
  'Data-Driven Crop Management',
  'Automated Irrigation Systems',
  'Weather Prediction & Climate Control',
  'Soil Health & Nutrient Management',
  'Crop Yield Optimization',
  'Agricultural Robotics & Automation',
  'Sustainable Farming Practices',
];

const semester1Syllabus: SyllabusItem[] = [
  { subject: 'Fundamentals of Precision Agriculture', subtopics: 'GPS technology, GIS mapping, variable rate technology, site-specific management' },
  { subject: 'IoT & Sensor Technology', subtopics: 'Soil sensors, weather stations, crop monitoring devices, data collection systems' },
  { subject: 'Data Analytics in Agriculture', subtopics: 'Big data processing, statistical analysis, predictive modeling, decision support systems' },
  { subject: 'Smart Irrigation Systems', subtopics: 'Automated watering, moisture sensors, climate-based irrigation, water conservation' },
  { subject: 'Crop Management Software', subtopics: 'Farm management platforms, crop planning tools, yield tracking, record keeping' },
  { subject: 'Practical Lab I', subtopics: 'Sensor installation, data collection, software setup, field mapping exercises' },
];

const semester2Syllabus: SyllabusItem[] = [
  { subject: 'Advanced Crop Monitoring', subtopics: 'Satellite imagery, drone technology, multispectral analysis, disease detection' },
  { subject: 'Climate-Smart Agriculture', subtopics: 'Weather forecasting, climate adaptation, seasonal planning, risk management' },
  { subject: 'Agricultural Automation', subtopics: 'Robotic systems, autonomous vehicles, smart machinery, precision planting' },
  { subject: 'Capstone Project', subtopics: 'Industry-based research project implementing precision agriculture solutions' },
  { subject: 'Practical Lab II', subtopics: 'Advanced monitoring systems, automation testing, data analysis, project implementation' },
];

// --- Reusable Components ---

interface SectionTitleProps {
  icon: string;
  children: React.ReactNode;
}

// A component for rendering section titles with the new theme.
const SectionTitle: React.FC<SectionTitleProps> = ({ icon, children }) => (
  <h2 className="text-4xl font-serif font-bold text-slate-800 mb-8 flex items-center">
    <span className="text-teal-600 mr-4">{icon}</span>
    {children}
  </h2>
);

interface InfoCardProps {
  title: string;
  icon: string;
  items: string[];
}

// A component for rendering list items in cards with the new theme.
const InfoCard: React.FC<InfoCardProps> = ({ title, icon, items }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center">
            <span className="mr-3">{icon}</span>
            {title}
        </h3>
        <ul className="space-y-3 text-lg text-gray-600">
            {items.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

interface SyllabusTableProps {
  title: string;
  data: SyllabusItem[];
}

// A component for rendering the syllabus tables with the new theme.
const SyllabusTable: React.FC<SyllabusTableProps> = ({ title, data }) => (
  <div className="mt-12">
    <h3 className="text-3xl font-serif font-semibold text-slate-800 mb-6 text-center">{title}</h3>
    <div className="overflow-x-auto rounded-xl shadow-2xl">
      <table className="w-full text-left">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-5 text-lg font-semibold tracking-wider">Subject</th>
            <th className="p-5 text-lg font-semibold tracking-wider">Subtopics</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item: SyllabusItem, index: number) => (
            <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-teal-50 transition-colors duration-300`}>
              <td className="p-5 font-medium text-slate-800">{item.subject}</td>
              <td className="p-5 text-slate-600 leading-relaxed">{item.subtopics}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
 );

// --- Main Component ---

export default function PrecisionAgriculture() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
          .font-serif { font-family: 'Poppins', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
        `}
      </style>
      <div className="min-h-screen font-sans text-slate-800">
        
        {/* Page Title Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold tracking-wide leading-tight text-slate-800">
            Master Program in Precision Agriculture
          </h1>
          <p className="mt-4 text-xl text-slate-600">Revolutionizing farming through data-driven technology and smart systems.</p>
        </section>

        {/* Main Content Section */}
        <main className="container mx-auto px-6 py-20 md:px-10">
          
          {/* Introduction */}
          <section className="text-center max-w-4xl mx-auto">
            <SectionTitle icon="🌱">Introduction</SectionTitle>
            <p className="text-xl leading-relaxed text-slate-700">
              The Master's in Precision Agriculture is an advanced postgraduate program designed to transform traditional farming through cutting-edge technology. It combines IoT sensors, data analytics, AI, and automation to create intelligent agricultural systems that maximize crop yields while minimizing resource waste.
            </p>
            <p className="text-xl leading-relaxed text-slate-700 mt-4">
              Students will master data-driven farming techniques, learn to implement smart irrigation systems, and develop skills in crop monitoring and yield optimization using the latest precision agriculture technologies.
            </p>
          </section>

          {/* Info Cards Section */}
          <section className="grid md:grid-cols-2 gap-12 mt-24">
              <InfoCard title="Career Opportunities" icon="💼" items={careerOpportunities} />
              <InfoCard title="Key Areas of Study" icon="🎯" items={keyAreasOfStudy} />
          </section>

          {/* Syllabus */}
          <section className="mt-24">
            <SectionTitle icon="📘">Semester-wise Syllabus</SectionTitle>
            <SyllabusTable title="Semester 1: Core Foundations" data={semester1Syllabus} />
            <SyllabusTable title="Semester 2: Advanced Applications" data={semester2Syllabus} />
          </section>

          {/* Apply Now Button */}
          <div className="text-center mt-24">
              <a 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-xl hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                  Apply Now
              </a>
          </div>

        </main>
        
        {/* Footer */}
        <footer className="bg-slate-900 text-white text-center p-6 mt-20">
            <p>&copy; {new Date().getFullYear()} Precision Agriculture Program. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}
