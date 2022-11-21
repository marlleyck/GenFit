import { useState } from "react";
import { Modal } from "react-native";

import { AddNewTrainingPage } from "./AddNewTrainingPage";

import { AntDesign } from '@expo/vector-icons';

import { 
    Container, ContainerModal, 
    Content, ContentModal, 
    HeaderModal, Image, 
    HeaderContent 
} from "./styles";

export const AddNewTraining = () => {
    const [modalVisible, setModalVisible] = useState(true)
    return (
        <Container>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible(!modalVisible) }}>
                <ContainerModal>
                    <ContentModal>
                        <HeaderModal>
                            <HeaderContent onPress={() => setModalVisible(!modalVisible)}>
                                <AntDesign
                                name="closecircle" 
                                size={30} 
                                color="black" />
                            </HeaderContent>
                        </HeaderModal>
                        
                        <AddNewTrainingPage />
                    </ContentModal>
                </ContainerModal>
            </Modal>

            <Content
            onPress={() => setModalVisible(true)}>
                <Image source={require('../../../../../assets/imgs/Plus.png')} />
            </Content>
        </Container>
    );
}