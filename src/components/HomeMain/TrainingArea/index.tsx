import { Training } from "./Training";
import { AddNewTraining } from "./AddNewTraining";

import { Container, FlatList } from "./styles";

export const TrainingArea = () => {
    return (
        <Container>
            {/* <FlatList /> */}
            <Training title='Segunda' />
            <AddNewTraining />
        </Container>
    );
}