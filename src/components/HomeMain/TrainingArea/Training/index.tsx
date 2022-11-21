import { Container, Title } from "./styles";

type TraingProps = {
    title: string;
}

export const Training = ({ title }: TraingProps) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    );
}