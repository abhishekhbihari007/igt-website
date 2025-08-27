// ============== 🎓 PROGRAM DETAILS PAGE COMPONENT ==============
// This component displays detailed information about a specific academic program
// It receives the program slug from the URL and displays comprehensive program information
// including introduction, career opportunities, curriculum, and application details

// Import the component-specific CSS file for styling
import './ProgramDetails.css';
// Import React hooks for state management and navigation
import { useLocation } from 'react-router-dom';
// Import the new Agriculture Drone Technology component
import AgricultureDroneTechnology from './AgricultureDroneTechnology';
// Import the new Precision Agriculture component
import PrecisionAgriculture from './PrecisionAgriculture';

// Main component function - renders the complete program details page
const ProgramDetailsPage = () => {
    // Get the program data passed through navigation state
    const location = useLocation();
    const programData = location.state?.program;

    // If no program data is available, show a loading or error state
    if (!programData) {
        return (
            <div className="program-details-page">
                <div className="container">
                    <div className="error-state">
                        <h2>Program Not Found</h2>
                        <p>The requested program could not be loaded. Please go back to the programs page and try again.</p>
                    </div>
                </div>
            </div>
        );
    }

    // Check if this is the AI & Data Analytics program and render specific content
    if (programData.title.toLowerCase().includes("ai & data analytics")) {
        return <AIDataAnalyticsProgram programData={programData} />;
    }

    // Debug: Log the program title to see what we're working with
    console.log("Program title:", programData.title);
    console.log("Program title lowercase:", programData.title.toLowerCase());
    console.log("Checking for Agriculture Drones match...");
    
    // Check if this is the Agriculture Drones program and render specific content
    if (programData.title === "MASTER PROGRAM in Agriculture Drones") {
        console.log("EXACT MATCH FOUND! Rendering AgricultureDroneTechnology component");
        return <AgricultureDroneTechnology key={`agri-drone-${Date.now()}`} />;
    }
    
    // Also check with lowercase for backup
    if (programData.title.toLowerCase().includes("agriculture drones")) {
        console.log("Lowercase match found! Rendering AgricultureDroneTechnology component");
        return <AgricultureDroneTechnology key={`agri-drone-${Date.now()}`} />;
    }
    
        console.log("No Agriculture Drones match found, checking for Precision Agriculture...");
    
    // Check if this is the Precision Agriculture program and render specific content
    if (programData.title === "MASTER PROGRAM in Precision Agriculture") {
        console.log("EXACT MATCH FOUND! Rendering PrecisionAgriculture component");
        console.log("Program title matched:", programData.title);
        return <PrecisionAgriculture key={`precision-agri-${Date.now()}`} />;
    }
    
    // Check if this is the Agriculture Drones program and render specific content
    if (programData.title === "MASTER PROGRAM in Agriculture Drones") {
        console.log("EXACT MATCH FOUND! Rendering AgricultureDroneTechnology component");
        console.log("Program title matched:", programData.title);
        return <AgricultureDroneTechnology key={`agri-drone-${Date.now()}`} />;
    }
    
    console.log("No specific program match found, using default page");
    
    // Default program details page for other programs
    return (
        <div className="program-details-page">
            {/* ============== PROGRAM BANNER SECTION ============== */}
            {/* Hero banner with program title and subtitle */}
            <div className="program-banner">
                <div className="banner-content">
                    {/* Main program title with line break for better readability */}
                    <h1>{programData.title}</h1>
                    
                    {/* Program subtitle describing the program's focus */}
                    <p className="program-banner-subtitle">
                        {programData.description || "Transform your future with cutting-edge technology education"}
                    </p>
                </div>
            </div>

            {/* ============== MAIN CONTENT SECTIONS ============== */}
            {/* Container for all program content sections */}
            <div className="program-content-wrapper">
                
                {/* ============== INTRODUCTION SECTION ============== */}
                {/* Overview of the program and its key features */}
                <div className="program-content-section">
                    <div className="section-container">
                        {/* Section header with icon and title */}
                        <div className="section-header">
                            <div className="section-icon">
                                <i className="fas fa-seedling"></i>
                            </div>
                            <h2>Introduction</h2>
                        </div>
                        
                        {/* Program description */}
                        <p className="section-subtitle">
                            {programData.description || "This program aims to equip students with modern tools and knowledge to transform traditional practices through innovation and technology."}
                        </p>
                        <p className="section-subtitle">
                            Our comprehensive curriculum covers cutting-edge AI technologies, machine learning algorithms, and advanced data analytics methodologies that are essential for today's digital economy.
                        </p>
                        <p className="section-subtitle">
                            Students will gain hands-on experience with industry-standard tools and platforms, preparing them for successful careers in the rapidly evolving field of artificial intelligence and data science.
                        </p>
                        <p className="section-subtitle">
                            The program emphasizes practical applications through real-world projects, case studies, and industry collaborations, ensuring graduates are job-ready upon completion.
                        </p>
                        <p className="section-subtitle">
                            We focus on developing both technical skills and business acumen, enabling students to bridge the gap between data science and strategic decision-making in organizations.
                        </p>
                        <p className="section-subtitle">
                            Our faculty consists of industry experts and academic researchers who bring current market insights and cutting-edge research findings into the classroom.
                        </p>
                        <p className="section-subtitle">
                            The program includes specialized tracks in machine learning, business analytics, and AI applications, allowing students to tailor their education to their career goals.
                        </p>
                        <p className="section-subtitle">
                            Graduates will be equipped with the skills to implement AI solutions, analyze big data, and drive innovation across various industries including healthcare, finance, and technology.
                        </p>
                        
                        {/* Key statistics grid showing program highlights */}
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-value">95%</div>
                                <div className="stat-label">Job Placement Rate</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">50+</div>
                                <div className="stat-label">Industry Partners</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">{programData.duration || "2 Years"}</div>
                                <div className="stat-label">Duration</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">{programData.type || "Master's Degree"}</div>
                                <div className="stat-label">Program Type</div>
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
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <i className="fas fa-laptop-code"></i>
                                    </div>
                                    <h4>Hands-on Training</h4>
                                    <p>Practical experience with real technology systems and equipment</p>
                                </div>
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <h4>Industry Mentorship</h4>
                                    <p>Direct guidance from technology professionals and experts</p>
                                </div>
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <h4>Global Network</h4>
                                    <p>Connect with international students and professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Careers Section */}
                <div className="program-content-section">
                    <div className="section-container">
                        <div className="section-header">
                            <div className="section-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h2>Career Opportunities</h2>
                        </div>
                        
                        <div className="career-grid">
                            <div className="career-card">
                                <div className="career-icon">
                                    <i className="fas fa-brain"></i>
                                </div>
                                <div className="career-content">
                                    <h3>Technology Specialist</h3>
                                    <p>Design comprehensive technology solutions for modern operations</p>
                                </div>
                            </div>
                            <div className="career-card">
                                <div className="career-icon">
                                    <i className="fas fa-crosshairs"></i>
                                </div>
                                <div className="career-content">
                                    <h3>Innovation Expert</h3>
                                    <p>Implement cutting-edge techniques using advanced technologies</p>
                                </div>
                            </div>
                            <div className="career-card">
                                <div className="career-icon">
                                    <i className="fas fa-robot"></i>
                                </div>
                                <div className="career-content">
                                    <h3>AI/ML Specialist</h3>
                                    <p>Develop intelligent models for prediction and optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Apply Section */}
                <div className="program-content-section">
                    <div className="section-container">
                        <div className="apply-section">
                            <div className="apply-content">
                                <h3>Ready to Transform Your Future?</h3>
                                <p>Join the next generation of technology innovators and shape the future with cutting-edge knowledge.</p>
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

// ============== AI & DATA ANALYTICS PROGRAM COMPONENT ==============
// Specialized component for the AI & Data Analytics program with custom content
const AIDataAnalyticsProgram = ({ programData }: { programData: any }) => {
    // Semester data for the AI & Data Analytics program
    const semester1Data = [
        { subject: 'Foundations of AI & ML', subtopics: 'Supervised & unsupervised learning, neural networks, model training' },
        { subject: 'Data Mining & Warehousing', subtopics: 'ETL processes, data marts, clustering & association techniques' },
        { subject: 'Statistics for Data Science', subtopics: 'Probability, hypothesis testing, regression, inferential stats' },
        { subject: 'Python & Data Visualization', subtopics: 'NumPy, Pandas, Matplotlib, Seaborn, Dash/Plotly' },
        { subject: 'Lab I – ML Models', subtopics: 'Hands-on with datasets in healthcare, agriculture, finance' },
    ];

    const semester2Data = [
        { subject: 'Deep Learning & Neural Networks', subtopics: 'CNNs, RNNs, LSTMs, model tuning, Keras/PyTorch' },
        { subject: 'Big Data Analytics', subtopics: 'Hadoop, Spark, Hive, distributed data processing' },
        { subject: 'Natural Language Processing', subtopics: 'Text classification, sentiment analysis, transformers' },
        { subject: 'AI Ethics & Explainability', subtopics: 'Bias, fairness, transparency, model interpretability' },
        { subject: 'Capstone Project', subtopics: 'End-to-end AI/Analytics solution to a real industry problem' },
    ];

    return (
        <div className="ai-data-analytics-program">
            {/* Header Section */}
            <header className="ai-header">
                <div className="container">
                    <h1>{programData.title}</h1>
                    <p>Unlock the power of data and artificial intelligence to shape the future.</p>
                </div>
            </header>

            <main>
                {/* Introduction Section */}
                <section className="ai-section">
                    <div className="container">
                        <div className="section-content">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-brain"></i>
                                </div>
                                <h2>Introduction</h2>
                            </div>
                            <p>
                                {programData.description || "The Master Program in AI & Data Analytics is designed to empower students with the ability to extract actionable insights from data using advanced Artificial Intelligence techniques. It blends machine learning, statistical modeling, big data processing, and modern AI tools to build intelligent, data-driven systems and solutions."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Career Opportunities Section */}
                <section className="ai-section ai-section-alt">
                    <div className="container">
                        <div className="section-content">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <h2>Career Opportunities</h2>
                            </div>
                            <div className="career-list">
                                <div className="career-item">Data Scientist / Machine Learning Engineer</div>
                                <div className="career-item">AI & Analytics Consultant</div>
                                <div className="career-item">Business Intelligence Analyst</div>
                                <div className="career-item">Big Data Engineer</div>
                                <div className="career-item">Data Visualization Expert</div>
                                <div className="career-item">Product Analyst / AI Product Manager</div>
                                <div className="career-item">Predictive Modeling Specialist</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Areas of Study Section */}
                <section className="ai-section">
                    <div className="container">
                        <div className="section-content">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-crosshairs"></i>
                                </div>
                                <h2>Key Areas of Study</h2>
                            </div>
                            <div className="study-areas">
                                <div className="study-item">Machine Learning & Deep Learning</div>
                                <div className="study-item">Big Data Analytics & Cloud Platforms</div>
                                <div className="study-item">Data Mining & Data Warehousing</div>
                                <div className="study-item">Predictive Analytics & Forecasting</div>
                                <div className="study-item">Natural Language Processing</div>
                                <div className="study-item">Business Intelligence Tools & Dashboards</div>
                                <div className="study-item">Responsible AI and Ethics</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Syllabus Section */}
                <section className="ai-section ai-section-alt">
                    <div className="container">
                        <div className="section-content">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-book-open"></i>
                                </div>
                                <h2>Semester-wise Syllabus</h2>
                            </div>
                            
                            {/* Semester 1 */}
                            <div className="syllabus-section">
                                <h3>Semester 1: Core AI and Analytics</h3>
                                <div className="syllabus-grid">
                                    {semester1Data.map((item, index) => (
                                        <div key={index} className="syllabus-item">
                                            <h4>{item.subject}</h4>
                                            <p>{item.subtopics}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Semester 2 */}
                            <div className="syllabus-section">
                                <h3>Semester 2: Advanced Analytics & Applications</h3>
                                <div className="syllabus-grid">
                                    {semester2Data.map((item, index) => (
                                        <div key={index} className="syllabus-item">
                                            <h4>{item.subject}</h4>
                                            <p>{item.subtopics}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Apply Section */}
                <section className="ai-apply-section">
                    <div className="container">
                        <div className="apply-content">
                            <h3>Ready to Shape the Future with AI?</h3>
                            <a href="https://brpublication.github.io/IGT_FINAL/form.html" target="_blank" rel="noopener noreferrer" className="apply-button">
                                Apply Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProgramDetailsPage;
