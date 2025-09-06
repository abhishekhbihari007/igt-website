import React, { useState, useEffect } from 'react';
import './AdminPage.css';

interface Application {
    applicationId: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    highSchool: string;
    graduationDate: string;
    gpa: string;
    program: string;
    submissionDate: string;
    status: string;
}

const AdminPage: React.FC = () => {
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            setLoading(true);
            const data = JSON.parse(localStorage.getItem('applications') || '[]');
            setApplications(data);
        } catch (err) {
            console.error('Error fetching applications:', err);
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const downloadCSV = async () => {
        try {
            // Create CSV content from applications data
            if (applications.length === 0) {
                alert('No applications to download');
                return;
            }
            
            const headers = [
                'Application ID',
                'First Name', 
                'Last Name',
                'Email',
                'Date of Birth',
                'High School',
                'Graduation Date',
                'GPA',
                'Program',
                'Submission Date',
                'Status'
            ];
            
            const csvContent = [
                headers.join(','),
                ...applications.map(app => [
                    app.applicationId,
                    app.firstName,
                    app.lastName,
                    app.email,
                    app.dob,
                    app.highSchool,
                    app.graduationDate,
                    app.gpa,
                    app.program,
                    app.submissionDate,
                    app.status
                ].map(field => `"${field || ''}"`).join(','))
            ].join('\n');
            
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'applications.csv';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (err) {
            console.error('Error downloading CSV:', err);
            alert('Failed to download CSV file. Please try again.');
        }
    };

    const updateStatus = async (applicationId: string, newStatus: string) => {
        try {
            // Update in localStorage
            const applications = JSON.parse(localStorage.getItem('applications') || '[]');
            const updatedApplications = applications.map((app: Application) => 
                app.applicationId === applicationId 
                    ? { ...app, status: newStatus }
                    : app
            );
            localStorage.setItem('applications', JSON.stringify(updatedApplications));
            
            // Update local state
            setApplications(updatedApplications);
        } catch (err) {
            console.error('Failed to update status:', err);
            alert('Failed to update status. Please try again.');
        }
    };

    if (loading) {
        return (
            <div className="admin-page">
                <div className="container">
                    <div className="loading">Loading applications...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="admin-page">
                <div className="container">
                    <div className="error">Error: {error}</div>
                    <button onClick={fetchApplications} className="btn btn-primary">
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-page">
            <div className="container">
                <header className="admin-header">
                    <h1>Application Management</h1>
                    <p>View and manage all submitted applications</p>
                </header>

                <div className="admin-actions">
                    <button onClick={fetchApplications} className="btn btn-secondary">
                        Refresh
                    </button>
                    <button onClick={downloadCSV} className="btn btn-primary">
                        Download CSV
                    </button>
                </div>

                <div className="applications-summary">
                    <div className="summary-card">
                        <h3>Total Applications</h3>
                        <span className="summary-number">{applications.length}</span>
                    </div>
                    <div className="summary-card">
                        <h3>Pending</h3>
                        <span className="summary-number">
                            {applications.filter(app => app.status === 'Pending').length}
                        </span>
                    </div>
                    <div className="summary-card">
                        <h3>Reviewed</h3>
                        <span className="summary-number">
                            {applications.filter(app => app.status === 'Reviewed').length}
                        </span>
                    </div>
                </div>

                <div className="applications-table-container">
                    <table className="applications-table">
                        <thead>
                            <tr>
                                <th>Application ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Program</th>
                                <th>Submission Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app, index) => (
                                <tr key={app.applicationId || index}>
                                    <td className="app-id">{app.applicationId}</td>
                                    <td>{app.firstName} {app.lastName}</td>
                                    <td>{app.email}</td>
                                    <td>{app.program}</td>
                                    <td>
                                        {new Date(app.submissionDate).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <select 
                                            value={app.status} 
                                            onChange={(e) => updateStatus(app.applicationId, e.target.value)}
                                            className="status-select"
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Reviewed">Reviewed</option>
                                            <option value="Accepted">Accepted</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => window.open(`mailto:${app.email}`)}
                                            className="btn btn-small"
                                        >
                                            Email
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {applications.length === 0 && (
                    <div className="no-applications">
                        <p>No applications found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPage;
