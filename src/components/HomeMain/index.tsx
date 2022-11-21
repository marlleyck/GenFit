import { SearchArea } from "./SearchArea";
import { TrainingArea } from "./TrainingArea";

import { Container, Title } from "./styles";

export const HomeMain = () => {
    return (
        <Container>
            <Title>Treinos</Title>
            <SearchArea />
            <TrainingArea />
        </Container>
    );
}