import { useEffect, useState } from 'react';
import { AvatarType } from '../../../@types/AvatarType';

import { Container, Image } from './styles';

type AvatarProps = {
    item: AvatarType;
    setAvatar: (newState: any) => void;
    setModalVisible: (newState: boolean) => void;
}

export const Avatar = ({ item, setAvatar, setModalVisible }: AvatarProps) => {
    const handlePressAvatar = () => {
        setAvatar(item.url)
        setModalVisible(false)
    }
    return (
        <Container
        onPress={handlePressAvatar}>
            <Image source={item.url} />
        </Container>
    );
}