import { TAction, TContextProvider } from "../../context";
import IEntity from "../../entities/IEntidty";
import { ChangeEvent } from 'react'
import Item, { TItemFieldsEditable } from "../../entities/Item";
import Produto from "../../entities/Produto";


const saveValue = (id: (string | number), field: TItemFieldsEditable, value: string, dispatch: React.Dispatch<TAction>) => {
  dispatch({ tipo: 'UPDATE_ITEM_PRODUTO', field: field.replace('get', 'set'), id, payload: value })
}

export const handlerEntitySelectRow = (currentTarget: HTMLElement, entity: IEntity, context: TContextProvider): boolean => {

  const tbody = currentTarget.parentElement!;
  console.log(currentTarget.dataset.id)
  if (!tbody) return false;
  if (currentTarget.classList.contains('active')) return false;
  console.log(tbody.querySelectorAll('tr'));

  (tbody.querySelectorAll('tr') as NodeListOf<HTMLTableRowElement>).forEach((tr) => {
    if (tr.classList.contains('active')) tr.classList.remove('active');
  })
  currentTarget.classList.add('active')


  context.dispatch({ tipo: 'SELECT_PRODUTO', id: entity.id })
  return true;
}
export type TEditorProps = {
  event: ChangeEvent,
  colName: string,
  item: (Item | Produto)
}
export const handlerEntityEditor = (
  { event: { target }, colName, item }: TEditorProps, context: TContextProvider
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

    saveValue(item.getId(), colName as TItemFieldsEditable, target.textContent!, context.dispatch);
  }

  inputElement.addEventListener('blur', handlerBlurInputEditor);
}

export const handlerEntityDeleteRow = (e: ChangeEvent, tipo: string, entity: IEntity, context: TContextProvider) => {
  const target: HTMLElement = e.currentTarget.parentElement?.parentElement!

  for (let i = 0; i < target.children.length; i++)
    target.children.item(i)?.classList.add('fade-up');

  setTimeout(() => {
    switch (tipo) {
      case 'produto':
        context.dispatch({ tipo: 'DELETE_PRODUTO', id: entity.id });
        break;
      case 'item':
        context.dispatch({ tipo: 'DELETE_ITEM', id: entity.id });
        break;
    }
  }, 400)
}

export const handlerInputTextForSearchProduto = (e: any, context: TContextProvider) => {
  const inputSearch: HTMLInputElement = e.currentTarget
  if (inputSearch.value.trim() == "")
    context.dispatch({ tipo: 'INSERT_PRODUTO_SEARCED', payload: context.state.produtos })
  else {
    context.dispatch({
      tipo: 'INSERT_PRODUTO_SEARCED',
      payload: context.state.produtos.filter(produto => produto.getNome().includes(inputSearch.value))
    })
  }
}

export const handlerFocusInputSearchProduto = (e: any, context: TContextProvider, setIsSearch: React.Dispatch<React.SetStateAction<boolean>>) => {
  const inputSearch: HTMLInputElement = e.currentTarget
  if (inputSearch.value.trim() == "")
    context.dispatch({ tipo: 'INSERT_PRODUTO_SEARCED', payload: context.state.produtos })

  inputSearch.selectionStart = 0
  inputSearch.selectionEnd = inputSearch.value.length
  setIsSearch(true)
}
export const handlerBlurInputSearchProduto = (e: any, setIsSearch: React.Dispatch<React.SetStateAction<boolean>>) => {
  const inputSearch: HTMLInputElement = e.currentTarget
  if (inputSearch.value.trim() == "")
    setIsSearch(false)
} 