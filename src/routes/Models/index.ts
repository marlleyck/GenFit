import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PropsNavigationStack = {
    Welcome: undefined;
    CreateProfile: undefined;
    Home: undefined;
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;