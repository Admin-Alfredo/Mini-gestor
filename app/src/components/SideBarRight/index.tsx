import { useContext } from 'react'
import ProdutoContext from "../../context";
import { Container, ViewBody, ViewHeader, ViewLabel, CardResultView } from "./styles";
import formatter from "format-number";
export interface IProps {

}
export default function SideBarRight({ }: IProps) {
  const { state } = useContext(ProdutoContext)!
  const getTotalDeGastosFormatted = (): string => {

    return formatter({ suffix: ' Kz', })
      (state.produtoSelecionado?.getTotalDeGastos()!, { noSeparator: false })
  }

  return (
    <Container>
      <CardResultView>
        <ViewHeader>Total de gastos</ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getTotalDeGastosFormatted() ? getTotalDeGastosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>Margen de lucro</ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getTotalDeGastosFormatted() ? getTotalDeGastosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>Total de ganhos</ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getTotalDeGastosFormatted() ? getTotalDeGastosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>Total de ganhos</ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getTotalDeGastosFormatted() ? getTotalDeGastosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
    </Container>
  )
}