// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnVkhxwVVDjF6Hf9Gnm7ZhohL84Cxb4Ds",
  authDomain: "bookstore-62961.firebaseapp.com",
  projectId: "bookstore-62961",
  storageBucket: "bookstore-62961.appspot.com",
  messagingSenderId: "806607065027",
  appId: "1:806607065027:web:31ee3c380957a554be3776",
  measurementId: "G-WPX07FLXY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()