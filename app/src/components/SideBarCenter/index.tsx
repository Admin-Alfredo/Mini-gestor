import { useContext, ChangeEvent } from 'react'
import { Card } from "../Card/styles";
import IPTable from "../IPTable";
import { Container } from "./styles";
import ProdutoContext from '../../context';
import IEntity from '../../entities/IEntidty';
import Item, { TItemFieldsEditable } from '../../entities/Item';
import Produto from '../../entities/Produto';
import { FaTimes, FaTrash } from 'react-icons/fa'
import { WIcon } from '../../styles';
import { stringFormatted } from '../../util';

export interface IProps {

}


export default function SideBarCenter({ }: IProps) {
  const { state, dispatch } = useContext(ProdutoContext)!

  const handlerEntitySelectRow = (entity: IEntity, e: any) => {
    const tbody = e.currentTarget.parentElement!;
    if (!tbody) return;
    if (e.currentTarget.classList.contains('active')) return;
    console.log(tbody.querySelectorAll('tr'));

    (tbody.querySelectorAll('tr') as HTMLTableRowElement[]).forEach((tr) => {
      if (tr.classList.contains('active')) tr.classList.remove('active');
    })
    e.currentTarget.classList.add('active')


    dispatch({ tipo: 'SELECT_PRODUTO', id: entity.id })
  }



  const saveValue = (id: (string | number), field: TItemFieldsEditable, value: string) => {
    dispatch({ tipo: 'UPDATE_ITEM_PRODUTO', field: field.replace('get', 'set'), id, payload: value })
  }

  const handlerEntityEditor = ({ event: { target }, colName, item }: { event: ChangeEvent, colName: string, item: (Item | Produto) }) => {
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
  const handlerEntityDeleteRow = (tipo: string, entity: IEntity, e: ChangeEvent) => {
    const target: HTMLElement = e.currentTarget.parentElement?.parentElement!

    for (let i = 0; i < target.children.length; i++)
      target.children.item(i)?.classList.add('fade-up');

    setTimeout(() => {
      switch (tipo) {
        case 'produto':
          dispatch({ tipo: 'DELETE_PRODUTO', id: entity.id })
          break;
        case 'item':
          dispatch({ tipo: 'DELETE_ITEM', id: entity.id })
          break;
      }
    }, 400)
  }
  return (
    <Container>
      <h3 style={{ color: '#222', margin: 10, fontSize: '1.5rem' }}>Produtos a vender</h3>
      <Card style={{ marginBottom: 15 }}>
        <IPTable
          data={state.produtos}
          hasIndex={true} header={['ID', 'PRODUTO', 'PRECO', 'QTD', 'TOTAL', 'M. DE LUCRO', 'CLIENTE', 'ACÇÕES']}
          render={(param, index) => (
            <tr key={param.getId()} onClick={(e: any) => handlerEntitySelectRow(param, e)}>
              <th scope="row">{(index! + 1)}</th>
              <td>{stringFormatted(param.getId() as string, 3)}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getProduto' })}>{param.getNome()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getPreco' })}>{param.getPreco()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getQtd' })}>{param.getQtd()}</td>
              <td >{param.getTotal()}</td>
              <td ></td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getCliente' })}>{(param as Produto).getCliente()}</td>
              <td >
                <WIcon
                  title={'Apagar produto com id ' + param.getId()}
                  style={{ margin: '0 auto', cursor: 'pointer' }}
                  data-delete-row
                  onClick={(e: any) => handlerEntityDeleteRow('produto', param, e)}>
                  <FaTrash size={15} color='red' />
                </WIcon>
              </td>
            </tr>
          )} />
      </Card>
      <h3 style={{ color: '#222', margin: 10, fontSize: '1.5rem' }}>Produtos comprodos</h3>

      <Card>
        <IPTable
          data={state.produtoSelecionado ? state.produtoSelecionado.getAllItems() : []}
          hasIndex={true}
          header={['PRODUTO', 'PRECO', 'QTD', 'FORNECEDOR', 'TOTAL', 'ACÇÕES']}
          render={(param, index) => (
            <tr key={param.getId()} onClick={(e: any) => handlerEntitySelectRow(param, e)}>
              <th scope="row">{(index! + 1)}</th>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getNome' })}>{param.getNome()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getPreco' })}>{param.getPreco()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getQtd' })}>{param.getQtd()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getFornecedor' })}>{(param as Item).getFornecedor()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getTotal' })}>{param.getTotal()}</td>
              <td >
                <WIcon
                  title={'Apagar produto com id ' + param.getId()}
                  style={{ margin: '0 auto', cursor: 'pointer' }}
                  data-delete-row
                  onClick={(e: any) => handlerEntityDeleteRow('item', param, e)}>
                  <FaTrash size={15} color='red' />
                </WIcon>
              </td>
            </tr>
          )} />
      </Card>
    </Container>
  )
}