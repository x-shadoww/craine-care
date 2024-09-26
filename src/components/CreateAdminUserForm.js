// CreateAdminUser.js
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Update the import path to match your project structure

const CreateAdminUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  // Initialize the authentication instance
  const authInstance = getAuth();

  const handleCreateAdminUser = async () => {
    try {
      // Create user in Firebase Authentication using authInstance
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
      const { uid } = userCredential.user;

      // Add user to Users collection in Firestore as admin
      const usersCollectionRef = collection(db, 'users');
      await addDoc(usersCollectionRef, {
        userId: uid,
        email: email,
        displayName: displayName,
        role: 'admin', // Set the role to 'admin'
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      console.log('Admin user created successfully.');
    } catch (error) {
      console.error('Error creating admin user:', error.message);
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
      <button onClick={handleCreateAdminUser}>Create Admin User</button>
    </div>
  );
};

export default CreateAdminUser;
