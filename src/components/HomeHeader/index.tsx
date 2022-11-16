import { useContext, useEffect, useState } from 'react';
import { AvatarType } from '../../@types/AvatarType';
import { AppContext } from '../../contexts/AppContext';

import { Container, Image, ContentTouchable, Name } from './styles';

export const HomeHeader = () => {
    const { userData, avatar, dataIsArrived, avatarList, setAvatar } = useContext(AppContext)
    const [avatarUrl, setAvatarUrl] = useState<any>()

    useEffect(() => {
        if (userData !== null) {
            let avatarUrlData: AvatarType[] | null = []
            if (userData) {
                avatarUrlData = avatarList.filter(
                    (item) => item.id == userData.avatarId
                )
            }
            setAvatarUrl(avatarUrlData)
            setAvatar(avatarUrlData[0].url) 
        }
    }, [dataIsArrived])

    return (
        <>
        {dataIsArrived ?
            <Container>
                <Name>{userData?.name}</Name>
                <ContentTouchable>
                    <Image source={avatar} />
                </ContentTouchable>
            </Container>
        : null}
        </>
    );
}