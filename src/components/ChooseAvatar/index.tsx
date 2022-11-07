import { ChooseAvatarButton } from "./ChooseAvatarButton";

import { Container, Image } from "./styles";

export const ChooseAvatar = () => {
    const avatar = require('../../../assets/imgs/avatars/female1.png')
    return (
        <Container>
            <Image source={avatar} />
            <ChooseAvatarButton />
        </Container>
    );
}