import styled from "styled-components/native";
import { THEME } from "../../THEME";

export const Container = styled.View`
    width: 100%;

    align-items: center;
    justify-content: center;
    margin-top: 15px;
`

export const Content = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 15px;
`

export const ContentLabel = styled.View`
    width: 84%;
`

export const Label = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    font-size: 25px;
    color: white;
    text-align: left;
`

export const Input = styled.TextInput`
    width: 85%;
    height: 50px;
    background-color: white;

    padding: 0 10px;

    border-radius: 15px;
`
