import { useContext, useState, useEffect } from 'react'
import { Card } from "../Card/styles";
import IPTable from "../IPTable";
import { Container } from "./styles";
import ProdutoContext, { TContextProvider } from '../../context';
import Item from '../../entities/Item';
import Produto from '../../entities/Produto';
import { FaTrash } from 'react-icons/fa'
import { Title, WIcon } from '../../styles';
import { stringFormatted } from '../../util';

import {
  handlerEntityDeleteRow,
  handlerEntityEditor,
  handlerEntitySelectRow,
} from './handlers';
import SideBarCenterHeader from '../SideBarCenterHeader';

export interface IProps { }
export type TTarget = HTMLElement & {
  dataset: DOMStringMap,
  previousElementSibling: TTarget,
  nextElementSibling: TTarget
}

export default function SideBarCenter({ }: IProps) {
  const context: TContextProvider = useContext(ProdutoContext)!
  const { state, useActionSearchProduto } = context

  const [isSearch] = useActionSearchProduto

  const [isSelectedRow, setIsSelectedRow] = useState(false);


  useEffect(() => {
    window.addEventListener('keydown', (e: any) => {
      const keyCode: number = e.keyCode
      const target = document.querySelector<TTarget>('.produto-row.active')!
      let selected: TTarget;
      if (!target) return;

      switch (keyCode) {
        case 38:
          selected = !!target.previousSibling ? target.previousElementSibling : target;
          handlerEntitySelectRow(selected, { id: selected.dataset.id! }, context)

          break;
        case 40:
          selected = !!target.nextSibling ? target.nextElementSibling : target;
          handlerEntitySelectRow(selected, { id: selected.dataset.id! }, context)
          break;
      }
    })
  }, [])
  // useEffect(() => isSelectedRow ? window.onkeydown = () => (false) : window.onkeydown = () => { }, [isSelectedRow])


  return (
    <Container>
      <SideBarCenterHeader />
      <Card style={{ marginBottom: 15 }}>
        <IPTable
          data={!isSearch ? state.produtos : state.produtosSearced}
          hasIndex={true}
          header={['ID', 'PRODUTO', 'PRECO', 'QTD', 'TOTAL', 'M. DE LUCRO', 'CLIENTE', 'ACÇÕES']}
          render={(param, index) => (
            <tr
              className="produto-row"
              key={param.getId()}
              data-id={param.getId()}
              onClick={(e: any) => {
                let isSelected = handlerEntitySelectRow(e.currentTarget, param, context);
                setIsSelectedRow(isSelected)
              }}>
              <th scope="row">{(index! + 1)}</th>
              <td>{stringFormatted(param.getId() as string, 3)}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getProduto' }, context)}>{param.getNome()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getPreco' }, context)}>{param.getPreco()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getQtd' }, context)}>{param.getQtd()}</td>
              <td >{param.getTotal()}</td>
              <td >--</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getCliente' }, context)}>{(param as Produto).getCliente()}</td>
              <td >
                <WIcon
                  title={'Apagar produto com id ' + param.getId()}
                  style={{ margin: '0 auto', cursor: 'pointer' }}
                  data-delete-row
                  onClick={(e: any) => handlerEntityDeleteRow(e, 'produto', param, context)}>
                  <FaTrash size={15} color='red' />
                </WIcon>
              </td>
            </tr>
          )} />
      </Card>
      <Title>Produtos comprodos</Title>
      {/* <pre>
        {JSON.stringify(state.produtoSelecionado?.getAllItems(),null, '\t')}
      </pre> */}
      <Card>
        <IPTable
          data={state.produtoSelecionado ? state.produtoSelecionado.getAllItems() : []}
          hasIndex={true}
          header={['PRODUTO', 'PRECO', 'QTD', 'FORNECEDOR', 'TOTAL', 'ACÇÕES']}
          render={(param, index) => (
            <tr key={param.getId()} onClick={(e: any) => handlerEntitySelectRow(e, param, context)}>
              <th scope="row">{(index! + 1)}</th>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getNome' }, context)}>{param.getNome()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getPreco' }, context)}>{param.getPreco()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getQtd' }, context)}>{param.getQtd()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getFornecedor' }, context)}>{(param as Item).getFornecedor()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getTotal' }, context)}>{param.getTotal()}</td>
              <td >
                <WIcon
                  title={'Apagar produto com id ' + param.getId()}
                  style={{ margin: '0 auto', cursor: 'pointer' }}
                  data-delete-row
                  onClick={(e: any) => handlerEntityDeleteRow(e, 'item', param, context)}>
                  <FaTrash size={15} color='red' />
                </WIcon>
              </td>
            </tr>
          )} />
      </Card>
    </Container>
  )
}