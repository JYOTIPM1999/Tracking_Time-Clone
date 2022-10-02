import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
//on auth state change to check if user is authenticated or not
import { auth } from "../firebase";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
 const navigate= useNavigate()

  const createUser = (email, password) => {
      //  console.log(email,password)
    return createUserWithEmailAndPassword(auth, email, password);

  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);

    // axios.post("http://localhost:8080/user/signup",{
    //   email: user.email,
    //   password: user.uid
    // })  
    
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);

    });
  

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn,googleSignIn }}>
      {children}
    </UserContext.Provider>
  );
};


export const UserAuth = () => {
  return useContext(UserContext);
};
