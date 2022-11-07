import styled from "styled-components/native";
import { THEME } from "../../../THEME";

export const Container = styled.TouchableOpacity`
    width: 70%;
    height: 50px;
    align-items: center;
    justify-content: center;

    border-radius: 15px;

    background-color: ${THEME.COLORS.BLACK_10};
`

export const Title = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    font-size: 18px;
    color: white;
`