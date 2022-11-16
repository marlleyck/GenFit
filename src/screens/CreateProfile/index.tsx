import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ImageBackground, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FormLogin } from '../../components/FormLogin';
import { ChooseAvatar } from '../../components/ChooseAvatar';

/* import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'; */

import { UserType } from '../../@types/UserType';

import { PropsStack } from '../../routes/Models';

import { Container, ImageWeight, Title, Button, ButtonTitle } from './styles';


export const CreateProfile = () => {
    const gradient = require('../../../assets/imgs/Gradient.png')
    const weight = require('../../../assets/imgs/weight.png')
    const navigation = useNavigation<PropsStack>()

    const { nameUser, emailUser, setInfosUser, avatar } = useContext(AppContext)
    const [avatarId, setAvatarId] = useState<number>(1)


    const handleCreateUser = () => {
        const newData: UserType = {
            id: 1,
            name: nameUser,
            email: emailUser,
            avatarUrl: avatar,
            avatarId
        }

        setInfosUser(newData)
        
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
            <ChooseAvatar setAvatarId={setAvatarId} />

            <Button
                onPress={handleCreateUser}>
                <ButtonTitle>Feito!</ButtonTitle>
            </Button>
            </ImageBackground>
        </Container>
    );
}