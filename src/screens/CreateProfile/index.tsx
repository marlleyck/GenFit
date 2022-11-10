import { ImageBackground, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormLogin } from '../../components/FormLogin';
import { ChooseAvatar } from '../../components/ChooseAvatar';

import { PropsStack } from '../../routes/Models';

import { Container, ImageWeight, Title, Button, ButtonTitle } from './styles';


export const CreateProfile = () => {
    const gradient = require('../../../assets/imgs/Gradient.png')
    const weight = require('../../../assets/imgs/weight.png')
    const navigation = useNavigation<PropsStack>()

    return (
        <Container
        onPress={() => Keyboard.dismiss()}>
            <ImageBackground
            style={{
                flex: 1,
                justifyContent: 'flex-start', 
                alignItems: 'center'
            }}
            source={gradient}>
                <ImageWeight
                source={weight} />


            <Title>
                Quero te conhecer melhor!
            </Title>

            <FormLogin />
            <ChooseAvatar />

            <Button
                onPress={() => { navigation.navigate('Home') }}>
                <ButtonTitle>Feito!</ButtonTitle>
            </Button>
            </ImageBackground>
        </Container>
    );
}