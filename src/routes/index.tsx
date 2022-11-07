
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
            name="Home"
            component={Home} />
        </Stack.Navigator>
    );
}