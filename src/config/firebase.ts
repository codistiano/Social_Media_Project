// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTo6Uqx1dvx7N7_iOWfIsWYltKV2cbFPA",
  authDomain: "socio-media-37230.firebaseapp.com",
  projectId: "socio-media-37230",
  storageBucket: "socio-media-37230.firebasestorage.app",
  messagingSenderId: "62717290912",
  appId: "1:62717290912:web:9938a6a003099c50125cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider
export const db = getFirestore(app)