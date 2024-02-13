// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFroSHVAK3aucxkmho9lyxed202tBLQvA",
  authDomain: "castro-boss-client.firebaseapp.com",
  projectId: "castro-boss-client",
  storageBucket: "castro-boss-client.appspot.com",
  messagingSenderId: "886810051492",
  appId: "1:886810051492:web:5071df8a22cc390be63731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;