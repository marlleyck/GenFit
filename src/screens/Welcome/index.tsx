import { Container, Men, Title } from "./styles";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

export const Welcome = () => {
    const gradient = require('../../../assets/imgs/Gradient.png')
    const men = require('../../../assets/imgs/men.png')

    return (
        <Container>
            <ImageBackground
            style={{
                flex: 1, 
                justifyContent: 'flex-start', 
                alignItems: 'center' 
            }}
            source={gradient}>
                <Men
                source={men} />

            
            <Title>
                Gerencie seus treinos!
            </Title>
            </ImageBackground>

            <StatusBar style="auto" backgroundColor="white" />
        </Container>
    );
}