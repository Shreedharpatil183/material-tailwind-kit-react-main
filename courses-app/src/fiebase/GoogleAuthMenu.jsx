import { useEffect, useState } from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Avatar, Button } from "@material-tailwind/react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

export default function GoogleAuthMenu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  if (!user) {
    return (
      <Button variant="text" size="sm" color="white" fullWidth onClick={handleSignIn}>
        Sign In with Google
      </Button>
    );
  }

  return (
    <Menu>
      <MenuHandler>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar src={user.photoURL} alt={user.displayName} size="sm" />
          <span className="text-sm font-semibold">{user.displayName}</span>
        </div>
      </MenuHandler>
      <MenuList className="p-2">
        <div className="px-2 py-2 border-b border-blue-gray-100">
          <div className="text-sm font-bold">{user.displayName}</div>
          <div className="text-xs text-gray-500">{user.email}</div>
        </div>
        <MenuItem>My Enrollments</MenuItem>
        <MenuItem>Bookmarks</MenuItem>
        <MenuItem>Transactions</MenuItem>
        <MenuItem>Announcements</MenuItem>
        <MenuItem onClick={handleSignOut} className="text-red-500">
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
