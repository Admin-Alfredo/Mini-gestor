import { getRandomId } from "../util";
import IEntity from "./IEntidty";
import Item from "./Item";

export type TProduto = IEntity & {
	nome: string;
	preco: number;
	qtd: number;
	cliente: string;
}
export default class Produto implements IEntity {
	public id!: string | number;
	private nome: string;
	private preco: number;
	private qtd: number;
	private cliente: string;
	private items: Array<Item> = [];
	constructor(
		nome: string,
		preco: number,
		qtd: number,
		cliente: string,
		id: string | number = getRandomId(),
		items: Array<Item> = []
	) {

		this.nome = nome;
		this.preco = preco;
		this.qtd = qtd;
		this.cliente = cliente;
		this.id = id;
		this.items = items;
	}

	getNome() { return this.nome }
	getPreco() { return this.preco }
	getQtd() { return this.qtd }
	getCliente() { return this.cliente }
	getAllItems(): Array<Item> { return this.items }
	getTotal() { return this.preco * this.qtd }
	getId() { return this.id; }

	setNome(n: string) { this.nome = n }
	setPreco(p: number) { this.preco = p }
	setQtd(q: number) { this.qtd = q }
	setCliente(c: string) { this.cliente = c }


	setItem(item: Item | Item[]) {
		if (Array.isArray(item))
			this.items = item;
		else
			this.items.push(item);
	}

	getTotalDeGastos(): number {
		return this.items
			.reduce((acumulador, item) => acumulador += item.getTotal(), 0);
	}
	getMarginDeLucro(): number {
		return this.getTotal() - (this.getTotalDeGastos())
	}
}