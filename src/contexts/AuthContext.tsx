import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

type AuthContextType = {
    signIn: boolean | undefined;
    setSignIn: (newState: boolean) => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [signIn, setSignIn] = useState<boolean | undefined>(undefined)
    const isSignIn = async () => {
        const user = await AsyncStorage.getItem('@genfit:InfosUser')
        // console.log(user)
        if (user === null) {
            setSignIn(false)
        } else if (user !== null && user !== undefined) {
            setSignIn(true)
        }

        // console.log(signIn, '=>', user)
    }

    useEffect(() => {
        isSignIn()
    }, [])


    return (
        <AuthContext.Provider value={{ signIn, setSignIn }}>
            {children}
        </AuthContext.Provider>
    );
}