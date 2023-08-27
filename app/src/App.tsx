import { useForm } from "react-hook-form"
import Header from "./components/Header"
import IPTable from "./components/IPTable"
import InputField from "./components/InputField"
import { ItemContainer, ItemControllers } from "./components/ItemComponent/styles"
import { ProdContainer, ProdControllers, ProdTable } from "./components/ProdComponent/styles"
import { items } from "./datas"
import { AppContainer, Main } from "./styles"


function App() {
  const { register, handleSubmit } = useForm()
  
  const hendlerCreateItem = (data: any) => [
    console.log(data)
  ]
  return (
    <AppContainer>
      <Header />
      <Main>
        <ItemContainer>
          <ItemControllers onSubmit={handleSubmit(hendlerCreateItem)}>

            <InputField
              register={register('nome_produto')}
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
              register={register('preco_unitario')}
              type="number"
              label="Preço unitário"
              width="100%" />
              <button type="submit">registrar</button>
          </ItemControllers>

          <div style={{ margin: '20px 0' }}>
            <h2>Lista dos item</h2>
          </div>
          <IPTable
            data={items}
            hasIndex={true}
            header={['ITEMS', 'PRECO', 'QTD', 'FORNECEDOR', 'TOTAL']}
            attr={['getNome', 'getPreco', 'getFornecedor', 'getPrecoUnitario']} />

        </ItemContainer>

        <ProdContainer>
          <ProdControllers>
            <InputField type="text" label="Produto de venda" width="100%" />
            <InputField type="number" label="Preço de venda" width="100%" />
            <InputField type="number" label="Qtd de venda" width="100%" />

            <InputField type="text" label="Cliente" width="100%" />
          </ProdControllers>
        </ProdContainer>
      </Main>

    </AppContainer>
  )
}

export default App
