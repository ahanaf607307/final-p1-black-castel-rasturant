import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./firebase.init";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create New User
  const createUser = (email, password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password)
  };

//  login existing user 

const loginUser = (email , password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

// log out user 

const logOutUser = () => {
    return signOut(auth)
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log("Current User Now -->", currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // send all data from here
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    loginUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
