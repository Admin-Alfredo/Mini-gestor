import { useContext } from 'react'
import { Card } from "../Card/styles";
// import { produtos } from "../../handlersFn";
import IPTable, { IDoubleClickCel } from "../IPTable";
import { Container } from "./styles";
import ProdutoContext from '../../context';
import IEntity from '../../entities/IEntidty';
import Item, { TItemFieldsEditable } from '../../entities/Item';

export interface IProps {

}








export default function SideBarCenter({ }: IProps) {
  const { state, dispatch } = useContext(ProdutoContext)!

  const handlerSelectRow = (entity: IEntity, e: any) => {
    const tbody = e.currentTarget.parentElement!;
    if (!tbody) return;
    if (e.currentTarget.classList.contains('active')) return;

    (tbody.querySelectorAll('tr') as HTMLTableRowElement[]).forEach((tr) => {
      if (tr.classList.contains('active')) tr.classList.remove('active');
    })
    e.currentTarget.classList.add('active')


    dispatch({ tipo: 'SELECT_PRODUTO', id: entity.id })
  }



  const saveValue = (id: (string | number), field: TItemFieldsEditable, value: string) => {
    dispatch({ tipo: 'UPDATE_ITEM_PRODUTO', field: field.replace('get', 'set'), id, payload: value })
  }

  const handlerEntityEditor = ({ event: { target }, colName, item }: IDoubleClickCel) => {
    const inputElement = document.createElement('input');
    const textTmp = target.textContent;
    target.textContent = "";

    target.appendChild(inputElement)
    inputElement.value = textTmp!;
    inputElement.focus();

    const handlerBlurInputEditor = () => {
      target.removeChild(inputElement);
      target.innerHTML = inputElement.value!;

      saveValue(item.getId(), colName as TItemFieldsEditable, target.textContent!);
    }

    inputElement.addEventListener('blur', handlerBlurInputEditor);
  }

  return (
    <Container>
      <h3 style={{ color: '#222', margin: 10, fontSize: '1.5rem' }}>Produtos a vender</h3>
      <Card style={{ marginBottom: 15 }}>
        <IPTable
          data={state.produtos}
          onClickRow={handlerSelectRow}
          hasIndex={true} header={[
            'PRODUTO',
            'QTD',
            'TOTAL',
            'M. DE LUCRO',
            'CLIENTE'
          ]}
          attr={[
            'getNome',
            'getQtd',
            'getTotal',
            '',
            'getCliente'
          ]} />
      </Card>
      <h3 style={{ color: '#222', margin: 10, fontSize: '1.5rem' }}>Produtos comprodos</h3>
      {/* <pre>
        {state.produtoSelecionado && JSON.stringify(state.produtoSelecionado.getAllItems(), null, '\t')}
      </pre> */}
      <Card>
        <IPTable data={state.produtoSelecionado ? state.produtoSelecionado.getAllItems() : []} hasIndex={true} header={[
          'PRODUTO',
          'PRECO',
          'QTD',
          'FORNECEDOR',
          'TOTAL'
        ]}
          onDoubleClickCel={handlerEntityEditor}
          attr={[
            'getNome',
            'getPreco',
            'getQtdFormatedWithUnidade',
            'getFornecedor',
            'getTotal'
          ]} />
      </Card>
    </Container>
  )
}