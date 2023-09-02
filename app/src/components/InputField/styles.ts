import { styled } from "styled-components";



export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    /* margin-right: 20px; */
    & > span {
        color: #5b5e61;
        font-size: 1.3rem;
        margin-bottom: 6px;
    }
`
export const ControlWrapper = styled.div`
    width: 100%;
    display: flex;
    border: 2px solid #d0d5dd;
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
    &[type=number]::-webkit-outer-spin-button,
    &[type=number]::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
    /* border-radius: 3px; */
    &:focus {
        outline: 3px solid #4f84f8;
    }
    &::placeholder{
        font-size: 1.2rem;
        color:#d0d5dd;
    }
`
export const ControlIcon = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
   
`