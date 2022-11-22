import styled from "styled-components";

export const Button = styled.button`
    padding: 6px;
    width: 100px;
    border-radius: 8px;
    background-color: #001026;
    border: 1px solid  #FFF;
    color: #FFF;
    margin-top: 15px;
    outline: none;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
        transition: all 0.5s ease;
        border: 1px solid silver;
    }
`