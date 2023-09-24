import Header from "./components/Header"
import { AppContainer, Main } from "./styles"

import SideBarLeft from "./components/SideBarLeft"
import SideBarCenter from "./components/SideBarCenter"
import SideBarRight from "./components/SideBarRight"
import { ProdutoContextProvider } from "./context"


function App() {

  return (
    <ProdutoContextProvider>
      <AppContainer>
        <Header />
        <Main>
          <SideBarLeft />
          <SideBarCenter />
          <SideBarRight/>
        </Main>
      </AppContainer>
    </ProdutoContextProvider>
  )
}

export default App
