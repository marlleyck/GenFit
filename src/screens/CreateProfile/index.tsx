import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

import { ImageBackground, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FormLogin } from '../../components/FormLogin';
import { ChooseAvatar } from '../../components/ChooseAvatar';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { UserType } from '../../@types/UserType';

import { PropsStack } from '../../routes/Models';

import { Container, ImageWeight, Title, Button, ButtonTitle } from './styles';


export const CreateProfile = () => {
    const gradient = require('../../../assets/imgs/Gradient.png')
    const weight = require('../../../assets/imgs/weight.png')
    const navigation = useNavigation<PropsStack>()

    const { nameUser, emailUser, setInfosUser, getInfosUser } = useContext(AppContext)

    const handleCreateUser = () => {
        const newData: UserType = {
            id: uuidv4(),
            name: nameUser,
            email: emailUser
        }

        setInfosUser(newData)
        getInfosUser()

        navigation.navigate('Home')
    }

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
                onPress={handleCreateUser}>
                <ButtonTitle>Feito!</ButtonTitle>
            </Button>
            </ImageBackground>
        </Container>
    );
}