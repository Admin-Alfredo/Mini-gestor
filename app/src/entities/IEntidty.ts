export default interface IEntity {
  id: string | number;
  getId: (() => (string | number));
}

export interface IAlimento {
  nome: string;
  tipo: string;
  calorias?: number;
  preco: number;
}
export interface IIngrediente extends IAlimento { }

export interface IPessoa {
  nome: string;
  idade: number;
  cidade: string;
}

export interface IRefeicao {
  nome: string;
  preco: number;
  ingredientes: IIngrediente[];
}