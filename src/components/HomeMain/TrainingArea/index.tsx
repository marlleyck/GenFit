import { useContext } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Training } from "./Training";
import { AddNewTraining } from "./AddNewTraining";

import { Container, FlatList } from "./styles";

export const TrainingArea = () => {
    const { trainingList } = useContext(TrainingContext)

    return (
        <Container>
            <FlatList
            data={trainingList}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }: { item: any }) => <Training title={item.title} />} />

            {/* <Training title='Segunda' /> */}
            <AddNewTraining />
        </Container>
    );
}