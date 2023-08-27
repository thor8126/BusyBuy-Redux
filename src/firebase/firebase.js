// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLBRjbSaloNktGnx9Rl3x9ee6tq5Phtrg",
  authDomain: "busybuyredux.firebaseapp.com",
  projectId: "busybuyredux",
  storageBucket: "busybuyredux.appspot.com",
  messagingSenderId: "907454684794",
  appId: "1:907454684794:web:dd0d6bc7225e285e3ea5c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
