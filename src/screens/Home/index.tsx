import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Keyboard } from "react-native";

import { HomeHeader } from '../../components/HomeHeader';
import { HomeMain } from '../../components/HomeMain';

import { Container } from './styles';

export const Home = () => {
    const Gradient_Home = require('../../../assets/imgs/Gradient-Home.png') 
    return (
        <Container
        onPress={() => Keyboard.dismiss()}>
            <ImageBackground
            style={{
                flex: 1, 
                justifyContent: 'flex-start', 
                alignItems: 'center' 
            }}
            source={Gradient_Home}>
                <HomeHeader />
                <HomeMain />
            </ImageBackground>
            <StatusBar style="dark" backgroundColor="white" />
        </Container>
    );
}