import styled from "styled-components/native";
import { THEME } from "../../THEME";

export const Container = styled.View`
    width: 100%;
    height: 50px;

    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    padding: 10px 20px 0 20px;
`

export const ContentTouchable = styled.TouchableOpacity``

export const Image = styled.Image`
    width: 50px;
    height: 50px;
`

export const Name = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    font-size: 18px;
`