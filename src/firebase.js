// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC33Uu7UuF-REmDU14Vh1CHzX6unN1l1J4",
  authDomain: "hunger--app.firebaseapp.com",
  projectId: "hunger--app",
  storageBucket: "hunger--app.appspot.com",
  messagingSenderId: "246627805393",
  appId: "1:246627805393:web:76069a617f65792f447df0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)