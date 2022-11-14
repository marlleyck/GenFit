import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from "react-native";

import { HomeHeader } from '../../components/HomeHeader';

import { Container, Title } from './styles';

export const Home = () => {
    const Gradient_Home = require('../../../assets/imgs/Gradient-Home.png') 
    return (
        <Container>
            <ImageBackground
            style={{
                flex: 1, 
                justifyContent: 'flex-start', 
                alignItems: 'center' 
            }}
            source={Gradient_Home}>
                <HomeHeader />
                <Title>Home!</Title>
            </ImageBackground>
            <StatusBar style="dark" backgroundColor="white" />
        </Container>
    );
}