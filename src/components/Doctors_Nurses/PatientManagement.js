import React, { useState, useEffect } from 'react';
import './PatientManagement.css'; // Import your CSS file for styling
import AddPatient from './AddPatient'; // Import the AddPatient component
import PatientListDialog from './PatientListDialog'; // Import the PatientListDialog component
import EditDialog from './EditDialog'; // Import the EditDialog component
import { db, collection, getDocs } from '../firebaseConfig'; // Import Firestore related functions

const PatientManagement = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false); // State for Add Patient dialog visibility
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false); // State for View Patients dialog visibility
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false); // State for Edit Patient dialog visibility
  const [patients, setPatients] = useState([]); // State to store patient data
  const [selectedPatient, setSelectedPatient] = useState(null); // State to store the selected patient for editing

  useEffect(() => {
    const fetchPatients = async () => {
      const patientsRef = collection(db, 'Patients');
      const patientsSnapshot = await getDocs(patientsRef);
      const patientsList = patientsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPatients(patientsList);
    };

    fetchPatients();
  }, []);

  const handleAddPatient = () => {
    setIsAddDialogOpen(true); // Open the Add Patient dialog
  };

  const handleViewPatients = () => {
    setIsViewDialogOpen(true); // Open the View Patients dialog
  };

  const handleCloseAddDialog = () => {
    setIsAddDialogOpen(false); // Close the Add Patient dialog
  };

  const handleCloseViewDialog = () => {
    setIsViewDialogOpen(false); // Close the View Patients dialog
  };

  const handleEditPatient = (patient) => {
    setSelectedPatient(patient); // Set the selected patient for editing
    setIsEditDialogOpen(true); // Open the Edit Patient dialog
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false); // Close the Edit Patient dialog
  };

  const handleSearchPatients = () => {
    // Functionality to handle searching for patients
    console.log('Searching for patients');
  };

  const handleGenerateReport = () => {
    // Functionality to generate a report
    console.log('Generating patient report');
  };

  return (
    <div className="patient-management-container">
      <h2 className="page-title">Patient Management</h2>
      <div className="button-container">
        <button onClick={handleAddPatient}>Add Patient</button>
        <button onClick={handleViewPatients}>View Patients</button>
        <button onClick={handleEditPatient}>Edit Patient</button>
        <button onClick={handleSearchPatients}>Search Patients</button>
        <button onClick={handleGenerateReport}>Generate Report</button>
      </div>
      {/* Conditionally render the AddPatient dialog */}
      {isAddDialogOpen && <AddPatient onClose={handleCloseAddDialog} />}
      {/* Conditionally render the PatientListDialog */}
      {isViewDialogOpen && (
        <PatientListDialog isOpen={isViewDialogOpen} onClose={handleCloseViewDialog} patients={patients} />
      )}
      {/* Conditionally render the EditDialog */}
      {isEditDialogOpen && (
        <EditDialog isOpen={isEditDialogOpen} onClose={handleCloseEditDialog} patientData={selectedPatient} />
      )}
    </div>
  );
};

export default PatientManagement;
