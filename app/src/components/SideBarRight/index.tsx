import { useContext, useState } from 'react'
import ProdutoContext from "../../context";
import { Container, ViewBody, ViewHeader, ViewLabel, CardResultView, ButtonOpacity } from "./styles";

import { Title, WIcon } from '../../styles';
import { FaCoins } from 'react-icons/fa';
import { getAllMargenDeLucro, getAllTotalGastosDosFormatted, getMarginDeLucroFormatted, getMarginDeLucroPorcent, getTotalDeGanhosFormatted, getTotalGastosFormatted } from '../../util';
export interface IProps {

}
export default function SideBarRight({ }: IProps) {
  const [hasPorcentMg, setHasPorcentMg] = useState(false)
  const { state } = useContext(ProdutoContext)!


  return (
    <Container>
      <Title>Dados do produto selecionado</Title>
      <CardResultView>
        <ViewHeader>
          <span>Gastos</span>
        </ViewHeader>
        <ViewBody>
          <ViewLabel>{getTotalGastosFormatted(state)}</ViewLabel>
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
            {hasPorcentMg ? getMarginDeLucroPorcent(state) : getMarginDeLucroFormatted(state)}
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
          <ViewLabel>{
            getAllTotalGastosDosFormatted(state)}
          </ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>
          <span>Margen de lucro total</span>
        </ViewHeader>
        <ViewBody>
          <ViewLabel>{getAllMargenDeLucro(state)}</ViewLabel>
        </ViewBody>
      </CardResultView>
      <CardResultView>
        <ViewHeader>
          <span>Total de ganhos</span>
        </ViewHeader>
        <ViewBody>
          <ViewLabel style={{ color: '#11ab64' }}>{getTotalDeGanhosFormatted(state)}</ViewLabel>
        </ViewBody>
      </CardResultView>
    </Container>
  )
}