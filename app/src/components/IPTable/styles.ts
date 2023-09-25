import { Table } from "reactstrap"
import { styled } from "styled-components"

export const Container = styled(Table)`
    margin: 0;
    width: 100%;
    
    & td{
        padding: 2px;
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
    & > tr{position: relative; }
    & tr > td{ transition: opacity ease-in .4s; }
    & tr > td.fade-up{
        opacity: 0;
    }
    & td.actions > div[data-delete-row]{
         display: none;
    }
    & tr:hover td.actions > div[data-delete-row]{
        display: flex;
    }
    & > tbody >  tr.active th, & > tbody >  tr.active td{background-color: #4f84f8; color: #fff}
`