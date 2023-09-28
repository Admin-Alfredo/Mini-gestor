import { styled } from "styled-components";

export const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--bg-light);
`;
export const Main = styled.main`
    display: flex;
    height: calc(100% - 70px);
    padding: 15px;
`
export const ControllersForm = styled.form`
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-row-gap: 2px;
    grid-column-gap: 15px;
    height: 210px;
`

export const WIcon = styled.div`
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
` 
export const Title = styled.h3`
    color: #444;
    margin: 15px 0;
    font-size: 1.2rem
`