

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore , doc, setDoc, getDoc,getDocs, addDoc, collection, query, where} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALs5UO00FGvZv6jW1Vj4ExEGMDHEiYAWw",
  authDomain: "craine-care.firebaseapp.com",
  projectId: "craine-care",
  storageBucket: "craine-care.appspot.com",
  messagingSenderId: "355086405546",
  appId: "1:355086405546:web:68cc70aa91005c158665d3",
  measurementId: "G-LVTN2XPN02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, getAuth, getFirestore, createUserWithEmailAndPassword, signInWithEmailAndPassword,doc,setDoc,getDoc, addDoc, collection, query, where, getDocs };