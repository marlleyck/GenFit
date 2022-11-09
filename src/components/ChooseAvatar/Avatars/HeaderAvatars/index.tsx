import { AntDesign } from '@expo/vector-icons';

import { Container, Content } from './styles';

type HeaderAvatarsProps = {
    setModalVisible: (newState: boolean) => void;
}

export const HeaderAvatars = ({ setModalVisible }: HeaderAvatarsProps) => {
    const handlePressCloseButton = () => {
        setModalVisible(false)
    }
    return (
        <Container>
            <Content
            onPress={handlePressCloseButton}>
                <AntDesign
                name="closecircle" 
                size={30} 
                color="black" />
            </Content>
        </Container>
    );
}