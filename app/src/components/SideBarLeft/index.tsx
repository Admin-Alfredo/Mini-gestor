import FormViewProduto from "../FormViewProduto";
import { Container } from "./styles";
import * as Modal from '../Modal'
import { useState } from "react";
// import FormViewItem from "../FormViewItem";

export interface IProps {

}
export default function SideBarLeft({ }: IProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <button onClick={() =>{ setIsOpen(!isOpen)}}>open</button>
      <Modal.Root isOpen={isOpen}>
        <Modal.Header title="Adicionar novo produto" />
        <Modal.Content>
          <FormViewProduto />
          {/* <FormViewItem /> */}
        </Modal.Content>
      </Modal.Root>

    </Container>
  )
}