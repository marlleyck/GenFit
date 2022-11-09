import { ListRenderItem } from 'react-native';
import { Avatar } from '../Avatar';

import { AvatarType } from '../../../@types/AvatarType';

import { FlatList } from './styles';


export const Avatars = () => {
    const avatarList: AvatarType[] = [
        {
            id: 1,
            name: "Female1",
            url: require('../../../../assets/imgs/avatars/female1.png')
        },
        {
            id: 2,
            name: "Female2",
            url: require('../../../../assets/imgs/avatars/female2.png')
        },
        {
            id: 3,
            name: "Female3",
            url: require('../../../../assets/imgs/avatars/female3.png')
        },
        {
            id: 4,
            name: "Female4",
            url: require('../../../../assets/imgs/avatars/female4.png')
        },
        {
            id: 5,
            name: "Female5",
            url: require('../../../../assets/imgs/avatars/female5.png')
        },
        {
            id: 6,
            name: "Male1",
            url: require('../../../../assets/imgs/avatars/male1.png')
        },
        {
            id: 7,
            name: "Male2",
            url: require('../../../../assets/imgs/avatars/male2.png')
        },
        {
            id: 8,
            name: "Male3",
            url: require('../../../../assets/imgs/avatars/male3.png')
        },
        {
            id: 9,
            name: "Male4",
            url: require('../../../../assets/imgs/avatars/male4.png')
        }
        
    ]

    return (
        <FlatList
            data={avatarList}
            keyExtractor={( item, index ) => String(index)}
            renderItem={({ item }: { item: any }) => <Avatar url={item.url} />}
        />
    );
}