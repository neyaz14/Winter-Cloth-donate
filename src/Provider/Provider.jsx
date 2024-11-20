import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';


export const AuthContext = createContext(null)
const Provider = ({ children }) => {

    // for ovserving on user
    // const [userInfo, setuserInfo] = useState(null);
    const [Currentuser, setCurrentUser] = useState(null);
    const [loading, setloading] = useState(true);

    // console.log(Currentuser);
    const loggedInUser = auth.currentUser;
    // console.log(loggedInUser)
    const forgetPassword = (email )=>{
        return sendPasswordResetEmail(auth, email);
    }
    const singUP = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const singOutUser = () => {
        setloading(true);
        return signOut(auth);
    }
    // if (loggedInUser !== null) {
    //     const displayName = loggedInUser.displayName;
    //     const email = loggedInUser.email;
    //     const photoURL = loggedInUser.photoURL;
    //     const emailVerified = loggedInUser.emailVerified;
    //     const userInf = { displayName, email, photoURL, emailVerified };

    //     console.log(displayName)

    // }

    const updateUserProfile=(updateData)=>{
        return updateProfile(auth.currentUser, updateData);
    }

    useEffect(() => {
        const loginUser = onAuthStateChanged(auth, Currentuser => {
            // console.log('current user', Currentuser);
            setCurrentUser(Currentuser);
            setloading(false);
        })
        return () => {
            loginUser();
        }
    }, [])

    const authInfo = {

        Currentuser, setCurrentUser, singIn, singUP, singOutUser, loading, loggedInUser, updateUserProfile,forgetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;