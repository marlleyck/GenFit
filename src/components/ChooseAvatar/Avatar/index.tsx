import { Container, Image } from './styles';

type AvatarProps = {
    item: any;
}

export const Avatar = ({ item }: AvatarProps) => {
    return (
        <Container>
            <Image source={item} />
        </Container>
    );
}