import styled from "styled-components/native";
import { THEME } from "../../../../THEME";

export const Container = styled.TouchableOpacity`
    width: 350px;
    height: 80px;

    border-radius: 10px;

    align-items: center;
    justify-content: center;
    
    background-color: #A1A1C1;

    margin-top: 15px;
`

export const Title = styled.Text`
    font-family: ${THEME.FONTS.Roboto_300Light};
    font-size: 22px;
    text-transform: capitalize;
    color: white;
`