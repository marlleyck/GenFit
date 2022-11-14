import { useContext, useState } from "react";
import { Modal } from "react-native";
import { AppContext } from "../../contexts/AppContext";

import { Avatars } from "./Avatars";
import { ChooseAvatarButton } from "./ChooseAvatarButton";

import { Container, Image, ContainerModal, ContentModal } from "./styles";

type ChooseAvatarProps = {
    setAvatarId: (newState: number) => void;
}

export const ChooseAvatar = ({ setAvatarId }: ChooseAvatarProps) => {
    const [modalVisible, setModalVisible] = useState(false)
    const { avatar, setAvatar } = useContext(AppContext)

    const handlePressOutModal = () => {
        setModalVisible(false)
    }

    return (
        <Container>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}>
                <ContainerModal
                onPress={handlePressOutModal}>
                    <ContentModal>
                        <Avatars 
                        setModalVisible={setModalVisible} 
                        setAvatar={setAvatar}
                        setAvatarId={setAvatarId} />
                    </ContentModal>
                </ContainerModal>
            </Modal>
            <Image source={avatar} />

            <ChooseAvatarButton
            setModalVisible={setModalVisible}  />
        </Container>
    );
}