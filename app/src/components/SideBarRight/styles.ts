import { styled } from "styled-components";
import { Card } from "../Card/styles";

export const Container = styled.aside`
  margin-left: 15px;
` 
export const CardResultView = styled(Card)`

`
export const ViewHeader = styled.div`
  padding: 0 5px;
  font-size: 1rem;
  font-weight: 500;
` 
export const ViewBody = styled.div`
  padding: 15px;
`
export const ViewLabel = styled.span`
 font-size: 1.5rem;
 font-weight: 500;
 color: var(--bs-danger);
`