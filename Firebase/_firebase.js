import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_mi32WLC8GeIQ5UtMxJ2csSxH_lW9D4A",
  authDomain: "creative-chat-9857f.firebaseapp.com",
  projectId: "creative-chat-9857f",
  storageBucket: "creative-chat-9857f.appspot.com",
  messagingSenderId: "248340549446",
  appId: "1:248340549446:web:1d42366bc5dd20ac839f47",
  measurementId: "G-BN6D5BXRSF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
