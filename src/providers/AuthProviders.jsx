import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true)

    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const updateUserInfo =(name, photo)=>{
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo});
    }

    const logOut=()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged( auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])
    const authInfo ={
        user,
        loading,
        logOut,
        createUser,
        signInUser,
        googleSignIn,
        updateUserInfo,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;