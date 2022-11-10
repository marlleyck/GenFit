import React, { useContext } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from "../contexts/AuthContext";
import { ActivityIndicator } from "react-native";


import { Welcome } from "../screens/Welcome";
import { CreateProfile } from "../screens/CreateProfile";
import { Home } from "../screens/Home";

import { PropsNavigationStack } from "./Models";


const Stack = createNativeStackNavigator<PropsNavigationStack>()

export default function Routes() {
    const { signIn, setSignIn } = useContext(AuthContext)

    const handleTest = () => {
    }

    return (
        <>
        { signIn === undefined 
        ? <ActivityIndicator /> 
        : 
            <>
            {signIn
            ? <Stack.Navigator
                screenOptions={{
                headerShown: false
                }}>
                    <Stack.Screen
                    name="Home"
                    component={Home} />
              </Stack.Navigator>
              : <Stack.Navigator
                screenOptions={{
                headerShown: false
                }}>
                    <Stack.Screen
                    name="Welcome"
                    component={Welcome} />
            
                    <Stack.Screen
                    name="CreateProfile"
                    component={CreateProfile} />
                    <Stack.Screen
                    name="Home"
                    component={Home} />
                </Stack.Navigator>}
            </>
        }
        </>
    );
}