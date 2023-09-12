import { IRefeicao } from "../entities/IEntidty";
import Item from "../entities/Item";
import Produto from "../entities/Produto";
import {
  forEachNumber,
  getRandomFullname,
  getRandomName,
  getRandomNumber,
  getRandomRefeicao,
  stringFormatted
} from "../util";

export const produtos: Produto[] = forEachNumber<Produto>(10, () => {
  const refeicao: IRefeicao = getRandomRefeicao();
  const prods = new Produto(stringFormatted(refeicao.nome, 15), refeicao.preco, getRandomNumber(10), getRandomName());

  const ingredientes: Item[] = refeicao.ingredientes.map((ing) =>
    new Item(ing.nome, ing.preco, getRandomNumber(3), getRandomFullname(), getRandomNumber(1))
  )
  prods.setItem(ingredientes);
  return prods;
});