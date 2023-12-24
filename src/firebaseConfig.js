// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getStorage }  from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAbcyQJxs5t4Y0nQrpC587ON14AdVWrgpg",
  authDomain: "ngoconnectfb.firebaseapp.com",
  projectId: "ngoconnectfb",
  storageBucket: "ngoconnectfb.appspot.com",
  messagingSenderId: "253639462603",
  appId: "1:253639462603:web:98191bc29ce572b2ac554e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app)