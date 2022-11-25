import styled from "styled-components";

export const Input = styled.input`
    width: 200px;
    outline: none;
    margin-top: 15px;
    border: none;
    border-bottom: 2px solid #000;
    padding: 12px;
    background-color: transparent;
    color: #FFF;
    margin-top: 15px;
    margin-left: 5px;
    font-size: 17px;
    &::placeholder{
        color: #CCC;
        font-size: 15px;
        font-weight: 400;
    }
`

export const InputArea = styled.div`
    border-radius: 10px;
`