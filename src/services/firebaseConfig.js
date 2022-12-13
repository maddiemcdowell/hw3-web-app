// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN4Z1D-_dHwNB1lZ6woYJKNP70vSqGLi0",
  authDomain: "hw03-web-app.firebaseapp.com",
  projectId: "hw03-web-app",
  storageBucket: "hw03-web-app.appspot.com",
  messagingSenderId: "887405691922",
  appId: "1:887405691922:web:848517cf408101408a44cb",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
