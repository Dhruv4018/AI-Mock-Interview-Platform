
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-iq.firebaseapp.com",
  projectId: "ai-interview-iq",
  storageBucket: "ai-interview-iq.firebasestorage.app",
  messagingSenderId: "618492185757",
  appId: "1:618492185757:web:7884253a7dc3243dba5874"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth ,provider,app}