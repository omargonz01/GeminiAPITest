require("dotenv").config();
const Firebase_API_Key = process.env.Firebase_API_Key;
const App_ID = process.env.App_ID;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: process.env.Firebase_API_Key,
  authDomain: "testbite-react.firebaseapp.com",
  projectId: "testbite-react",
  storageBucket: "testbite-react.appspot.com",
  messagingSenderId: "289398574178",
  appId: process.env.App_ID,
  measurementId: "G-VQEX2LYWSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
module.exports = { db: getFirestore(app) };
