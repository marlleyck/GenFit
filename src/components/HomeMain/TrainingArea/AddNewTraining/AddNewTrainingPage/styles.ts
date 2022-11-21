import styled from "styled-components/native";
import { THEME } from "../../../../../THEME";

export const Container = styled.View`
    width: 100%;
    height: 100%;
`

export const Content = styled.View`
    width: 100%;
    align-items: center;
`

export const ContentTouch = styled.TouchableOpacity``

export const TitleInput = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    font-size: 23px;
    margin-bottom: 10px;
    color: black;
`

export const Input = styled.TextInput`
    width: 80%;

    font-family: ${THEME.FONTS.Roboto_300Light};
    font-size: 23px;
    color: black;

    padding: 8px;
    margin-bottom: 10px;

    border: 0.4px solid gray;
    border-radius: 8px;
    background-color: transparent;
`