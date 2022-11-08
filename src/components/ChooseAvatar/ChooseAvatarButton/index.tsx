import { Container, Title } from "./styles";

type ChooseAvatarButtonProps = {
    setModalVisible: (newState: boolean) => void;
}

export const ChooseAvatarButton = ({ setModalVisible }: ChooseAvatarButtonProps) => {
    const handlePressAvatar = () => {
        setModalVisible(true)
    }
    return (
        <Container
        onPress={handlePressAvatar}>
            <Title>Escolha seu avatar</Title>
        </Container>
    );
}