import React, { useState } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { db, collection, addDoc } from '../firebaseConfig'; // Import your Firebase Firestore instance
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Authentication functions

const AddDoctor = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create the user in Firebase Authentication
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add a new document with a unique ID to the "Doctors" collection in Firestore
      const doctorsCollectionRef = collection(db, 'Doctors');
      await addDoc(doctorsCollectionRef, {
        uid: user.uid, // Add the user's UID from Authentication to link with the Doctor document
        name,
        email,
        speciality,
        department,
      });
      onClose(); // Close the dialog after successfully adding the doctor
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onClose}>
      <DialogContent aria-label="Add Doctor Form">
        <h2>Add Doctor</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Speciality:
            <input type="text" value={speciality} onChange={(e) => setSpeciality(e.target.value)} required />
          </label>
          <label>
            Department:
            <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Add Doctor</button>
        </form>
      </DialogContent>
    </DialogOverlay>
  );
};

export default AddDoctor;
