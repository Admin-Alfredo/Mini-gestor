import { styled } from "styled-components";

export const Container = styled.div`
    height: 40px;
    display: flex;
    border: 1px solid #919192e1;
    /* & > input.field-control:focus +.field-control-icon{

    } */
`
export const Control = styled.input`
    border: none;
    height: 38px;
    outline: none;
    background: #ffffff;
    width: 100 %;
    font-weight: 600;
    color: #1f1e1e;
    font-size: 1.4rem;
    outline: none;
    padding: 0 9px;
    :focus {
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