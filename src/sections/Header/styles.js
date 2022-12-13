import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 12vh;
`;

export const Title = styled.p`
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 500;
  color: #fff;
  text-decoration: wavy;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;
