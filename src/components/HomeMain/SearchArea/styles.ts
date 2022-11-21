import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
`

export const Input = styled.TextInput`
    width: 90%;
    padding: 10px 10px 10px 50px;
    border-radius: 15px;
    background-color: white;
    /* box-shadow: 4px 5px 15px black; */
`

export const Content = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    position: relative;
`

export const Icon = StyleSheet.create({
    Style: {
        position: 'absolute',
        left: 30,
        zIndex: 1,
        color: 'gray',
        opacity: 0.5
    }
})