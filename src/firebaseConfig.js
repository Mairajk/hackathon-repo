import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbrqCTasqEx0hE1odyLHphLiusgKkMjok",
  authDomain: "ecommerce-a7907.firebaseapp.com",
  projectId: "ecommerce-a7907",
  storageBucket: "ecommerce-a7907.appspot.com",
  messagingSenderId: "984304029433",
  appId: "1:984304029433:web:a21a747285b51682dfdc28",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);