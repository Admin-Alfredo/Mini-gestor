import { styled } from "styled-components";



export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    & > label {
        color: #5b5e61;
        font-size: .8rem;
        font-weight: 600;
        margin-bottom: 6px;
    }
    & > label input {
        border: none;
        height: 28px;
        outline: none;
        background: #edf3f8;
        width: 100%;
        font-weight: 500;
        color: #1f1e1e;
        font-size: 1.1rem;
        outline: none;
        padding: 0 9px;
        &[type=number]::-webkit-outer-spin-button,
        &[type=number]::-webkit-inner-spin-button{
            -webkit-appearance: none;
            margin: 0;
        }
        &:focus {
            outline: 2px solid #4f84f8;
        }
        &::placeholder{
            font-size: .8rem;
            color:#d0d5dd;
        }
    }
    &  > div > input{
        border: none;
        height: 28px;
        outline: none;
        background: #edf3f8;
        width: 100%;
        font-weight: 500;
        color: #1f1e1e;
        font-size: 1.1rem;
        outline: none;
        padding: 0 9px;
        &[type=number]::-webkit-outer-spin-button,
        &[type=number]::-webkit-inner-spin-button{
            -webkit-appearance: none;
            margin: 0;
        }
        &:focus {
            outline: 2px solid #4f84f8;
        }
        &::placeholder{
            font-size: .8rem;
            color:#d0d5dd;
        }
    }
`
export const ControlWrapper = styled.div`
    width: 100%;
    display: flex;
    border: 1px solid #d0d5dd;
`
// export const ControlIcon = styled.div`
//     height: 40px;
//     width: 40px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
   
// `