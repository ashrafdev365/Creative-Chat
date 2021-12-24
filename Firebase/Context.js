import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "./firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const google = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const value = {
    currentUser,
    logout,
    google,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
