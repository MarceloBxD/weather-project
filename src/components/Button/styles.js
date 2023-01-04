import styled from "styled-components";

export const Button = styled.button`
  padding: 5px;
  width: 100px;
  font-size: 15px;
  border-radius: 4px;
  background-color: #fff;
  border: 2px solid #fff;
  color: #000;
  font-weight: bold;
  margin-top: 15px;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 1s ease;
  }
`;
