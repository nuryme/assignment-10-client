import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState();

  const firebaseSignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const firebaseLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const firebaseGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (userData) => {
    return updateProfile(auth.currentUser, userData)
  }
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  console.log(user);

  const authInfo = {
    user,
    setUser,
    firebaseSignup,
    firebaseLogin,
    firebaseGoogleLogin,
    updateUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
