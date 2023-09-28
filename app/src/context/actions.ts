import { TAction, TStateContext } from ".";
import Item from "../entities/Item";
import Produto from "../entities/Produto";

export default {
  CREATE_PRODUTO: function (state: TStateContext, action: TAction): TStateContext {
    if (action.tipo != 'CREATE_PRODUTO') return state;
    const { payload } = action;

    const produto = new Produto(payload.nome, payload.preco, payload.qtd, payload.cliente);

    // console.log("PRODUTO: ", produto)

    return { ...state, produtos: [...state.produtos, produto] }
  },
  SELECT_PRODUTO: function (state: TStateContext, action: TAction): TStateContext {
    if (action.tipo != 'SELECT_PRODUTO') return state;

    const produto = state.produtos.find((prod) => {
      if (prod.getId() == action.id) return prod;
    });
    if (!produto) return state;
    console.log("SELECTED_PRODUTO: ", produto);

    return { ...state, produtoSelecionado: produto };
  },
  INSERT_ITEM_PRODUTO: function (state: TStateContext, action: TAction): TStateContext {
    if (action.tipo != 'INSERT_ITEM_PRODUTO') return state;
    const { payload } = action
    const produtos = state.produtos.map(prod => {
      if (prod.getId() == action.id) {
        const item = new Item(
          payload.nome,
          payload.preco,
          payload.qtd,
          payload.fornecedor,
          payload.unidade
        )

        prod.setItem(item)
      }
      return prod;
    })
    return { ...state, produtos };
  },
  UPDATE_ITEM_PRODUTO: function (state: TStateContext, action: TAction): TStateContext {
    if (action.tipo != 'UPDATE_ITEM_PRODUTO') return state;

    const item = state.produtoSelecionado?.getAllItems().find((itm) => {
      if (itm.getId() == action.id) return itm;
    });
    if (!item) return state;
    console.assert(action.field == 'setNome' && typeof action.payload != 'string', "setNome: [action.payload] deve ser uma string");
    console.assert(action.field == 'setPreco' && typeof action.payload != 'number', "setPreco: [action.payload] deve ser uma number");
    console.assert(action.field == 'setQtd' && typeof action.payload != 'number', "setQtd: [action.payload] deveder uma number");
    console.assert(action.field == 'setUnidade' && typeof action.payload != 'number', "setUnidade: [action.payload] deve ser uma number");
    console.assert(action.field == 'setFornecedor' && typeof action.payload != 'string', "setFornecedor: [action.payload] deve ser uma string");


    switch (action.field) {
      case 'setNome':
        item[action.field](action.payload as string);
        break;
      case 'setPreco':
        item[action.field](action.payload as number);
        break;
      case 'setQtd':
        item[action.field](action.payload as number);
        break;
      case 'setUnidade':
        item[action.field](action.payload as number);
        break;
      case 'setFornecedor':
        item[action.field](action.payload as string);
        break;
    }
    console.log(item.getNome(), " , ", action.field, "(", action.payload, ")");

    return { ...state };
  },
  DELETE_PRODUTO: function (state: TStateContext, action: TAction): TStateContext {
    if (action.tipo != 'DELETE_PRODUTO') return state;
    return {
      ...state,
      produtos: state.produtos.filter(item => item.getId() != action.id),
      produtoSelecionado: null
    }
  },
  DELETE_ITEM: function (state: TStateContext, action: TAction): TStateContext {
    if (action.tipo != 'DELETE_ITEM') return state;

    state.produtoSelecionado?.setItem(
      state.produtoSelecionado?.
        getAllItems().
        filter(item => item.getId() != action.id)
    )
    return { ...state, produtoSelecionado: state.produtoSelecionado }
  },
  INSERT_PRODUTO_SEARCED: function (state: TStateContext, action: TAction): TStateContext {
    if (action.tipo != 'INSERT_PRODUTO_SEARCED') return state;

    return { ...state, produtosSearced: action.payload }
  }

};