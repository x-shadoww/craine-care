import React, { useState } from "react";
import './signup.css'
import { Link } from "react-router-dom";
import { auth } from './components/firebaseConfig'; // Import auth from firebaseConfig

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, pass);

            if (userCredential) {
                alert("Account Created successfully");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>  
            <div className="main_contianer_signup">
                <div className="header">
                    <h2>Signup</h2>
                </div>
                <div className="box">
                    <input type='text' value={name} placeholder='Username' onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="box">
                    <input type='text' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="box">
                    <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <p>Already have an account? <Link to="/login">Login Now</Link> </p>
                <button onClick={submit}>Signup</button>
            </div>
        </>
    );
}

export default Signup;
