import Header from "./components/Header"
import IPTable from "./components/IPTable"
import InputField from "./components/InputField"
import { ItemContainer, ItemControllers } from "./components/ItemComponent/styles"
import { ProdContainer, ProdControllers, ProdTable } from "./components/ProdComponent/styles"
import Item from "./entities/Item"
import { AppContainer, Main } from "./styles"
const names = ['Arroz', 'Marmelada', 'Melacia', 'Maioneze']
function App() {
  const items: Array<Item> = [0,1,2,3,4,9,0,1,2,3,4,9].map((_, i) => {
    return new Item(names[Math.floor(Math.random() * names.length)], 20000, 10, 'Angolisal', 3, 1000)
  })
  return (
    <AppContainer>
      <Header />
      <Main>
        <ItemContainer>
          <ItemControllers>
            <InputField type="text" label="Nome do produto" width="100%" />
            <InputField type="number" label="Preço de compra" width="100%" />
            <InputField type="number" label="Qtd de compra" width="100%" />

            <InputField type="text" label="Fornecedor" width="100%" />
            <InputField type="number" label="Unidade" width="100%" />
            <InputField type="number" label="Preço unitário" width="100%" />
          </ItemControllers>
          <div style={{ margin: '20px 0' }}>
            <h2 >Lista dos item</h2>
          </div>
          <IPTable
            data={items}
            hasIndex={true}
            header={['ITEMS','PRECO', 'QTD', 'FORNECEDOR', 'TOTAL']}
            attr={['getNome', 'getPreco', 'getQtd', 'getFornecedor', 'getPrecoUnitario']} />

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
