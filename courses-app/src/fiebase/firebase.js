// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDt2Bi0uAl_qCBGUUyHiIOzj1yjBLNAfA",
  authDomain: "courseapp-5b4e8.firebaseapp.com",
  projectId: "courseapp-5b4e8",
  appId: "1:811730208179:web:aa1ceffbd06132d63bb7c6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
