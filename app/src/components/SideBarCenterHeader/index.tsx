import { Container } from './styles'
import { Title, WIcon } from '../../styles'
import InputField, { FieldControl } from '../InputField'
import { LucideFilePlus, LucideSettings } from 'lucide-react'
import {
  handlerInputTextForSearchProduto,
  handlerBlurInputSearchProduto,
  handlerFocusInputSearchProduto,
  handlerClickGeneratorPdf
} from './handlers'
import ProdutoContext, { TContextProvider } from '../../context'
import { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'


// nome do produto: #####
// Preço do produto: ####
// quantidade: ####
// cliente: ####

// ========================[Produtos utilizados]========================




export default function SideBarCenterHeadder() {
  const context: TContextProvider = useContext(ProdutoContext)!
  const [_, setIsSearch] = context.useActionSearchProduto


  return (
    <Container>
      <Title>Produtos vendidos</Title>
      <div style={{ display: 'flex', justifyContent: 'flex-end', flex: 2 }}>
        <WIcon style={{ cursor: 'pointer' }}>
          <LucideSettings />
        </WIcon>
        <WIcon
           onClick={() => handlerClickGeneratorPdf(context.state)}
          style={{ cursor: 'pointer' }}>
          <LucideFilePlus />
        </WIcon>
      </div>
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
    </Container>
  )
}
