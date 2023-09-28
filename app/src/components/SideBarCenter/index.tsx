import { useContext, useState } from 'react'
import { Card } from "../Card/styles";
import IPTable from "../IPTable";
import { Container } from "./styles";
import ProdutoContext, { TContextProvider } from '../../context';
import Item from '../../entities/Item';
import Produto from '../../entities/Produto';
import { FaSearch, FaTrash } from 'react-icons/fa'
import { Title, WIcon } from '../../styles';
import { stringFormatted } from '../../util';
import InputField, { FieldControl } from '../InputField';
import {
  handlerBlurInputSearchProduto,
  handlerEntityDeleteRow,
  handlerEntityEditor,
  handlerEntitySelectRow,
  handlerFocusInputSearchProduto,
  handlerInputTextForSearchProduto
} from './handlers';

export interface IProps {

}


export default function SideBarCenter({ }: IProps) {
  const context: TContextProvider = useContext(ProdutoContext)!
  const { state, dispatch } = context
  const [isSearch, setIsSearch] = useState(false)

  return (
    <Container>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title>Produtos vendidos</Title>

        <FieldControl style={{ width: 250, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <InputField
            type="text"
            style={{ background: '#FFF' }}
            placeholder='pesquisa nome do produto'
            onInput={(e: any) => handlerInputTextForSearchProduto(e, context)}
            onFocus={(e: any) => handlerFocusInputSearchProduto(e, context, setIsSearch)}
            onBlur={(e: any) => handlerBlurInputSearchProduto(e, setIsSearch)} />

          <WIcon style={{ height: 30, background: '#4f84f8' }}><FaSearch color='#FFF' /></WIcon>
        </FieldControl>
      </header>
      <Card style={{ marginBottom: 15 }}>
        <IPTable
          data={!isSearch ? state.produtos : state.produtosSearced}
          hasIndex={true}
          header={['ID', 'PRODUTO', 'PRECO', 'QTD', 'TOTAL', 'M. DE LUCRO', 'CLIENTE', 'ACÇÕES']}
          render={(param, index) => (
            <tr key={param.getId()} onClick={(e: any) => handlerEntitySelectRow(param, e, dispatch)}>
              <th scope="row">{(index! + 1)}</th>
              <td>{stringFormatted(param.getId() as string, 3)}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getProduto' }, dispatch)}>{param.getNome()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getPreco' }, dispatch)}>{param.getPreco()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getQtd' }, dispatch)}>{param.getQtd()}</td>
              <td >{param.getTotal()}</td>
              <td >--</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getCliente' }, dispatch)}>{(param as Produto).getCliente()}</td>
              <td >
                <WIcon
                  title={'Apagar produto com id ' + param.getId()}
                  style={{ margin: '0 auto', cursor: 'pointer' }}
                  data-delete-row
                  onClick={(e: any) => handlerEntityDeleteRow(e, 'produto', param, dispatch)}>
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
            <tr key={param.getId()} onClick={(e: any) => handlerEntitySelectRow(param, e, dispatch)}>
              <th scope="row">{(index! + 1)}</th>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getNome' }, dispatch)}>{param.getNome()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getPreco' }, dispatch)}>{param.getPreco()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getQtd' }, dispatch)}>{param.getQtd()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getFornecedor' }, dispatch)}>{(param as Item).getFornecedor()}</td>
              <td onDoubleClick={(e: any) => handlerEntityEditor({ event: e, item: param, colName: 'getTotal' }, dispatch)}>{param.getTotal()}</td>
              <td >
                <WIcon
                  title={'Apagar produto com id ' + param.getId()}
                  style={{ margin: '0 auto', cursor: 'pointer' }}
                  data-delete-row
                  onClick={(e: any) => handlerEntityDeleteRow(e, 'item', param, dispatch)}>
                  <FaTrash size={15} color='red' />
                </WIcon>
              </td>
            </tr>
          )} />
      </Card>
    </Container>
  )
}