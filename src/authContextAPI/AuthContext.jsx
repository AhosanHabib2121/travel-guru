import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig/FirebaseConfig";

export const AuthContextApi = createContext(null)

const auth = getAuth(app);

const AuthContext = ({children}) => {
    const { user, setUser } = useState(null);

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

    const authInfo = {
        user,
        registration,
        emailVerify,
        loginAccount
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