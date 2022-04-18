// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBerpZHdD1eFZRh6Mp636frAZ5mCIpB7K0",
  authDomain: "gym-trainer-bd.firebaseapp.com",
  projectId: "gym-trainer-bd",
  storageBucket: "gym-trainer-bd.appspot.com",
  messagingSenderId: "179136444622",
  appId: "1:179136444622:web:4d1a1f77f6f01e3e8eb89f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
