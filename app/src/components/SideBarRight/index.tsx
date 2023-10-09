import { useContext, useState } from 'react'
import ProdutoContext from "../../context";
import { Container, ViewBody, ViewHeader, ViewLabel, CardResultView, ButtonOpacity } from "./styles";
import formatter from "format-number";
import { Title, WIcon } from '../../styles';
import { FaCoins } from 'react-icons/fa';
export interface IProps {

}
export default function SideBarRight({ }: IProps) {
  const [hasPorcentMg, setHasPorcentMg] = useState(false)
  const { state } = useContext(ProdutoContext)!
  const formatedData = formatter({ suffix: ' Kz', })
  const formatedDataPorcent = formatter({ suffix: ' %', })

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
  // get
  const getMarginDeLucroPorcent = (): string => (
    formatedDataPorcent(
      Math.round((state.produtoSelecionado?.getMarginDeLucro()! * 100) / (state.produtoSelecionado?.getTotalDeGastos()! * state.produtoSelecionado?.getQtd()!))
      , { noSeparator: false }
    )
  )
  const getTotalGanhos = (): number => (
    state.produtos.reduce((acumulador, produto) => acumulador += produto.getTotal(), 0)
  )
  const getTotalDeGanhosFormatted = (): string => (
    formatedData(getTotalGanhos(), { noSeparator: false })
  )

  return (
    <Container>
      <Title>Dados do produto selecionado</Title>
      <CardResultView>
        <ViewHeader>
          <span>Gastos</span>
        </ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getTotalGastosFormatted() ? getTotalGastosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>
          <span>Margen de lucro</span>
          <ButtonOpacity title='mostrar em moeda' onClick={() => setHasPorcentMg(!hasPorcentMg)}>
            <WIcon> {hasPorcentMg ? <FaCoins /> : '%'}</WIcon>
          </ButtonOpacity>
        </ViewHeader>
        <ViewBody>
          <ViewLabel style={{ color: '#11ab64' }}>
            {hasPorcentMg ? getMarginDeLucroPorcent() ? getMarginDeLucroPorcent() : '0.00 Kz' : !!getMarginDeLucroFormatted() ? getMarginDeLucroFormatted() : '0.00 Kz'}
          </ViewLabel>
        </ViewBody>
      </CardResultView>
      <Title>
        <span>Dados referentes aos produtos</span>
      </Title>

      <CardResultView>
        <ViewHeader>
          <span>Total de gastos</span>
        </ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getAllTotalGastosDosFormatted() ? getAllTotalGastosDosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>
          <span>Margen de lucro total</span>
        </ViewHeader>
        <ViewBody>
          <ViewLabel>{!!getAllMargenDeLucro() ? getAllMargenDeLucro() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>
          <span>Total de ganhos</span>
        </ViewHeader>
        <ViewBody>
          <ViewLabel style={{ color: '#11ab64' }}>{!!getTotalDeGanhosFormatted() ? getTotalDeGanhosFormatted() : '0.00 Kz'}</ViewLabel>
        </ViewBody>
      </CardResultView>
    </Container>
  )
}