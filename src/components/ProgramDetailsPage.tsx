// ============== 🎓 PROGRAM DETAILS PAGE COMPONENT ==============
// This component displays detailed information about a specific academic program
// It receives the program slug from the URL and displays comprehensive program information
// including introduction, career opportunities, curriculum, and application details

// Import the component-specific CSS file for styling
import './ProgramDetails.css';
// Import React hooks for state management and navigation
import { useLocation } from 'react-router-dom';


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

    // Default program details page for all programs
    
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



export default ProgramDetailsPage;
