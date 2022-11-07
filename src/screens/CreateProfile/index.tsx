import { FormLogin } from '../../components/FormLogin';

import { Container, ImageWeight, Title } from './styles';
import { ImageBackground, Keyboard } from 'react-native';

export const CreateProfile = () => {
    const gradient = require('../../../assets/imgs/Gradient.png')
    const weight = require('../../../assets/imgs/weight.png')

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
            </ImageBackground>
        </Container>
    );
}