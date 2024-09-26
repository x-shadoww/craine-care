const express = require('express');
const admin = require('../firebaseAdmin'); // Import Firebase Admin SDK

const router = express.Router();

// Function to assign custom claim based on role
const assignUserRole = async (uid, role) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { role });
    console.log(`Custom claim ${role} assigned to user with UID: ${uid}`);
    return true;
  } catch (error) {
    console.error('Error assigning custom claim:', error);
    return false;
  }
};

// Example login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Your authentication logic to verify credentials and get user UID and role
    // For example:
    const user = await admin.auth().getUserByEmail(email);
    const uid = user.uid;
    const role = 'admin'; // This could come from your database or be determined based on user data

    // Assign custom claim after successful login
    await assignUserRole(uid, role);

    // Return response or redirect as needed
    res.status(200).send({ message: 'Login successful', uid, role });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send({ error: 'Login failed' });
  }
});

module.exports = router;
