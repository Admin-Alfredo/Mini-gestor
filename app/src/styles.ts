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