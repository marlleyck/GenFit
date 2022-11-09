import { useState } from "react";
import { Modal } from "react-native";

import { Avatars } from "./Avatars";
import { ChooseAvatarButton } from "./ChooseAvatarButton";

import { Container, Image, ContainerModal, ContentModal } from "./styles";

export const ChooseAvatar = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const avatar = require('../../../assets/imgs/avatars/female1.png')

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
                        <Avatars setModalVisible={setModalVisible} />
                    </ContentModal>
                </ContainerModal>
            </Modal>
            <Image source={avatar} />
            <ChooseAvatarButton
            setModalVisible={setModalVisible}  />
        </Container>
    );
}