import React, { useState } from 'react';
import './DoctorNursesLogin.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db, collection, query, where, getDocs } from '../firebaseConfig'; // Adjust the Firebase imports as needed
import { useNavigate } from 'react-router-dom'; // Import useHistory or useNavigate

const DoctorsNursesLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useHistory or useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the user exists in Doctors collection
      const doctorsQuery = query(collection(db, 'Doctors'), where('email', '==', email));
      const doctorsSnapshot = await getDocs(doctorsQuery);
      if (!doctorsSnapshot.empty) {
        navigate('/doctor'); // Redirect to DoctorDashboard if the user is a doctor
        return;
      } else {
        // Check if the user exists in Nurses collection
        const nursesQuery = query(collection(db, 'Nurses'), where('email', '==', email));
        const nursesSnapshot = await getDocs(nursesQuery);
        if (!nursesSnapshot.empty) {
          navigate('/nurse'); // Redirect to NurseDashboard if the user is a nurse
          return;
        } else {
          // Handle case when user is not found in either collection
          console.log('User not found in Nurses or Doctors collection.');
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="h2">Doctor/Nurse Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default DoctorsNursesLogin;
