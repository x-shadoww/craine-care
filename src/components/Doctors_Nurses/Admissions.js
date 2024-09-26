// Admissions.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import './Admissions.css';

const Admissions = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('patients').add({
        name,
        age,
        gender,
        admissionDate,
        roomNumber,
        diagnosis
      });
      alert('Patient admitted successfully!');
      setName('');
      setAge('');
      setGender('');
      setAdmissionDate('');
      setRoomNumber('');
      setDiagnosis('');
    } catch (error) {
      console.error('Error admitting patient: ', error);
      alert('Error admitting patient.');
    }
  };

  return (
    <div className="admissions">
      <h2>Admit New Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Admission Date:
          <input type="date" value={admissionDate} onChange={(e) => setAdmissionDate(e.target.value)} required />
        </label>
        <label>
          Room Number:
          <input type="text" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} required />
        </label>
        <label>
          Diagnosis:
          <textarea value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} required />
        </label>
        <button type="submit">Admit Patient</button>
      </form>
    </div>
  );
};

export default Admissions;
