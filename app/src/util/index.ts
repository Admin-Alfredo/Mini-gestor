import { TStateContext } from "../context";
import { alimentos, pessoas, refeicoes } from "../datas";
import { IAlimento, IRefeicao } from "../entities/IEntidty";
import formatter from "format-number";
import Produto from "../entities/Produto";

export const getRandomNumber = (x: number): number => {
  let generetedNumber = Math.floor((Math.random() * x))
  return generetedNumber != 0 ? generetedNumber : 1;
}
export const getRandomName = (): string => {
  return pessoas[Math.floor(Math.random() * pessoas.length)].nome.split(' ')[0]
}
export const getRandomFullname = (): string => {
  return pessoas[Math.floor(Math.random() * pessoas.length)].nome
}
export const getRandomLastname = (): string => {
  return pessoas[Math.floor(Math.random() * pessoas.length)].nome.split(' ')[1]
}

export const getRandomAlimento = (): IAlimento => {
  return alimentos[Math.floor(Math.random() * alimentos.length)]
}
export const getRandomRefeicao = (): IRefeicao => {
  return refeicoes[Math.floor(Math.random() * refeicoes.length)]
}

export const getRandomId = () => {
  const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let sequencia = '';

  for (let i = 0; i < 12; i++) {
    sequencia += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return sequencia;
}
export function forEachNumber<T>(qtd: number, callbackFn: () => T): Array<T> {
  const result: T[] = [];
  for (let i = 0; i < qtd; i++) result.push(callbackFn());
  return result;
}
export const stringFormatted = (str: string, q: number = 20): string => str.slice(0, q).trim().concat('..');

export const getMarginDeLucroFormatted = (param: TStateContext | Produto): string => {
  if (param instanceof Produto)
    return formatedData(param.getMarginDeLucro()!, { noSeparator: false });
  else if (param.produtoSelecionado)
    return formatedData(param.produtoSelecionado?.getMarginDeLucro()!, { noSeparator: false });
  else
    return "0.00 Kz";
}

export const formatedData = formatter({ suffix: ' Kz', })
const formatedDataPorcent = formatter({ suffix: ' %', })

export const getTotalGastosFormatted = (state: TStateContext): string => {
  if (state.produtoSelecionado)
    return formatedData(state.produtoSelecionado?.getTotalDeGastos()!, { noSeparator: false });
  else
    return '0.00 Kz'
}



export const getAllTotalGastosDosFormatted = (state: TStateContext): string => {
  if (state.produtos.length != 0)
    return formatedData(
      state.produtos.reduce((acumulador, produto) => acumulador += produto.getTotalDeGastos(), 0)!,
      { noSeparator: false });
  else
    return '0.00 Kz';
}
export const getAllMargenDeLucro = (state: TStateContext): string => {
  if (state.produtos.length != 0)
    return formatedData(
      state.produtos.reduce((acumulador, produto) => acumulador += produto.getMarginDeLucro(), 0)!,
      { noSeparator: false }
    )
  else
    return '0.00 Kz';
}



export const getMarginDeLucroPorcent = (state: TStateContext): string => {
  if (state.produtoSelecionado)
    return formatedDataPorcent(
      Math.round((state.produtoSelecionado?.getMarginDeLucro()! * 100) / (state.produtoSelecionado?.getTotalDeGastos()! * state.produtoSelecionado?.getQtd()!))
      , { noSeparator: false }
    )
  else
    return '0.00 Kz'
}
export const getTotalGanhos = (state: TStateContext): number => {
  if (state.produtos.length != 0)
    return state.produtos.reduce((acumulador, produto) => acumulador += produto.getTotal(), 0)
  else
    return 0;
}
export const getTotalDeGanhosFormatted = (state: TStateContext): string => {
  const ganhos = getTotalGanhos(state);
  if (ganhos != 0)
    return formatedData(ganhos, { noSeparator: false });
  else
    return '0.00 Kz';
}