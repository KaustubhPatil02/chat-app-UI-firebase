import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwDrOsh5n2Z1NfQXs45mv_pX5QbL2EDyM",
  authDomain: "chat-app-c4db0.firebaseapp.com",
  projectId: "chat-app-c4db0",
  storageBucket: "chat-app-c4db0.appspot.com",
  messagingSenderId: "634540528837",
  appId: "1:634540528837:web:eeb9aa54e8f75760ae0cac",
  measurementId: "G-ZBPMMPG5NB"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAwDrOsh5n2Z1NfQXs45mv_pX5QbL2EDyM",
//   authDomain: "chat-app-c4db0.firebaseapp.com",
//   projectId: "chat-app-c4db0",
//   storageBucket: "chat-app-c4db0.appspot.com",
//   messagingSenderId: "634540528837",
//   appId: "1:634540528837:web:eeb9aa54e8f75760ae0cac",
//   measurementId: "G-ZBPMMPG5NB"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();