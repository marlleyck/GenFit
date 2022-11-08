import { useState } from "react";
import { Modal } from "react-native";

import { ChooseAvatarButton } from "./ChooseAvatarButton";

import { Container, Image } from "./styles";

export const ChooseAvatar = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const avatar = require('../../../assets/imgs/avatars/female1.png')
    return (
        <Container>
            <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}>

            </Modal>
            <Image source={avatar} />
            <ChooseAvatarButton
            setModalVisible={setModalVisible}  />
        </Container>
    );
}