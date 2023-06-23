import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBbKBe7qbMVX4XDWpuP8umFQ10HQN41A0",
  authDomain: "raizin-ecommerce.firebaseapp.com",
  projectId: "raizin-ecommerce",
  storageBucket: "raizin-ecommerce.appspot.com",
  messagingSenderId: "1019079866304",
  appId: "1:1019079866304:web:a606999f9738303c20fa25",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
