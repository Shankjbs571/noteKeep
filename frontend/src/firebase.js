// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHE0H46B_6qQulO4hVZrQCnxYXbpbtR00",
  authDomain: "notekeep-5a2f4.firebaseapp.com",
  projectId: "notekeep-5a2f4",
  storageBucket: "notekeep-5a2f4.appspot.com",
  messagingSenderId: "365357634743",
  appId: "1:365357634743:web:a56753ef0d4d61ea3de932",
  measurementId: "G-PYSZF1RZ54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

export default app