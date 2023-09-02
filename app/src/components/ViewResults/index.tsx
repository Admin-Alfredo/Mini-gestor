import {ComponentProps} from 'react'
import { Container, WrapperView} from "./styles";
 
export type IProps = ComponentProps<"div"> & {

}
export default function ViewResult(props: IProps){

  return (
    <Container>
      <WrapperView>
        <p>Result calculator</p>  
      </WrapperView>
    </Container>
  )
} 
