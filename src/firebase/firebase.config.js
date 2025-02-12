// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPN6X0_TJu0pWateTpRzzq-7f5hpAUEfY",
  authDomain: "auth-final-concept.firebaseapp.com",
  projectId: "auth-final-concept",
  storageBucket: "auth-final-concept.firebasestorage.app",
  messagingSenderId: "420533861217",
  appId: "1:420533861217:web:2845cdf5285ab9d44fa320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;