
import { auth } from "@/fiebase/firebase";
import { signOut } from "firebase/auth";

export const logout = () => {
  signOut(auth);
};
