import React, { useState } from 'react';
import './DoctorDashboard.css'; // Create DoctorDashboard.css for styling
import Header from './Header';
import Sidebar from './Sidebar';
import DoctorHome from './Home'; // Assuming DoctorHome is a component for the doctor's dashboard

function DoctorDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='doctor-grid-container'> {/* Apply specific styles for the doctor dashboard */}
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
     
      <DoctorHome /> {/* Use DoctorHome component for the doctor's dashboard content */}
    </div>
  );
}

export default DoctorDashboard;
