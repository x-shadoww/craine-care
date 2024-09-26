// Appointments.js - Component for appointment management

import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Appointments = ({ currentUser }) => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    date: '',
    time: '',
    doctorId: '',
    notes: '',
  });

  const fetchAppointments = async () => {
    const appointmentsCollection = firebase.firestore().collection('appointments');
    const snapshot = await appointmentsCollection.where('doctorId', '==', currentUser.id).get();
    const fetchedAppointments = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAppointments(fetchedAppointments);
  };

  useEffect(() => {
    fetchAppointments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleScheduleAppointment = async () => {
    const appointmentsCollection = firebase.firestore().collection('appointments');
    await appointmentsCollection.add({
      ...newAppointment,
      doctorId: currentUser.id,
    });
    setNewAppointment({
      patientName: '',
      date: '',
      time: '',
      doctorId: '',
      notes: '',
    });
    fetchAppointments();
  };

  const handleCancelAppointment = async (id) => {
    const appointmentRef = firebase.firestore().collection('appointments').doc(id);
    await appointmentRef.delete();
    fetchAppointments();
  };

  return (
    <div>
      <h2>Schedule Appointment</h2>
      <form>
        <input type="text" name="patientName" placeholder="Patient Name" value={newAppointment.patientName} onChange={handleInputChange} />
        <input type="date" name="date" value={newAppointment.date} onChange={handleInputChange} />
        <input type="time" name="time" value={newAppointment.time} onChange={handleInputChange} />
        <textarea name="notes" placeholder="Additional Notes" value={newAppointment.notes} onChange={handleInputChange}></textarea>
        <button type="button" onClick={handleScheduleAppointment}>Schedule Appointment</button>
      </form>
      
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.patientName} - {appointment.date} {appointment.time}
            <button onClick={() => handleCancelAppointment(appointment.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
