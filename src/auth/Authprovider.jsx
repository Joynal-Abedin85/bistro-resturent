import React, {  createContext, useEffect, useState } from 'react';
import { app } from '../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const Authcontext = createContext(null)
const auth = getAuth(app)
const Authprovider = ({children}) => {
    
    const [user,setuser] = useState(null)
    const [loading , setloading] = useState(true)


    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signuser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth , email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(()=> {
        const unsub = onAuthStateChanged(auth , currentuser => {
            setuser(currentuser)
            setloading(false)
        })
        return () => {
            return unsub()
        }
    },[])
    const authinfo = {
        user,
        loading,
        createuser,
        signuser,
        logout
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;