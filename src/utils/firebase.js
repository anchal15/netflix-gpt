// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAysIrWEK9yyhrdX20-WojTolK5aJkd1kw",
  authDomain: "netflixgpt-e38e5.firebaseapp.com",
  projectId: "netflixgpt-e38e5",
  storageBucket: "netflixgpt-e38e5.appspot.com",
  messagingSenderId: "723181566902",
  appId: "1:723181566902:web:fce6ba2949f80ba5379f17",
  measurementId: "G-LTH71KPNXK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
