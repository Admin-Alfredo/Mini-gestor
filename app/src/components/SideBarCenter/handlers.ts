import { TAction, TContextProvider } from "../../context";
import IEntity from "../../entities/IEntidty";
import { ChangeEvent } from 'react'
import Item, { TItemFieldsEditable } from "../../entities/Item";
import Produto from "../../entities/Produto";


const saveValue = (id: (string | number), field: TItemFieldsEditable, value: string, dispatch: React.Dispatch<TAction>) => {
  dispatch({ tipo: 'UPDATE_ITEM_PRODUTO', field: field.replace('get', 'set'), id, payload: value })
}

export const handlerEntitySelectRow = (entity: IEntity, e: any, dispatch: React.Dispatch<TAction>) => {
  const tbody = e.currentTarget.parentElement!;
  if (!tbody) return;
  if (e.currentTarget.classList.contains('active')) return;
  console.log(tbody.querySelectorAll('tr'));

  (tbody.querySelectorAll('tr') as HTMLTableRowElement[]).forEach((tr) => {
    if (tr.classList.contains('active')) tr.classList.remove('active');
  })
  e.currentTarget.classList.add('active')


  dispatch({ tipo: 'SELECT_PRODUTO', id: entity.id })
}
export type TEditorProps = {
  event: ChangeEvent,
  colName: string,
  item: (Item | Produto)
}
export const handlerEntityEditor = (
  { event: { target }, colName, item }: TEditorProps, dispatch: React.Dispatch<TAction>
) => {
  const inputElement = document.createElement('input');
  const textTmp = target.textContent;
  target.textContent = "";

  target.appendChild(inputElement)
  inputElement.value = textTmp!;
  inputElement.focus();

  const handlerBlurInputEditor = () => {
    target.removeChild(inputElement);
    target.innerHTML = inputElement.value!;

    saveValue(item.getId(), colName as TItemFieldsEditable, target.textContent!, dispatch);
  }

  inputElement.addEventListener('blur', handlerBlurInputEditor);
}

export const handlerEntityDeleteRow = (e: ChangeEvent, tipo: string, entity: IEntity, dispatch: React.Dispatch<TAction>) => {
  const target: HTMLElement = e.currentTarget.parentElement?.parentElement!

  for (let i = 0; i < target.children.length; i++)
    target.children.item(i)?.classList.add('fade-up');

  setTimeout(() => {
    switch (tipo) {
      case 'produto':
        dispatch({ tipo: 'DELETE_PRODUTO', id: entity.id })
        break;
      case 'item':
        dispatch({ tipo: 'DELETE_ITEM', id: entity.id })
        break;
    }
  }, 400)
}

export const handlerInputTextForSearchProduto = (e: any, { state, dispatch }: TContextProvider) => {
  const inputSearch: HTMLInputElement = e.currentTarget
  if (inputSearch.value.trim() == "")
    dispatch({ tipo: 'INSERT_PRODUTO_SEARCED', payload: state.produtos })
  else
    dispatch({
      tipo: 'INSERT_PRODUTO_SEARCED',
      payload: state.produtos.filter(produto => produto.getNome().includes(inputSearch.value))
    })
}

export const handlerFocusInputSearchProduto = (e: any, { state, dispatch }: TContextProvider, setIsSearch: React.Dispatch<React.SetStateAction<boolean>>) => {
  const inputSearch: HTMLInputElement = e.currentTarget
  if (inputSearch.value.trim() == "")
    return dispatch({ tipo: 'INSERT_PRODUTO_SEARCED', payload: state.produtos })

  inputSearch.selectionStart = 0
  inputSearch.selectionEnd = inputSearch.value.length
  setIsSearch(true)
}
export const handlerBlurInputSearchProduto = (e: any, setIsSearch: React.Dispatch<React.SetStateAction<boolean>>) => {
  const inputSearch: HTMLInputElement = e.currentTarget
  if (inputSearch.value.trim() == "")
    setIsSearch(false)
} 