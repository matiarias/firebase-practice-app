import { createContext, useContext, useState, useEffect } from "react";

import { auth, db } from "../firebase/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      favsCharacters: [],
    });
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const loginGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsuscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, logIn, logOut, user, loginGoogle, loginGithub }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
