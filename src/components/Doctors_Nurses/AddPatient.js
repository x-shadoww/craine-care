import React, { useState } from 'react';
import './AddPatient.css'; // Import CSS file for styling
import { db, collection, addDoc } from '../firebaseConfig'; // Import Firebase Firestore related functions
import { DialogOverlay, DialogContent } from '@reach/dialog'; // Import Reach Dialog components
import '@reach/dialog/styles.css'; // Import Reach Dialog CSS for styling

const AddPatient = ({ isOpen, onClose }) => {
  const [patientData, setPatientData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phoneNumber: '',
    emailAddress: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    consentForTreatment: false,
    permissionToShareMedicalInfo: false,
    reasonForVisit: '',
    preferredLanguage: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add patient data to Firestore collection 'Patients'
      const docRef = await addDoc(collection(db, 'Patients'), patientData);
      console.log('Patient added with ID: ', docRef.id);
      onClose(); // Close the dialog after adding the patient
    } catch (error) {
      console.error('Error adding patient: ', error);
    }
  };

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onClose}>
      <DialogContent aria-label="Add Patient Form">
        <div className="add-patient-dialog">
          <h2>Add Patient</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input type="text" name="fullName" value={patientData.fullName} onChange={handleChange} required />
            </label>
            <label>
              Date of Birth:
              <input type="date" name="dateOfBirth" value={patientData.dateOfBirth} onChange={handleChange} required />
            </label>
            <label>
              Gender:
              <select name="gender" value={patientData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Address:
              <textarea name="address" value={patientData.address} onChange={handleChange} required />
            </label>
            <label>
              Phone Number:
              <input type="tel" name="phoneNumber" value={patientData.phoneNumber} onChange={handleChange} required />
            </label>
            <label>
              Email Address:
              <input type="email" name="emailAddress" value={patientData.emailAddress} onChange={handleChange} />
            </label>
            <label>
              Name of Emergency Contact:
              <input type="text" name="emergencyContactName" value={patientData.emergencyContactName} onChange={handleChange} required />
            </label>
            <label>
              Emergency Contact Number:
              <input type="tel" name="emergencyContactNumber" value={patientData.emergencyContactNumber} onChange={handleChange} required />
            </label>
            <label>
              Consent for Treatment:
              <input type="checkbox" name="consentForTreatment" checked={patientData.consentForTreatment} onChange={handleChange} required />
            </label>
            <label>
              Permission to Share Medical Information:
              <input type="checkbox" name="permissionToShareMedicalInfo" checked={patientData.permissionToShareMedicalInfo} onChange={handleChange} />
            </label>
            <label>
              Reason for Visit:
              <textarea name="reasonForVisit" value={patientData.reasonForVisit} onChange={handleChange} required />
            </label>
            <label>
              Preferred Language:
              <input type="text" name="preferredLanguage" value={patientData.preferredLanguage} onChange={handleChange} />
            </label>
            <label>
              Additional Notes:
              <textarea name="additionalNotes" value={patientData.additionalNotes} onChange={handleChange} />
            </label>
            <button type="submit">Add Patient</button>
          </form>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};

export default AddPatient;