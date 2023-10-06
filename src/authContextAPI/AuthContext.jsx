import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebaseConfig/FirebaseConfig";

export const AuthContextApi = createContext(null)

const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [ user, setUser]  = useState(null);

    // create account (registration)
    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user verification email
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // loginAccount
    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out here
    const logOut = () => {
        return signOut(auth);
    }
    // onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }

    },[])

    const authInfo = {
        user,
        registration,
        emailVerify,
        loginAccount,
        logOut
    }
    return (
        <AuthContextApi.Provider value={authInfo}>
            {children}
        </AuthContextApi.Provider>
    );
};
AuthContext.propTypes = {
   children:PropTypes.node 
}
export default AuthContext;