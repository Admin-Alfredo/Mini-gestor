import Header from "./components/Header"
import IPTable from "./components/IPTable"
import InputField from "./components/InputField"
import { ItemContainer, ItemControllers } from "./components/ItemComponent/styles"
import { ProdContainer, ProdControllers, ProdTable } from "./components/ProdComponent/styles"
import { AppContainer, Main } from "./styles"

function App() {

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
          <div style={{ margin: '20px 0'}}>
            <h2 >Lista dos item</h2>
          </div>
          <IPTable/>
        </ItemContainer>

        <ProdContainer>
          <ProdControllers>
            <InputField type="text" label="Produto de venda" width="100%" />
            <InputField type="number" label="Preço de venda" width="100%" />
            <InputField type="number" label="Qtd de venda" width="100%" />

            <InputField type="text" label="Cliente" width="100%" />
          </ProdControllers>
          <ProdTable>

          </ProdTable>
        </ProdContainer>
      </Main>

    </AppContainer>
  )
}

export default App
