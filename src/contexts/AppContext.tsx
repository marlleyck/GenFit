import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { UserType } from "../@types/UserType";
import { AvatarType } from "../@types/AvatarType";

type AppContextProviderProps = {
    children: ReactNode;
}

type AppContextType = {
    nameUser: string | undefined;
    setNameUser: (newState: string | undefined) => void;
    emailUser: string | undefined;
    setEmailUser: (newState: string | undefined) => void;
    getInfosUser: () => Promise<string | undefined | null>;
    setInfosUser: (infosUser: UserType) => void;
    avatar: any;
    setAvatar: (newState: any) => void;
    dataIsArrived: boolean;
    userData: UserType | undefined;
    avatarList: AvatarType[];
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const avatarList: AvatarType[] = [
        {
            id: 1,
            name: "Female1",
            url: require('../../assets/imgs/avatars/female1.png')
        },
        {
            id: 2,
            name: "Female2",
            url: require('../../assets/imgs/avatars/female2.png')
        },
        {
            id: 3,
            name: "Female3",
            url: require('../../assets/imgs/avatars/female3.png')
        },
        {
            id: 4,
            name: "Female4",
            url: require('../../assets/imgs/avatars/female4.png')
        },
        {
            id: 5,
            name: "Female5",
            url: require('../../assets/imgs/avatars/female5.png')
        },
        {
            id: 6,
            name: "Male1",
            url: require('../../assets/imgs/avatars/male1.png')
        },
        {
            id: 7,
            name: "Male2",
            url: require('../../assets/imgs/avatars/male2.png')
        },
        {
            id: 8,
            name: "Male3",
            url: require('../../assets/imgs/avatars/male3.png')
        },
        {
            id: 9,
            name: "Male4",
            url: require('../../assets/imgs/avatars/male4.png')
        }
        
    ]

    const [userData, setUserData] = useState<UserType | undefined>()
    const [nameUser, setNameUser] = useState<string | undefined>('')
    const [emailUser, setEmailUser] = useState<string | undefined>('')
    const [avatar, setAvatar] = useState(require('../../assets/imgs/avatars/female1.png'))
    const [dataIsArrived, setDataIsArrived] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // await AsyncStorage.removeItem('@genfit:InfosUser')
                const userRequest = await AsyncStorage.getItem('@genfit:InfosUser')
                setDataIsArrived(true)
                setUserData(JSON.parse(userRequest!))
                // console.log(userRequest)
    
                setNameUser(userData?.name)
                setEmailUser(userData?.email)
            } catch(e) {
                console.log(e)
            }
        }

        fetchUser()
    }, [])

    const getInfosUser = async () => {
        try {
            const infosUser = await AsyncStorage.getItem('@genfit:InfosUser')
            return infosUser
            
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
            nameUser, setNameUser, emailUser, setEmailUser, getInfosUser, setInfosUser, avatar, setAvatar,
            dataIsArrived, userData, avatarList
        }}>
            {children}
        </AppContext.Provider>
    );
}

