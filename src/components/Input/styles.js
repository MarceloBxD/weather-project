import styled from "styled-components";

export const Input = styled.input`
  width: 200px;
  outline: none;
  margin-top: 15px;
  border: none;
  border-bottom: 2px solid #fff;
  background-color: transparent;
  padding: 8px;
  color: #fff;
  margin-top: 15px;
  margin-left: 5px;
  font-size: 17px;
  &::placeholder {
    font-family: "Inconsolata", monospace;
    color: #ccc;
    font-size: 17px;
    font-weight: bold;
  }
`;

export const InputArea = styled.div`
  border-radius: 10px;
`;
