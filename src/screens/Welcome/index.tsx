import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';

import { PropsStack } from '../../routes/Models';

import { Container, Men, ContentTitles, Title, Subtitle, Button, ButtonTitle } from "./styles";

export const Welcome = () => {
    const Gradient = require('../../../assets/imgs/Gradient.png')
    const men = require('../../../assets/imgs/men.png')
    const navigation = useNavigation<PropsStack>()

    return (
        <Container>
            <ImageBackground
            style={{
                flex: 1, 
                justifyContent: 'flex-start', 
                alignItems: 'center' 
            }}
            source={Gradient}>
                <Men
                source={men} />

            <ContentTitles>
                <Title>
                    Gerencie seus treinos!
                </Title>
                <Subtitle>
                    Tenha auxílio em seus treinos e se despreocupe,
                    o resto eu faço por você!
                </Subtitle>
            </ContentTitles>

            <Button
                onPress={() => { navigation.navigate('CreateProfile') }}>
                <ButtonTitle>Vamos lá!</ButtonTitle>
            </Button>
            </ImageBackground>

            <StatusBar style="dark" backgroundColor="white" />
        </Container>
    );
}