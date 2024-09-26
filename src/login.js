import React, { useState } from "react";
import './signup.css';
import { auth, db } from './components/firebaseConfig'; // Import auth and db from firebaseConfig

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const submit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, pass);

            if (userCredential.user) { // Check if userCredential.user exists
                alert("Login successful");
                // Example: Fetch user data from Firestore after login
                const userDoc = await db.collection('users').doc(userCredential.user.uid).get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    console.log('User Data:', userData);
                }
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>  
            <div className="main_contianer_signup">
                <div className="header">
                    <h2>Login</h2>
                </div>
            
                <div className="box">
                    <input type='text' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="box">
                    <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
                </div>
               
                <button onClick={(e) => submit(e)}>Login</button>
            </div>
        </>
    );
};

export default Login;
