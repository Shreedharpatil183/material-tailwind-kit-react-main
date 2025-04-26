// src/utils/googleSignIn.js
import { auth, provider } from "@/fiebase/firebase";
import { signInWithPopup } from "firebase/auth";

export const googleSignIn = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};
