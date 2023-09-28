import { IStyledComponent, styled } from "styled-components";
import { Card } from "../Card/styles";
import {DetailedHTMLProps, HTMLAttributes} from 'react'
export const Container = styled.aside`
  margin-left: 15px;
  flex: 1;
  
` 
export const CardResultView = styled(Card)`
  width: 100%;
  margin-bottom: 10px;
  border-radius:4px;

`
export const ViewHeader = styled.div`
  padding:5px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
` 
export const ViewBody = styled.div`
  padding: 5px;
  text-align: center;
`


export const ViewLabel = styled.span`
 font-size: 1.5rem;
 font-weight: 500;
 color: var(--bs-danger);
 
`