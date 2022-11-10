import { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { UserType } from "../@types/UserType";

type AppContextProviderProps = {
    children: ReactNode;
}

type AppContextType = {
    nameUser: string;
    setNameUser: (newState: string) => void;
    emailUser: string;
    setEmailUser: (newState: string) => void;
    getInfosUser: () => void;
    setInfosUser: (infosUser: UserType) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [nameUser, setNameUser] = useState('')
    const [emailUser, setEmailUser] = useState('')

    const getInfosUser = async () => {
        try {
            const infosUser = await AsyncStorage.getItem('@genfit:InfosUser')
            console.log(infosUser)
            
        } catch(e) {
            console.log(e)
        }
    }

    const setInfosUser = async (infosUser: UserType) => {
        try {
            await AsyncStorage.setItem('@genfit:InfosUser', JSON.stringify(infosUser))
            Toast.show({
                type: "success",
                text1: "Você foi cadastrado com sucesso!"
            })
        } catch(e) {
            console.log(e)
            Toast.show({
                type: "error",
                text1: "Ocorreu um erro, tente novamente!"
            })
        }
    }
    

    return (
        <AppContext.Provider 
        value={{ 
            nameUser, setNameUser, emailUser, setEmailUser, getInfosUser, setInfosUser 
        }}>
            {children}
        </AppContext.Provider>
    );
}

