import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true)

    const userSignIn=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
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
        userSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;