import { Container, Image } from './styles';

type AvatarProps = {
    url: number;
}

export const Avatar = ({ url }: AvatarProps) => {
    return (
        <Container>
            <Image source={url} />
        </Container>
    );
}