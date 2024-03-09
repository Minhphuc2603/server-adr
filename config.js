// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB982fhbHTrnoiwdCeAQzW74_EI6ev5r-4",
  authDomain: "mobile-7a7e6.firebaseapp.com",
  projectId: "mobile-7a7e6",
  storageBucket: "mobile-7a7e6.appspot.com",
  messagingSenderId: "587895710353",
  appId: "1:587895710353:web:7a2812b0053f244d4d1530",
  measurementId: "G-7KM5RE7D3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);