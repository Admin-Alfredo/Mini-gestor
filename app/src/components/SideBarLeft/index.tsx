import FormViewProduto from "../FormViewProduto";
import { Container } from "./styles";
import FormViewItem from "../FormViewItem";

export interface IProps {

}
export default function SideBarLeft({ }: IProps) {

  return (
    <Container>
      <FormViewProduto/>
      <FormViewItem/>
    </Container>
  )
}