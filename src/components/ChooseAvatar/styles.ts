import styled from "styled-components/native";
import { THEME } from "../../THEME";

export const Container = styled.View`
    width: 100%;

    align-items: center;
    justify-content: center;
`

export const Image = styled.Image`
    width: 100px;
    height: 100px;
`

export const ContainerModal = styled.Pressable`
    flex: 1;

    align-items: center;
    justify-content: center;


    background-color: rgba(32, 32, 36, 0.8);
`

export const ContentModal = styled.View`
    width: 50%;
    height: 90%;

    border-radius: 15px;

    background-color: ${THEME.COLORS.BACKGROUND_HOME};
`