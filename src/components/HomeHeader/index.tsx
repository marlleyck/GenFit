import { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { AppContext } from '../../contexts/AppContext';
import { Container, Image } from './styles';

export const HomeHeader = () => {
    const { userData, avatar, dataIsArrived, avatarList, setAvatar } = useContext(AppContext)
    const [avatarUrl, setAvatarUrl] = useState<any>()

    useEffect(() => {
        let avatarUrlData
        if (userData) {
            avatarUrlData = avatarList.filter(
                (item) => item.id == userData.avatarId
            )
        }
        setAvatarUrl(avatarUrlData)
        setAvatar(avatarUrlData[0].url)

        
    }, [])

    return (
        <>
        {dataIsArrived ?
            <Container>
                <Image source={avatar} />
                <Text>{avatar}</Text> 
            </Container>
        : null}
        </>
    );
}