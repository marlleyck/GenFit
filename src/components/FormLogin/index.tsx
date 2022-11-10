import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

import { Container, Content, ContentLabel, Label, Input } from './styles';

export const FormLogin = () => {
    const { nameUser, setNameUser, emailUser, setEmailUser } = useContext(AppContext)
    return (
        <Container>
            <Content>
                <ContentLabel>
                    <Label>Nome:</Label>
                </ContentLabel>
                <Input
                    value={nameUser}
                    onChangeText={(text: string) => setNameUser(text)} />
            </Content>

            <Content>
                <ContentLabel>
                    <Label>Email:</Label>
                </ContentLabel>
                <Input
                value={emailUser}
                onChangeText={(text: string) => setEmailUser(text)} />
            </Content>
        </Container>
    );
}