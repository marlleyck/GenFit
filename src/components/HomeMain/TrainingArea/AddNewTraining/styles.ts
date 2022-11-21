import styled from "styled-components/native";
import { THEME } from "../../../../THEME";

export const Container = styled.View`
    width: 100%;
    height: 50px;

    align-items: center;
    justify-content: center;

    margin-top: 10px;
`

export const Content = styled.TouchableOpacity`
`

export const Image = styled.Image`
`

export const ContainerModal = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;


    background-color: rgba(32, 32, 36, 0.8);
`

export const ContentModal = styled.View`
    width: 90%;
    height: 90%;

    border-radius: 15px;

    background-color: ${THEME.COLORS.BACKGROUND_HOME};
`

export const HeaderModal = styled.View`
    width: 100%;
    height: 50px;

    align-items: flex-end;

    padding: 10px 10px 0 0;
`

export const HeaderContent = styled.TouchableOpacity``