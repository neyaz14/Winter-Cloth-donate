// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTr0SDd_VtEtZnMNJS2Hh7xnzhivavY6k",
  authDomain: "winter-cloth-donate-1db2b.firebaseapp.com",
  projectId: "winter-cloth-donate-1db2b",
  storageBucket: "winter-cloth-donate-1db2b.firebasestorage.app",
  messagingSenderId: "807160373450",
  appId: "1:807160373450:web:116e916c556b9fb611d433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)