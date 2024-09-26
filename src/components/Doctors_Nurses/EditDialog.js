import React, { useState } from 'react';
import './EditDialog.css'; // Import your CSS file for styling
import '@reach/dialog/styles.css'; // Import Reach Dialog CSS for styling
import { updateDoc, doc } from 'firebase/firestore'; // Import Firestore related functions
import { db } from '../firebaseConfig'; // Import 'db' from your Firebase configuration file

const EditDialog = ({ patientData, onClose }) => {
  const [editedPatientData, setEditedPatientData] = useState(patientData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatePatient = async () => {
    try {
      // Update patient data in Firestore
      await updateDoc(doc(db, 'Patients', patientData.id), editedPatientData);
      onClose(); // Close the edit dialog
      console.log('Patient updated successfully.');
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  return (
    <div className="edit-patient-dialog">
      <h2>Edit Patient</h2>
      <form onSubmit={handleUpdatePatient}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={editedPatientData.fullName} onChange={handleChange} />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={editedPatientData.dateOfBirth} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <select name="gender" value={editedPatientData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Address:
          <input type="text" name="address" value={editedPatientData.address} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={editedPatientData.phoneNumber} onChange={handleChange} />
        </label>
        {/* Add other input fields for patient details */}
        {/* Medical Information */}
        <label>
          Medical History:
          <input type="text" name="medicalHistory" value={editedPatientData.medicalHistory} onChange={handleChange} />
        </label>
        {/* Add input fields for other medical information */}

        {/* Emergency Contact */}
        <label>
          Name of Emergency Contact:
          <input type="text" name="emergencyContactName" value={editedPatientData.emergencyContactName} onChange={handleChange} />
        </label>
        {/* Add input fields for emergency contact */}

        {/* Update Patient button */}
        <button type="submit">Update Patient</button>
      </form>
    </div>
  );
};

export default EditDialog;
