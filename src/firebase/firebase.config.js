// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWuNCqrEPlm19HczTzN2d8-GaVaNFLPGw",
  authDomain: "assignment-9-bbc62.firebaseapp.com",
  projectId: "assignment-9-bbc62",
  storageBucket: "assignment-9-bbc62.firebasestorage.app",
  messagingSenderId: "778676873619",
  appId: "1:778676873619:web:d3adc77017f0c10c90a066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
