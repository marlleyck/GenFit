
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from "../screens/Welcome";
import { CreateProfile } from "../screens/CreateProfile";
import { Home } from "../screens/Home";

import { PropsNavigationStack } from "./Models";

const Stack = createNativeStackNavigator<PropsNavigationStack>()

export default function Routes() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
            name="Welcome"
            component={Welcome} />

            <Stack.Screen
            name="Home"
            component={Home} />

            <Stack.Screen
            name="CreateProfile"
            component={CreateProfile} />
        </Stack.Navigator>
    );
}