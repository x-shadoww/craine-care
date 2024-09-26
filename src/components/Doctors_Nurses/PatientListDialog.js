import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

const PatientListDialog = ({ isOpen, onClose, patients }) => {
  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onClose}>
      <DialogContent aria-label="Patient List">
        <div className="patient-list-dialog">
          <h2>Patients List</h2>
          <ul>
            {patients.map((patient) => (
              <li key={patient.id}>
                <strong>Name:</strong> {patient.fullName}, <strong>Date of Birth:</strong> {patient.dateOfBirth},{' '}
                <strong>Gender:</strong> {patient.gender}
              </li>
            ))}
          </ul>
          <button onClick={onClose}>Close</button>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};

export default PatientListDialog;
