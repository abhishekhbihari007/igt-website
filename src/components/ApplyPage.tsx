import React, { useState } from 'react';
import './ApplyPage.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  programInterest: string;
  educationLevel: string;
  currentInstitution: string;
  workExperience: string;
}

const ApplyPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    programInterest: '',
    educationLevel: '',
    currentInstitution: '',
    workExperience: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    // Show success message or redirect
    alert('Application submitted successfully! We will contact you soon.');
  };

  const renderStep1 = () => (
    <div className="form-step">
      <div className="step-header">
        <div className="step-icon">
          <i className="fas fa-user"></i>
        </div>
        <h3>Personal Information</h3>
        <p>Tell us about yourself</p>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            placeholder="Enter your last name"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="nationality">Nationality *</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleInputChange}
          required
          placeholder="Enter your nationality"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step">
      <div className="step-header">
        <div className="step-icon">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <h3>Academic & Professional Background</h3>
        <p>Share your educational and work experience</p>
      </div>
      
      <div className="form-group">
        <label htmlFor="programInterest">Program of Interest *</label>
        <select
          id="programInterest"
          name="programInterest"
          value={formData.programInterest}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a program</option>
          <option value="ai">AI Program</option>
          <option value="robotics">Robotics Program</option>
          <option value="cybersecurity">Cybersecurity Program</option>
          <option value="data-science">Data Science Program</option>
          <option value="agriculture">Agriculture Program</option>
          <option value="biotechnology">Biotechnology Program</option>
          <option value="web-development">Web Development Program</option>
          <option value="mobile-app-development">Mobile App Development Program</option>
          <option value="cloud-computing">Cloud Computing Program</option>
          <option value="blockchain">Blockchain Program</option>
          <option value="iot">IoT Program</option>
          <option value="game-development">Game Development Program</option>
          <option value="digital-marketing">Digital Marketing Program</option>
          <option value="fintech">Fintech Program</option>
          <option value="electric-vehicle">Electric Vehicle Program</option>
          <option value="quantum-computing">Quantum Computing Program</option>
          <option value="network-engineering">Network Engineering Program</option>
          <option value="software-engineering">Software Engineering Program</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="educationLevel">Highest Education Level *</label>
          <select
            id="educationLevel"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleInputChange}
            required
          >
            <option value="">Select education level</option>
            <option value="high-school">High School</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="workExperience">Work Experience (Years)</label>
          <select
            id="workExperience"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleInputChange}
          >
            <option value="">Select experience level</option>
            <option value="0">No experience</option>
            <option value="1-2">1-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="currentInstitution">Current Institution/Company</label>
        <input
          type="text"
          id="currentInstitution"
          name="currentInstitution"
          value={formData.currentInstitution}
          onChange={handleInputChange}
          placeholder="Enter your current institution or company"
        />
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="apply-page">
      {/* Hero Section */}
      <div className="apply-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Apply for Your Dream Program</h1>
            <p>Take the first step towards your future career in technology and innovation</p>
            <div className="hero-features">
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>50+ Cutting-edge Programs</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Expert Faculty</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Industry Connections</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Start Your Journey</h3>
              <p>Join thousands of successful graduates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="apply-content">
        <div className="container">
          <div className="application-form-container">
            {/* Form Header */}
            <div className="form-header">
              <div className="form-header-content">
                <h2>Application Form</h2>
                <p>Complete your application in just 2 simple steps</p>
              </div>
              
              {/* Progress Bar */}
              <div className="progress-bar">
                <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
                  <div className="step-indicator">
                    <span className="step-number">1</span>
                    <i className="fas fa-check step-check"></i>
                  </div>
                  <span className="step-label">Personal Info</span>
                </div>
                <div className="progress-line"></div>
                <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
                  <div className="step-indicator">
                    <span className="step-number">2</span>
                    <i className="fas fa-check step-check"></i>
                  </div>
                  <span className="step-label">Background</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="application-form">
              {renderStepContent()}

              {/* Navigation */}
              <div className="form-navigation">
                {currentStep > 1 && (
                  <button type="button" onClick={prevStep} className="btn-secondary">
                    <i className="fas fa-arrow-left"></i>
                    Previous
                  </button>
                )}
                {currentStep < 2 ? (
                  <button type="button" onClick={nextStep} className="btn-primary">
                    Next
                    <i className="fas fa-arrow-right"></i>
                  </button>
                ) : (
                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Submit Application
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
