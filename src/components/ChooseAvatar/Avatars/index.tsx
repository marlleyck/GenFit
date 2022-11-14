import { useContext, useState } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import { Avatar } from '../Avatar';
import { HeaderAvatars } from './HeaderAvatars';

import { FlatList } from './styles';

type AvatarsProps = {
    setModalVisible: (newState: boolean) => void;
    setAvatar: (newState: any) => void;
    setAvatarId: (newState: number) => void;
}

export const Avatars = ({ setModalVisible, setAvatar, setAvatarId }: AvatarsProps) => {
    const { userData, dataIsArrived, avatarList } = useContext(AppContext)
    const [avatarUrl, setAvatarUrl] = useState<any>()


    return (
        <FlatList
            ListHeaderComponent={ <HeaderAvatars setModalVisible={setModalVisible} /> }
            data={avatarList}
            keyExtractor={( item, index ) => String(index)}
            renderItem={({ item }: { item: any }) => 
            <Avatar 
            item={item} 
            setAvatar={setAvatar}
            setModalVisible={setModalVisible}
            setAvatarId={setAvatarId} />}
        />
    );
}