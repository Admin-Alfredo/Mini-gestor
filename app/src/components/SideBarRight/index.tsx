import { useContext } from 'react'
import ProdutoContext from "../../context";
import { Card } from "../Card/styles";
import { Container, ViewBody, ViewHeader, ViewLabel } from "./styles";
import formatter from "format-number";
export interface IProps {

}
export default function SideBarRight({ }: IProps) {
  const { state } = useContext(ProdutoContext)!
  const handlerTotalDeGastos = (): string => (
    formatter({ suffix: ' Kz',})(state.produtoSelecionado?.getTotalDeGastos()!, { noSeparator: false })
  )
  return (
    <Container>
      <Card>
        <ViewHeader>Total de gastos</ViewHeader>
        <ViewBody>
          <ViewLabel>{handlerTotalDeGastos()}</ViewLabel>
        </ViewBody>
      </Card>
    </Container>
  )
}