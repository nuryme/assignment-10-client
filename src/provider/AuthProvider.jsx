import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true)

  const firebaseSignup = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const firebaseLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const firebaseGoogleLogin = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (userData) => {
    setLoader(true)
    return updateProfile(auth.currentUser, userData)
  }
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const firebaseLogOut = () => {
    setLoader(true)
    return signOut(auth)
  }
  

  console.log(user);

  const authInfo = {
    user,
    setUser,
    firebaseSignup,
    firebaseLogin,
    firebaseGoogleLogin,
    updateUser,
    firebaseLogOut,
    loader
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
