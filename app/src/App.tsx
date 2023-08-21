import Header from "./components/Header"
import InputField from "./components/InputField"
import { AppContainer } from "./styles"

function App() {

  return (
    <AppContainer>
      <Header></Header>
      <InputField width={200}/>
     My App Mini-Gestor!
     <a href="#">click aqui</a>
    </AppContainer>
  )
}

export default App
