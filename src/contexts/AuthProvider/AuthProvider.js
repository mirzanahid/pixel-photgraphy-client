import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged,
    signOut,
    updateProfile
} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [load, setLoad] = useState(true)

    //  login with email and password
    const createUser = (email, password) => {
        setLoad(false)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    // update image and name
    const updateUserProfile = (profile) => {
        setLoad(false)
        return updateProfile(auth.currentUser, profile)
    }

    // login with email and password
    const login = (email, password) => {
        setLoad(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logout = () => {
        setLoad(false)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoad(false)
            setUser(currentUser)
        })
        return () => unSubscribe();
    }, []);

    if (load) {
        return <div className='loader'><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    }
    const authInfo = { createUser, updateUserProfile, user, login, logout }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;