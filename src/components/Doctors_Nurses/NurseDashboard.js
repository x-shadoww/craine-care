
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NurseDashboard.css'; // Import your CSS file for styling

const NurseDashboard = () => {
  const [totalPatients, setTotalPatients] = useState(0);

  const dummyPatients = [
    { id: 1, name: 'John Doe', age: 45, condition: 'Critical' },
    { id: 2, name: 'Jane Smith', age: 30, condition: 'Stable' },
    // Add more patient data as needed
  ];

  useEffect(() => {
    setTotalPatients(dummyPatients.length);
  }, [dummyPatients.length]);

  return (
    <div className="dashboard-container">
      {/* Horizontal Sidebar */}
      <div className="horizontal-sidebar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
          <span className="dashboard-title">Nurse Dashboard</span>
        </div>
        <div className="user-info">
          <span>Francisca N.N Tawiah (Nurse)</span>
          <span className="icon">🔔</span>
          <span className="icon">⚙️</span>
          <span className="icon">Logout</span>
        </div>
      </div>

      {/* Vertical Navigation Bar */}
      <div className="sidebar">
        <div className="navbar">
          {/* Use Link component for navigation */}
          <div className="nav-item"><Link to="/components/Doctors_Nurses/Admissions"><button>Admissions</button></Link></div>
          <div className="nav-item"><Link to="/components/Doctors_Nurses/PatientManagement"><button>Patient Management</button></Link></div>
          <div className="nav-item"><Link to="/appointment-management"><button>Appointment Management</button></Link></div>
          <div className="nav-item"><Link to="/doctor-nurse-management"><button>Doctor & Nurse Management</button></Link></div>
          <div className="nav-item"><Link to="/inventory-management"><button>Inventory Management</button></Link></div>
          <div className="nav-item"><Link to="/billing-payments"><button>Billing & Payments</button></Link></div>
          <div className="nav-item"><Link to="/reports-analytics"><button>Reports & Analytics</button></Link></div>
          <div className="nav-item"><Link to="/settings"><button>Settings</button></Link></div>
        </div>
      </div>


      {/* Main Content */}
      <div className="main-content">
        {/* Animated Card for Total Patients */}
        <div className="animated-card">
          <h3>Total Patients</h3>
          <div className="patient-count">{totalPatients}</div>
        </div>

        {/* Today's Overview Section */}
        <div className="section" id="today-overview">
          <h2>Today's Overview</h2>
          <div className="overview-cards">
            <div className="overview-card">
              <h3>Shift Summary</h3>
              <p>Shift timings, breaks, handover details.</p>
            </div>
            <div className="overview-card">
              <h3>Patient Count</h3>
              <p>Total patients under care today: {totalPatients}</p>
            </div>
            <div className="overview-card">
              <h3>Tasks</h3>
              <p>Completed: 8, Pending: 4</p>
            </div>
            <div className="overview-card">
              <h3>Alerts</h3>
              <p>Critical alerts: 2</p>
            </div>
          </div>
        </div>

        {/* Patient List Section */}
        <div className="section" id="patient-list">
          <h2>Patient List</h2>
          <input type="text" placeholder="Search Patients" className="search-bar" />
          <table className="patient-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Room</th>
                <th>Condition</th>
                <th>Next Checkup</th>
              </tr>
            </thead>
            <tbody>
              {dummyPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>Room 101</td>
                  <td>{patient.condition}</td>
                  <td>10:00 AM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Task Management Section */}
        <div className="section" id="task-management">
          <h2>Task Management</h2>
          <button>Add Task</button>
          <ul className="task-list">
            <li>Task 1 - Pending</li>
            <li>Task 2 - In Progress</li>
            <li>Task 3 - Completed</li>
          </ul>
        </div>

        {/* Medication Schedule Section */}
        <div className="section" id="medication-schedule">
          <h2>Medication Schedule</h2>
          <div className="medication-schedule">
            <div>
              <h3>Upcoming Medications</h3>
              <ul>
                <li>Medication 1 - 11:00 AM</li>
                <li>Medication 2 - 12:00 PM</li>
              </ul>
            </div>
            <div>
              <h3>Administered Medications</h3>
              <ul>
                <li>Medication 3 - 9:00 AM</li>
                <li>Medication 4 - 10:00 AM</li>
              </ul>
            </div>
            <button>Add Medication</button>
          </div>
        </div>

        {/* Reports & Analytics Section */}
        <div className="section" id="reports-analytics">
          <h2>Reports & Analytics</h2>
          {/* Include reports & analytics components here */}
        </div>
      </div>
    </div>
  );
};

export default NurseDashboard;
