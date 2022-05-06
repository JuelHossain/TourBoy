// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIoIrV5ktZ6eOYb14r5DiB9DPSdluuums",
  authDomain: "tour-boy.firebaseapp.com",
  projectId: "tour-boy",
  storageBucket: "tour-boy.appspot.com",
  messagingSenderId: "1007523328454",
  appId: "1:1007523328454:web:350d43ac1c4ff49a6802c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;