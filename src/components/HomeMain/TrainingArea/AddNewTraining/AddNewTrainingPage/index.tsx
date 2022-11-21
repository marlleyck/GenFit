import { useState } from "react";

import { AntDesign } from '@expo/vector-icons'; 
import { Container, Input, Content, ContentTouch, TitleInput } from "./styles";

export const AddNewTrainingPage = () => {
    const [trainingText, setTrainingText] = useState('Novo treino')

    return (
        <Container>
            <Content>
                <Input
                value={trainingText}
                onChangeText={(text) => setTrainingText(text)} />
            </Content>

            <Content>
                <ContentTouch>
                    <AntDesign name="pluscircle" size={40} color="black" />
                </ContentTouch>
            </Content>
        </Container>
    );
}