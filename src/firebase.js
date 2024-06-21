// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2LC0yS0TvXpI7knC32LeXymcJH5hKZzg",
  authDomain: "cypto-prop.firebaseapp.com",
  projectId: "cypto-prop",
  storageBucket: "cypto-prop.appspot.com",
  messagingSenderId: "558044136465",
  appId: "1:558044136465:web:8abf009cbf24a4f2421db0",
  measurementId: "G-7GPSLCQTMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);