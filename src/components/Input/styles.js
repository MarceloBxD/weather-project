import styled from "styled-components";

export const Input = styled.input`
    width: 200px;
    outline: none;
    margin-top: 15px;
    border-radius: 10px;
    border: none;
    border: 1px solid #FFF;
    padding: 8px;
    background-color: transparent;
    color: #fff;
    margin-top: 15px;
    margin-left: 5px;
    &::placeholder{
        color: #000;
        font-size: 15px;
        font-weight: 400;
    }
`

export const InputArea = styled.div`
    border-radius: 10px;
`