import { useContext } from 'react'
import ProdutoContext from "../../context";
import { Container, ViewBody, ViewHeader, ViewLabel, CardResultView } from "./styles";
import formatter from "format-number";
import { Title } from '../../styles';
export interface IProps {

}
export default function SideBarRight({ }: IProps) {
  const { state } = useContext(ProdutoContext)!
  const formatedData = formatter({ suffix: ' Kz', })

  const getTotalGastosFormatted = (): string => (
    formatedData(state.produtoSelecionado?.getTotalDeGastos()!, { noSeparator: false })
  )
  const getAllTotalGastosDosFormatted = (): string => (
    formatedData(
      state.produtos.reduce((acumulador, produto) => acumulador += produto.getTotalDeGastos(), 0)!,
      { noSeparator: false }
    )
  )
  const getAllMargenDeLucro = (): string => (
    formatedData(
      state.produtos.reduce((acumulador, produto) => acumulador += produto.getMarginDeLucro(), 0)!,
      { noSeparator: false }
    )
  )

  const getMarginDeLucroFormatted = (): string => (
    formatedData(state.produtoSelecionado?.getMarginDeLucro()!, { noSeparator: false })
  )
  const getTotalGanhos = (): number => (
    state.produtos.reduce((acumulador, produto) => acumulador += produto.getTotal(), 0)
  )
  const getTotalDeGanhosFormatted = (): string => (
    formatedData(getTotalGanhos(), { noSeparator: false })
  )
  return (
    <Container>
      <Title style={{}}>Dados do produto selecionado</Title>
      <CardResultView>
        <ViewHeader>Gastos</ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getTotalGastosFormatted() ? getTotalGastosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>Margen de lucro</ViewHeader>
        <ViewBody>
          <ViewLabel style={{ color: '#11ab64' }}>{!!getMarginDeLucroFormatted() ? getMarginDeLucroFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>


      <Title>Dados referentes aos produtos</Title>

      <CardResultView>
        <ViewHeader>Total de gastos</ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getAllTotalGastosDosFormatted() ? getAllTotalGastosDosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>Margen de lucro total</ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getAllMargenDeLucro() ? getAllMargenDeLucro() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>Total de ganhos</ViewHeader>
        <ViewBody>
          <ViewLabel style={{ color: '#11ab64' }}>{!!getTotalDeGanhosFormatted() ? getTotalDeGanhosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
    </Container>
  )
}