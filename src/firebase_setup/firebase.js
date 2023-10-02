// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACkEBKDL39ru-w36MaFMeM3F6rmsTuDVc",
  authDomain: "space-noob.firebaseapp.com",
  projectId: "space-noob",
  storageBucket: "space-noob.appspot.com",
  messagingSenderId: "485784419419",
  appId: "1:485784419419:web:ec2e72bba5b525dc2c537e",
  measurementId: "G-BW96YV4THT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)