import { styled } from "styled-components";

export const AppContainer = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: #efefffaf;
`;
export const Main = styled.main`
    display: flex;
    height: calc(100%- 70px);
`
export const ControllersForm = styled.form`
    display: grid;
    grid-template-columns: 200px 180px 200px;
    grid-row-gap: 2px;
    grid-column-gap: 15px;
    height: 210px;
`