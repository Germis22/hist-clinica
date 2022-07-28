// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXP0VGlvtVe8s1zFOiTSjagW53KI7PPik",
  authDomain: "hist-clinica.firebaseapp.com",
  projectId: "hist-clinica",
  storageBucket: "hist-clinica.appspot.com",
  messagingSenderId: "909938292281",
  appId: "1:909938292281:web:3117974ed10f9d928effe8",
  measurementId: "G-D6QC6FV35J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);