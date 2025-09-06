import React, { useState } from 'react';
import './ApplyPage.css';

// --- TYPE DEFINITIONS ---
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    highSchool: string;
    graduationDate: string;
    gpa: string;
    program: string;
}

// --- HELPER & UI COMPONENTS ---

interface IconProps {
    path: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ path, className = "icon" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d={path} clipRule="evenodd" />
    </svg>
);

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
    stepTitles: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, stepTitles }) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                {stepTitles.map((title, index) => {
                    const step = index + 1;
                    const isActive = step <= currentStep;
                    return (
                        <React.Fragment key={step}>
                            <div className="progress-step">
                                <div className={`progress-step-circle ${isActive ? 'active' : ''}`}>
                                    <span className="progress-step-number">{step}</span>
                                </div>
                                <p className={`progress-step-title ${isActive ? 'active' : ''}`}>{title}</p>
                            </div>
                            {step < totalSteps && (
                                <div className={`progress-connector ${isActive && currentStep > step ? 'active' : ''}`}></div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

interface FormInputProps {
    id: keyof FormData;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    required?: boolean;
    iconPath?: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type = 'text', value, onChange, placeholder, required = true, iconPath }) => (
    <div className="form-group">
        <label htmlFor={id} className="form-label">
            {label} {required && <span className="required-asterisk">*</span>}
        </label>
        <div className="input-wrapper">
            {iconPath && <div className="input-icon-wrapper"><Icon path={iconPath} className="input-icon" /></div>}
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`form-input ${iconPath ? 'with-icon' : ''}`}
            />
        </div>
    </div>
);

interface FormSelectProps {
    id: keyof FormData;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
    required?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({ id, label, value, onChange, children, required = true }) => (
    <div className="form-group">
        <label htmlFor={id} className="form-label">
            {label} {required && <span className="required-asterisk">*</span>}
        </label>
        <select
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required={required}
            className="form-select"
        >
            {children}
        </select>
    </div>
);


// --- FORM STEP COMPONENTS ---

interface StepProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Step1PersonalInfo: React.FC<StepProps> = ({ formData, handleChange }) => (
    <div>
        <h3 className="step-heading">Personal Information</h3>
        <div className="grid-2-col">
            <FormInput id="firstName" label="First Name" value={formData.firstName} onChange={handleChange} placeholder="e.g., John" iconPath="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
            <FormInput id="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} placeholder="e.g., Doe" />
        </div>
        <FormInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" iconPath="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
        <FormInput id="dob" label="Date of Birth" type="date" value={formData.dob} onChange={handleChange} />
    </div>
);

const Step2AcademicInfo: React.FC<StepProps> = ({ formData, handleChange }) => (
    <div>
        <h3 className="step-heading">Academic Information</h3>
        <FormInput id="highSchool" label="High School Name" value={formData.highSchool} onChange={handleChange} placeholder="e.g., Northwood High" />
        <div className="grid-2-col">
            <FormInput id="graduationDate" label="Graduation Date" type="month" value={formData.graduationDate} onChange={handleChange} />
            <FormInput id="gpa" label="Overall GPA" type="text" value={formData.gpa} onChange={handleChange} placeholder="e.g., 3.8 / 4.0" />
        </div>
        <FormSelect id="program" label="Desired Program of Study" value={formData.program} onChange={handleChange}>
            <option value="">Select a program</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Biology">Biology</option>
            <option value="Fine Arts">Fine Arts</option>
        </FormSelect>
    </div>
);

const Step3Review: React.FC<{ formData: FormData }> = ({ formData }) => (
    <div>
        <h3 className="step-heading text-center">Review Your Application</h3>
        <div className="review-container">
            {Object.entries(formData).map(([key, value]) => {
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                return (
                    <div key={key} className="review-row">
                        <strong className="review-label">{label}:</strong>
                        <span className="review-value">{value || 'Not provided'}</span>
                    </div>
                );
            })}
        </div>
    </div>
);

// --- MAIN APP COMPONENT ---

export default function ApplyPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        firstName: '', lastName: '', email: '', dob: '', highSchool: '',
        graduationDate: '', gpa: '', program: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [animationClass, setAnimationClass] = useState('animate-fade-in');

    const stepTitles = ["Personal", "Academic", "Review"];
    const totalSteps = stepTitles.length;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value as string }));
    };

    const changeStep = (newStep: number) => {
        setAnimationClass('animate-fade-out');
        setTimeout(() => {
            setCurrentStep(newStep);
            setAnimationClass('animate-fade-in');
        }, 300);
    };

    const nextStep = () => currentStep < totalSteps && changeStep(currentStep + 1);
    const prevStep = () => currentStep > 1 && changeStep(currentStep - 1);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            // Show loading state
            setAnimationClass('animate-fade-out');
            
            // Generate application ID
            const applicationId = `IGT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
            
            // Store application data locally
            const applicationData = {
                ...formData,
                applicationId,
                submissionDate: new Date().toISOString(),
                status: 'Pending'
            };
            
            // Save to localStorage for demo purposes
            const existingApplications = JSON.parse(localStorage.getItem('applications') || '[]');
            existingApplications.push(applicationData);
            localStorage.setItem('applications', JSON.stringify(existingApplications));
            localStorage.setItem('lastApplicationId', applicationId);
            
            setTimeout(() => setIsSubmitted(true), 300);
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to submit application. Please try again.');
            setAnimationClass('animate-fade-in');
        }
    };
    
    const renderStep = () => {
        switch (currentStep) {
            case 1: return <Step1PersonalInfo formData={formData} handleChange={handleChange} />;
            case 2: return <Step2AcademicInfo formData={formData} handleChange={handleChange} />;
            case 3: return <Step3Review formData={formData} />;
            default: return null;
        }
    };
    
    if (isSubmitted) {
        return (
            <div className="apply-page">
                <div className="container submitted-page">
                <div className="form-container submitted-card">
                    <div className="submitted-icon-wrapper">
                        <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="submitted-icon" />
                    </div>
                    <h2 className="submitted-title">Application Submitted!</h2>
                    <p className="submitted-text">Congratulations, {formData.firstName}! Your application has been received and saved to our database.</p>
                    <p className="submitted-text">Application ID: <strong>{localStorage.getItem('lastApplicationId') || 'N/A'}</strong></p>
                    <p className="submitted-text">We will be in touch shortly via email at <strong>{formData.email}</strong>.</p>
                </div>
                </div>
            </div>
        );
    }

    return (
        <div className="apply-page">
            <div className="container">
            <header className="app-header">
                <p className="subtitle">Where Innovation Meets Excellence • Shaping Tomorrow's Leaders Today</p>
            </header>

            <div className="form-container">
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} stepTitles={stepTitles} />
                <form onSubmit={handleSubmit}>
                    <div className={`step-content ${animationClass}`}>
                        {renderStep()}
                    </div>
                    
                    <div className="form-footer">
                        <button type="button" onClick={prevStep} disabled={currentStep === 1} className="btn btn-secondary">
                            Back
                        </button>
                        {currentStep < totalSteps ? (
                            <button type="button" onClick={nextStep} className="btn btn-primary">
                                Next Step &rarr;
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-submit">
                                Submit Application
                            </button>
                        )}
                    </div>
                </form>
            </div>

            </div>
        </div>
    );
}

