import { Container, Content, ContentLabel, Label, Input } from './styles';

export const FormLogin = () => {
    return (
        <Container>
            <Content>
                <ContentLabel>
                    <Label>Nome:</Label>
                </ContentLabel>
                <Input />
            </Content>

            <Content>
                <ContentLabel>
                    <Label>Email:</Label>
                </ContentLabel>
                <Input />
            </Content>
        </Container>
    );
}