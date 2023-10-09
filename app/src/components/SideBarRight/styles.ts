import { styled } from "styled-components";
import { Card } from "../Card/styles";

export const Container = styled.aside`
  margin-left: 15px;
  flex: 1;
  
`
export const CardResultView = styled(Card)`
  width: 100%;
  margin-bottom: 10px;
  border-radius:4px;

`
export const ButtonOpacity = styled.button`
  border: none;
  color: #4f84f8;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: transparent;
   
  :active{
    outline-width: 2px;
    outline-style: solid;
    outline-color: #4f84f8;
  }
`
export const ViewHeader = styled.div`
  height: 35px;
  padding: 0 5px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
  background-color: #FFF;
  display: flex;
  align-items: center;
  & > span{
    flex: 2;
  }
  & > button{
   
  }
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