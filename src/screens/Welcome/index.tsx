import { useNavigation } from '@react-navigation/native';

import { PropsStack } from '../../routes/Models';

import { Container, Men, ContentTitles, Title, Subtitle, Button, ButtonTitle } from "./styles";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";


export const Welcome = () => {
    const gradient = require('../../../assets/imgs/Gradient.png')
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
            source={gradient}>
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

            <StatusBar style="auto" backgroundColor="white" />
        </Container>
    );
}