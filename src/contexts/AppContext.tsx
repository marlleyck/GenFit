import { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppContextProviderProps = {
    children: ReactNode;
}

type AppContextType = {
    
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: AppContextProviderProps) => {

    useEffect(() => {

    }, [])

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
}

