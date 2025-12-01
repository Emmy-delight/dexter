// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "dexter-59c63.firebaseapp.com",
  projectId: "dexter-59c63",
  storageBucket: "dexter-59c63.firebasestorage.app",
  messagingSenderId: "242358754010",
  appId: "1:242358754010:web:2009044232567c161963e3"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};