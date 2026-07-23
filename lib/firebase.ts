import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1FbT0SbPX120vst-V2O-pClG4iEzJc8U",
  authDomain: "rn-botanics.firebaseapp.com",
  projectId: "rn-botanics",
  storageBucket: "rn-botanics.firebasestorage.app",
  messagingSenderId: "521156622762",
  appId: "1:521156622762:web:e3f80660d6ac30c33193d3",
};

const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Firebase Authentication
export const auth = getAuth(app);

export default app;