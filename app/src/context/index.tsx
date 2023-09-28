import { createContext, ReactNode, useReducer } from "react";

import Produto, { TProduto } from "../entities/Produto";
import actions from "./actions";
import Item, { TItem, TItemFieldsEditable } from "../entities/Item";
import {
  forEachNumber,
  getRandomFullname,
  getRandomId,
  getRandomName,
  getRandomNumber,
  getRandomRefeicao
} from "../util";
export type TStateContext = {
  produtos: Produto[],
  produtoSelecionado: Produto | null,
  produtosSearced: Produto[]
}
export type TAction =
  | { tipo: 'CREATE_PRODUTO', payload: TProduto }
  | { tipo: 'SELECT_PRODUTO', id: string | number }
  | { tipo: 'INSERT_ITEM_PRODUTO', id: string | number, payload: TItem }
  | { tipo: 'UPDATE_ITEM_PRODUTO', id: string | number, payload: (string | number | boolean), field: TItemFieldsEditable }
  | { tipo: 'DELETE_PRODUTO', id: string | number }
  | { tipo: 'DELETE_ITEM', id: string | number }
  | { tipo: 'INSERT_PRODUTO_SEARCED', payload: Produto[] }

export type TContextProvider = {
  state: TStateContext,
  dispatch: React.Dispatch<TAction>
}

const initialState: TStateContext = {
  produtos: forEachNumber(15, () => getRandomRefeicao())
    .map((ref) =>
      new Produto(
        ref.nome,
        ref.preco,
        getRandomNumber(4),
        getRandomName(),
        getRandomId(),
        ref.ingredientes.map((ing =>
          new Item(
            ing.nome,
            ing.preco,
            getRandomNumber(2),
            getRandomFullname(),
            getRandomNumber(2))))
      )
    ),
  produtoSelecionado: null,
  produtosSearced: []
}


const reducer = (state: TStateContext, action: TAction): TStateContext => actions[action.tipo](state, action)!;

const ProdutoContext = createContext<TContextProvider | null>(null);

export const ProdutoContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProdutoContext.Provider value={{ state, dispatch }}>
      {children}
    </ProdutoContext.Provider>
  )
}
export default ProdutoContext;