import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext();
const provider = new GoogleAuthProvider();
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateName=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>unsubscribe;
    },[user])
    const authInfo={user,loading, createUser,login,updateName,logOut, googleLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;