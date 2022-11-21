import { Container, Input, Content, Icon } from "./styles";
import { Feather } from '@expo/vector-icons'; 

export const SearchArea = () => {
    return (
        <Container>
            <Content>
                <Feather 
                name="search" 
                size={24} 
                color="black"
                style={Icon.Style} />
                <Input
                placeholder="Search" />
            </Content>
        </Container>
    );
}