const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin'); // Import Firebase Admin SDK

const authRoutes = require('./routes/authRoutes'); // Adjust the path to authRoutes

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initialize Firebase Admin SDK (assuming you have a service account key file)
const serviceAccount = require('./config/craine-care-firebase-adminsdk-97qx6-30c841ec2c.json'); // Adjust the path
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Use the authRoutes for '/api/auth' endpoints
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

