import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Pages/Shared/Custom/useAxiosPublic";
import auth from "./firebase.init";


export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()

  // create New User
  const createUser = (email, password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password)
  };

  // update profile 

 const updateUserProfile = (name , photoUrl) => {
 return updateProfile(auth.currentUser, {
    displayName: name, photoURL: photoUrl
  })
 }

//  login existing user 

const loginUser = (email , password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

// login with google 

const provider = new GoogleAuthProvider();
const loginWithGoogle = () => {
  setLoading(true)
  return signInWithPopup(auth, provider)
}

// log out user 

const logOutUser = () => {
    return signOut(auth)
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
 setUser(currentUser);
    if(currentUser.email) {
      setUser(currentUser)
      await axiosPublic.post('/jwt' , {email : currentUser.email},{withCredentials : true})

    }
    else{
      setUser(currentUser)
       await axiosPublic.get('/logout',{withCredentials : true})
     
      setLoading(false);
    }
      
      setUser(currentUser);
      
      console.log("Current User Now -->", currentUser);
     
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
    updateUserProfile,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
