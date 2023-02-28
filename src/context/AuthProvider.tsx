import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'


export const AuthContext = createContext<any | null>(null)
const auth = getAuth(app)

const AuthProvider = ({ children }: any) => {

    const [user, setUser] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email: any, password: any) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email: any, password: any) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUser = (userInfo: { displayName: string, photoURL: string }) => {
        if (auth.currentUser != null) {
            return updateProfile(auth.currentUser, userInfo)
        }
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const info = {
        createUser,
        signIn,
        updateUser,
        logOut,
        loading,
        user,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;