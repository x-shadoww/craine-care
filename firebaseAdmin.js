const admin = require('firebase-admin');
const serviceAccount = require('../config/craine-care-firebase-adminsdk-97qx6-30c841ec2c.json'); // Assuming your backend is in a folder parallel to 'config'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/project/craine-care/firestore',
});
 