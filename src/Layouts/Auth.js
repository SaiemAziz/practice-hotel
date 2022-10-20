import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext('');
const Auth = ({children}) => {

    let auth = getAuth(app)
    let [user, setUser] = useState(null)
    let googleProvider = new GoogleAuthProvider()
    let [loading, setLoading] = useState(true)

    // fetch user if logged in from server
    useEffect(() => {
        let subscribe = onAuthStateChanged(auth, user=>{
                console.log(user);
                setUser(user);
                setLoading(false);
        })

        return () => {
            subscribe()
        }
    },[])


    // create new user by email and password
    let createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in and out by email and password
    let logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    let logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // sign in by google 
    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    let authInfo = {
        createUser, 
        loading,
        logIn, 
        logOut, 
        user, 
        setUser, 
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;