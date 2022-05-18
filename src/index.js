import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFe2E98t9zGMbx2cefpDHHNwKYcdkIpNQ",
  authDomain: "juantenaglia-9cefc.firebaseapp.com",
  projectId: "juantenaglia-9cefc",
  storageBucket: "juantenaglia-9cefc.appspot.com",
  messagingSenderId: "205237149772",
  appId: "1:205237149772:web:f498d90771c091ca2114e9",
  measurementId: "G-Z481RL8P66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

reportWebVitals()
