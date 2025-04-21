"use client"

import { isUserLoggedIn } from "@/helpers/auth";

const {useState, createContext, useEffect} = require("react")
export const Authcontext = createContext(null);
const AuthProvider = (({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        setLoggedIn(isUserLoggedIn())
    },[])

    return (<Authcontext.Provider value={{isLoggedIn, setLoggedIn}}>
        {children}
    </Authcontext.Provider>
    );
})
export default AuthProvider;