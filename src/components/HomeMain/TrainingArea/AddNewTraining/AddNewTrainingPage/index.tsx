import { useState } from "react";
import { Container, Input, ContentLabel, TitleInput } from "./styles";

export const AddNewTrainingPage = () => {
    const [trainingText, setTrainingText] = useState('Novo treino')

    return (
        <Container>
            <ContentLabel>
                {/* <TitleInput>Novo treino</TitleInput> */}
                <Input
                value={trainingText}
                onChangeText={(text) => setTrainingText(text)} />
            </ContentLabel>
        </Container>
    );
}