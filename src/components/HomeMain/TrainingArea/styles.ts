import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;

    align-items: center;
    justify-content: center;
`

export const FlatList = styled.FlatList.attrs(
    {
        contentContainerStyle: {
            alignItems: 'center'
        }
    }
)`
    /* flex: 1; */
    width: 100%;
    /* border: 1px solid red; */
`