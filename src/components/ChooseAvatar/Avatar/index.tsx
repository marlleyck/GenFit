import { Container, Image } from './styles';

type AvatarProps = {
    url: any;
}

export const Avatar = ({ url }: AvatarProps) => {
    return (
        <Container>
            <Image source={url} />
        </Container>
    );
}