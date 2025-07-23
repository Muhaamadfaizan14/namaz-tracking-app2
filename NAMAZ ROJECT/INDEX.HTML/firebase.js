import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { 
  getFirestore ,
  collection,
    addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
  getDoc,
  where,
  query,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js"; // ✅ correct
import { getAuth, createUserWithEmailAndPassword ,  signInWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js" ;
const firebaseConfig = {
  apiKey: "AIzaSyAFVLVlbUNc8vlGhIPFIlk101oW7ApRTkM",
  authDomain: "namaz-project-f08b2.firebaseapp.com",
  projectId: "namaz-project-f08b2",
  storageBucket: "namaz-project-f08b2.firebasestorage.app",
  messagingSenderId: "732417306800",
  appId: "1:732417306800:web:708a32cb9d66f4b26e4b75",
  measurementId: "G-PFNJVFG333"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, db  ,auth , getFirestore ,
  collection,
    addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
  getDoc,
  where,
  query,

  createUserWithEmailAndPassword,    
  signInWithEmailAndPassword   ,}      