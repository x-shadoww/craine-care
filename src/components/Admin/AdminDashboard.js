import React, { useState } from 'react';
import './AdminDashboard.css';
import CreateAdminUser from '../CreateAdminUserForm'; // Import the CreateAdminUser component
import AddDoctor from './AddDoctor.js'; // Import the AddDoctor component
import AddNurse from './AddNurse.js'; // Import the AddNurse component

const AdminDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('createAdmin'); // State to track the selected menu item

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const handleCloseAddDoctor = () => {
    setSelectedMenuItem('viewDoctorNurse'); // Change the selected menu item to close the Add Doctor dialog
  };

  const renderMenuItemContent = () => {
    switch (selectedMenuItem) {
      case 'createAdmin':
        return <CreateAdminUser />;
      case 'viewDoctorNurse':
        return <div>View Doctor/Nurse List</div>; // Placeholder content, replace with actual component
      case 'managePatients':
        return <div>Manage Patients</div>; // Placeholder content, replace with actual component
      case 'manageAppointments':
        return <div>Manage Appointments</div>; // Placeholder content, replace with actual component
      case 'manageUsers':
        return <div>Manage Users</div>; // Placeholder content, replace with actual component
      case 'reportsAnalytics':
        return <div>Reports & Analytics</div>; // Placeholder content, replace with actual component
      case 'addDoctor':
        return <AddDoctor onClose={handleCloseAddDoctor} />;
      case 'addNurse':
        return <AddNurse onClose={handleCloseAddDoctor} />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard-container">
      <div className="side-panel">
        <ul className="menu-items">
          <li onClick={() => handleMenuItemClick('createAdmin')}>Create Admin User</li>
          <li onClick={() => handleMenuItemClick('viewDoctorNurse')}>View Doctor/Nurse List</li>
          <li onClick={() => handleMenuItemClick('managePatients')}>Manage Patients</li>
          <li onClick={() => handleMenuItemClick('manageAppointments')}>Manage Appointments</li>
          <li onClick={() => handleMenuItemClick('manageUsers')}>Manage Users</li>
          <li onClick={() => handleMenuItemClick('reportsAnalytics')}>Reports & Analytics</li>
          <li onClick={() => handleMenuItemClick('addDoctor')}>Add Doctor</li>
          <li onClick={() => handleMenuItemClick('addNurse')}>Add Nurse</li>
        </ul>
      </div>
      <div className="main-content">
        {renderMenuItemContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
