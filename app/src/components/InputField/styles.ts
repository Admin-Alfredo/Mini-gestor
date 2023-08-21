import { styled } from "styled-components";



export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    /* margin-right: 20px; */
`
export const ControlWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    border: 1px solid #919192;
`
export const Control = styled.input`
    border: none;
    height: 38px;
    outline: none;
    background: #ffffff;
    width: 100%;
    font-weight: 500;
    color: #1f1e1e;
    font-size: 1.4rem;
    outline: none;
    padding: 0 9px;
    &:focus {
        outline: 3px solid #4f84f8;
    }
`
export const ControlIcon = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
   
`