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
  apiKey: "AIzaSyDbHrxkN2lquFeBivT2FrTerbUzmdrSWmg",
  authDomain: "buybusy-12d14.firebaseapp.com",
  projectId: "buybusy-12d14",
  storageBucket: "buybusy-12d14.appspot.com",
  messagingSenderId: "577621398470",
  appId: "1:577621398470:web:788a345875feaea7fc98c7",
  measurementId: "G-FPT8MDB07B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
