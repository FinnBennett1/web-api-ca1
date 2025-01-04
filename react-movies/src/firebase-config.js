// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAA6h1xP2gFua3oR3TUReKS8HEAfVqxS0",
  authDomain: "tmdbproject-e6edd.firebaseapp.com",
  projectId: "tmdbproject-e6edd",
  storageBucket: "tmdbproject-e6edd.firebasestorage.app",
  messagingSenderId: "433516122407",
  appId: "1:433516122407:web:e178d5ba437b2174da9902",
  measurementId: "G-4QMBDEEH89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);