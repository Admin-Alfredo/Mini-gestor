import { alimentos, pessoas, refeicoes } from "../datas";
import { IAlimento, IRefeicao } from "../entities/IEntidty";
import formatter from "format-number";

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

export const getTotalDeGastos = (items: Array<{ getTotal: () => number }>) => {
  const totais = items.reduce((acumulador, item) => acumulador += item.getTotal(), 0)
  var formattedNumber = formatter({ prefix: '£', suffix: '/item' })(68932, { noSeparator: true });

  return {
    full: totais,
    formatted: formattedNumber
  }
}