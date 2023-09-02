import { useForm } from "react-hook-form"
import Header from "./components/Header"
import IPTable, { IDoubleClickCel } from "./components/IPTable"
import InputField from "./components/InputField"
import { ItemContainer, ItemControllers } from "./components/ItemComponent/styles"
import { ProdContainer, ProdControllers } from "./components/ProdComponent/styles"
import { items as _items_, produtos as _produtos_ } from "./datas"
import { AppContainer, Main } from "./styles"
import { useState } from "react"
import Item from "./entities/Item"
import ViewResult from "./components/ViewResults"
import Produto from "./entities/Produto"


function App() {
  const { register, handleSubmit } = useForm()
  const [items, setItems] = useState<Item[]>(_items_)
  const [produtos, setProdutos] = useState<Produto[]>(_produtos_)

  const hendlerCreateItem = (data: any) => setItems(() => {
    const item = new Item(
      data.nome_do_produto,
      Number(data.preco_de_compra),
      Number(data.Qtd_de_compra),
      data.nome_do_fornecedor,
      Number(data.unidade))
    return [...items, item]
  })

  const handlerChangeItem = ({ event: { target } }: IDoubleClickCel) => {
    const inputElement = document.createElement('input');
    inputElement.classList.add("input-field-editor");
    const textTmp = target.textContent;
    target.textContent = "";

    target.appendChild(inputElement)
    inputElement.value = textTmp!;
    inputElement.focus();

    const handlerBlurInputEditor = () => {
      target.removeChild(inputElement);
      target.innerHTML = inputElement.value!;
    }

    inputElement.addEventListener('blur', handlerBlurInputEditor);
  }
  return (
    <AppContainer>
      <Header />
      <Main>
        <ItemContainer>
          <ItemControllers onSubmit={handleSubmit(hendlerCreateItem)}>

            <InputField
              register={register('nome_do_produto')}
              type="text"
              label="Nome do produto"
              width="100%" />

            <InputField
              register={register('preco_de_compra')}
              type="number"
              label="Preço de compra"
              width="100%" />

            <InputField
              register={register('Qtd_de_compra')}
              type="number"
              label="Qtd de compra"
              width="100%" />

            <InputField
              register={register('nome_do_fornecedor')}
              type="text"
              label="Fornecedor"
              width="100%" />

            <InputField
              register={register('unidade')}
              type="number"
              label="Unidade"
              width="100%"
            />
            <InputField
              disabled={true}
              register={register('preco_unitario')}
              type="number"
              label="Preço unitário"
              width="100%" />
            <button type="submit">registrar</button>
          </ItemControllers>

          <div style={{ margin: '20px 0' }}>
            <h2>Produto de compra</h2>
          </div>
          <IPTable data={items} hasIndex={true} header={[
            'PRODUTO',
            'PRECO',
            'QTD',
            'FORNECEDOR',
            'TOTAL'
          ]}
            onDoubleClickCel={handlerChangeItem}
            attr={[
              'getNome',
              'getPreco',
              'getQtdFormatedWithUnidade',
              'getFornecedor',
              'getTotal'
            ]} >
            <></>
          </IPTable>

        </ItemContainer>

        <ProdContainer>
          <ProdControllers>
            <InputField type="text" label="Produto de venda" width="100%" />
            <InputField type="number" label="Preço de venda" width="100%" />
            <InputField type="number" label="Qtd de venda" width="100%" />

            <InputField type="text" label="Cliente" width="100%" />
          </ProdControllers>
          <div style={{ margin: '20px 0' }}>
            <h2>Produtos de venda</h2>
          </div>
          <IPTable data={produtos} hasIndex={true} header={[
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
            ]} >
            <></>
          </IPTable>
        </ProdContainer>
      </Main>
      <ViewResult>

      </ViewResult>
    </AppContainer>
  )
}

export default App
