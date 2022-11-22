import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 12vh;
`

export const Title = styled.p`
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 500;
    color: #FFF;
    text-decoration: wavy;
`

export const Avatar = styled.img`
    object-fit: cover;
    width: 45px;
    height: 45px;
    border-radius: 10px;
`