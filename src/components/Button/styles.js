import styled from "styled-components";

export const Button = styled.button`
    padding: 8px;
    width: 100px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid  #FFF;
    color: #FFF;
    margin-top: 15px;
    outline: none;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
        transition: all 1s ease;
    }
`