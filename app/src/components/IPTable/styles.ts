import { Table } from "reactstrap"
import { styled } from "styled-components"

export const Container = styled(Table)`
    margin: 0;
    width: 100%;
    & td{
        padding: 5px;
        font-size: 1rem;
        font-weight: 400;
        position: relative;
        & > input{
            height: 100%;
            border: none;
            background: transparent;
            color:#222;
            position: absolute;
            inset: 0;
        }
        &:has(> input:focus){
            padding: 0px;
        }
        & > input:focus{
            outline: 1px solid #4f84f8;
            cursor: pointer;
        }
    }
    & td.actions{
        /* display: flex;
        justify-content: center;
        align-items: center; */
        display: none;
    }
    & tr:hover td.actions {
        display: initial;
        margin: 0 auto;
    }
    & > tbody >  tr.active th, & > tbody >  tr.active td{background-color: #4f84f8; color: #fff}
`