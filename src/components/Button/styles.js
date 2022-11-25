import styled from "styled-components";

export const Button = styled.button`
    padding: 5px;
    width: 100px;
    font-size: 15px;
    border-radius: 4px;
    background-color: transparent;
    border: 2px solid  #000;
    color: #FFF;
    margin-top: 15px;
    outline: none;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
        transition: all 1s ease;
    }
`