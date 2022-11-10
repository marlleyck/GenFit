import styled from "styled-components/native";
import { THEME } from "../../THEME";

export const Container = styled.Pressable`
    flex: 1;
`

export const ImageWeight = styled.Image``

export const Title = styled.Text`
    font-family: ${THEME.FONTS.Roboto_700Bold};
    font-size: 44px;
    color: white;
    text-align: center;
    margin-top: -80px;
`

export const Button = styled.TouchableOpacity`
    width: 220px;
    height: 60px;
    align-items: center;
    justify-content: center;

    margin-top: 25px;
    border-radius: 25px;

    background-color: ${THEME.COLORS.BLUE_10};
`

export const ButtonTitle = styled.Text`
    font-family: ${THEME.FONTS.Roboto_700Bold};
    font-size: 28px;
    color: white;
`