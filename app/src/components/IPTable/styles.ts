import { Table } from "reactstrap"
import { styled } from "styled-components"

export const Container = styled(Table)`
    & td{
        padding: 15px;
        font-size: 1.2rem;
        font-weight: 400;
    }
    & td:hover{
        background-color: #efefffaf;
    }
`