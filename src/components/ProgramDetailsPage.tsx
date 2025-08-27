import './ProgramDetails.css';

const ProgramDetailsPage = () => {
    return (
        <div className="program-details-page">
            {/* Program Banner */}
            <div className="program-banner">
                <div className="banner-content">
                    <h1>Master Program in Advanced<br />Technologies in Agriculture</h1>
                    <p className="program-banner-subtitle">
                        Transforming Agriculture Through Innovation & Technology
                    </p>
                </div>
            </div>

            {/* All Content Sections */}
            <div className="program-content-wrapper">
                {/* Introduction Section */}
                <div className="program-content-section">
                    <div className="section-container">
                        <div className="section-header">
                            <div className="section-icon">
                                <i className="fas fa-seedling"></i>
                            </div>
                            <h2>Introduction</h2>
                        </div>
                        <p className="section-subtitle">
                            The Master's Program in Advanced Technologies in Agriculture aims to equip students with modern tools and knowledge to transform traditional farming practices. It integrates precision farming, automation, AI, IoT, drone tech, and sustainable innovations to build the future of smart agriculture. Students gain hands-on experience with technologies shaping global agri-systems.
                        </p>
                        
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
                                <div className="stat-value">2</div>
                                <div className="stat-label">Years Duration</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">24/7</div>
                                <div className="stat-label">Lab Access</div>
                            </div>
                        </div>

                        <div className="program-features">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-star"></i>
                                </div>
                                <h2>Program Features</h2>
                            </div>
                            <div className="features-grid">
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <i className="fas fa-laptop-code"></i>
                                    </div>
                                    <h4>Hands-on Training</h4>
                                    <p>Practical experience with real agricultural technology systems and equipment</p>
                                </div>
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <h4>Industry Mentorship</h4>
                                    <p>Direct guidance from agricultural technology professionals and experts</p>
                                </div>
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <h4>Global Network</h4>
                                    <p>Connect with international students and professionals in agri-tech</p>
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
                                    <h3>AgriTech Solution Architect</h3>
                                    <p>Design comprehensive agricultural technology solutions for modern farming operations</p>
                                </div>
                            </div>
                            <div className="career-card">
                                <div className="career-icon">
                                    <i className="fas fa-crosshairs"></i>
                                </div>
                                <div className="career-content">
                                    <h3>Precision Agriculture Specialist</h3>
                                    <p>Implement precision farming techniques using GPS, sensors, and data analytics</p>
                                </div>
                            </div>
                            <div className="career-card">
                                <div className="career-icon">
                                    <i className="fas fa-robot"></i>
                                </div>
                                <div className="career-content">
                                    <h3>AI/ML Expert in Farming Analytics</h3>
                                    <p>Develop machine learning models for crop prediction and yield optimization</p>
                                </div>
                            </div>
                            <div className="career-card">
                                <div className="career-icon">
                                    <i className="fas fa-circle"></i>
                                </div>
                                <div className="career-content">
                                    <h3>Drone & IoT Integration Engineer</h3>
                                    <p>Build and maintain automated drone systems for agricultural monitoring</p>
                                </div>
                            </div>
                            <div className="career-card">
                                <div className="career-icon">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                <div className="career-content">
                                    <h3>Remote Sensing & GIS Analyst</h3>
                                    <p>Analyze satellite imagery and geographic data for agricultural insights</p>
                                </div>
                            </div>
                            <div className="career-card">
                                <div className="career-icon">
                                    <i className="fas fa-flask"></i>
                                </div>
                                <div className="career-content">
                                    <h3>R&D Scientist in Sustainable AgTech</h3>
                                    <p>Research and develop sustainable agricultural technologies and practices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Curriculum Section */}
                <div className="program-content-section">
                    <div className="section-container">
                        <div className="section-header">
                            <div className="section-icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <h2>Key Areas of Study</h2>
                        </div>
                        
                        <div className="areas-grid">
                            <div className="area-card">
                                <div className="area-icon">
                                    <i className="fas fa-tractor"></i>
                                </div>
                                <span>Smart Farming & Precision Agriculture</span>
                            </div>
                            <div className="area-card">
                                <div className="area-icon">
                                    <i className="fas fa-satellite-dish"></i>
                                </div>
                                <span>Remote Sensing & Satellite Technologies</span>
                            </div>
                            <div className="area-card">
                                <div className="area-icon">
                                    <i className="fas fa-wifi"></i>
                                </div>
                                <span>IoT & Wireless Sensor Networks</span>
                            </div>
                            <div className="area-card">
                                <div className="area-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <span>AI & Data Science for Agriculture</span>
                            </div>
                            <div className="area-card">
                                <div className="area-icon">
                                    <i className="fas fa-drone"></i>
                                </div>
                                <span>Agri Drones and Robotics</span>
                            </div>
                            <div className="area-card">
                                <div className="area-icon">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                <span>Climate-Smart Agriculture & Sustainability</span>
                            </div>
                        </div>

                        <div className="semester-section">
                            <h3>Semester 1: Core Concepts & Tech Foundations</h3>
                            <div className="syllabus-table">
                                <div className="table-header">
                                    <div>Subject</div>
                                    <div>Subtopics</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">Introduction to Smart Agriculture</div>
                                    <div className="subtopics">Smart farms, automation, impact of emerging technologies</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">Remote Sensing & GIS in Agriculture</div>
                                    <div className="subtopics">Crop mapping, NDVI, multispectral data, decision support</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">IoT for Agri Systems</div>
                                    <div className="subtopics">Sensor networks, wireless data, real-time environment monitoring</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">AI & ML Fundamentals</div>
                                    <div className="subtopics">Prediction models, image classification, precision inputs</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">Lab I - Smart Farm Setup</div>
                                    <div className="subtopics">IoT deployment, mobile app integration, data visualization</div>
                                </div>
                            </div>
                        </div>

                        <div className="semester-section">
                            <h3>Semester 2: Advanced Integration & Applications</h3>
                            <div className="syllabus-table">
                                <div className="table-header">
                                    <div>Subject</div>
                                    <div>Subtopics</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">Agri Drones & Robotics</div>
                                    <div className="subtopics">UAV tech, robotic seeding/harvesting, automation in the field</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">Big Data & Predictive Analytics</div>
                                    <div className="subtopics">Cloud storage, pattern analysis, crop yield prediction models</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">Sustainable & Climate-Smart Agriculture</div>
                                    <div className="subtopics">Water use efficiency, carbon reduction, regenerative practices</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">AgriTech Entrepreneurship</div>
                                    <div className="subtopics">Startup building, innovation in food-tech, funding opportunities</div>
                                </div>
                                <div className="table-row">
                                    <div className="subject">Capstone Project</div>
                                    <div className="subtopics">Tech-enabled solution to real-life agriculture problem</div>
                                </div>
                            </div>
                        </div>

                        <div className="admission-requirements">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-clipboard-check"></i>
                                </div>
                                <h2>Admission Requirements</h2>
                            </div>
                            <ul className="requirements-list">
                                <li>Bachelor's degree in Agriculture, Engineering, or related field</li>
                                <li>Minimum 60% marks in qualifying examination</li>
                                <li>Proficiency in English language</li>
                                <li>Basic knowledge of computer applications</li>
                                <li>Statement of Purpose (500-1000 words)</li>
                                <li>Two letters of recommendation</li>
                                <li>Resume/CV highlighting relevant experience</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Apply Section */}
                <div className="program-content-section">
                    <div className="section-container">
                        <div className="apply-section">
                            <div className="apply-content">
                                <h3>Ready to Transform Agriculture?</h3>
                                <p>Join the next generation of agricultural innovators and shape the future of farming with cutting-edge technology.</p>
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
