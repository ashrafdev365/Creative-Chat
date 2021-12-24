import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD5JxeTJpDBV-qv_Uqmkez1PxJiSrFmbrE",
  authDomain: "messaging-app-46fb5.firebaseapp.com",
  databaseURL: "https://messaging-app-46fb5-default-rtdb.firebaseio.com",
  projectId: "messaging-app-46fb5",
  storageBucket: "messaging-app-46fb5.appspot.com",
  messagingSenderId: "376830430459",
  appId: "1:376830430459:web:8cd2b6f1088d6a6198745e",
  measurementId: "G-2QWFTJQ405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
