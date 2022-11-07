import styled from "styled-components/native";
import { THEME } from "../../THEME";

export const Container = styled.View`
    flex: 1;
`

export const Men = styled.Image`
    width: 370px;

    margin-top: 20px;
`

export const ContentTitles = styled.View`
    margin-top: -25px;
    width: 100%;
    padding: 10px;
`

export const Title = styled.Text`
    font-family: ${THEME.FONTS.Roboto_700Bold};
    font-size: 44px;
    text-align: center;
    color: white;
    text-transform: uppercase;
    margin-bottom: 15px;
`

export const Subtitle = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    font-size: 18px;
    color: white;
    text-align: center;
`

export const Button = styled.TouchableOpacity`
    width: 220px;
    height: 60px;
    align-items: center;
    justify-content: center;

    margin-top: 15px;
    border-radius: 25px;

    background-color: ${THEME.COLORS.BLUE_10};
`

export const ButtonTitle = styled.Text`
    font-family: ${THEME.FONTS.Roboto_700Bold};
    font-size: 28px;
    color: white;
`