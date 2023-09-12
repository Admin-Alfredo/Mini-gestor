import { getRandomId } from "../util";
import IEntity from "./IEntidty";

export type TItem = {
	nome: string;
	preco: number;
	qtd: number;
	fornecedor: string;
	unidade: number,
	precoUnitario?: number;
}
export type TItemFieldsEditable =
	('setNome' |
	'setPreco' |
	'setQtd' |
	'setFornecedor' |
	'setUnidade' | string) 

export default class Item implements IEntity {
	public id: string | number;
	protected nome: string;
	protected preco: number;
	protected qtd: number;
	protected fornecedor: string;
	protected unidade: number;
	constructor(
		n: string,
		preco: number,
		qtd: number,
		f: string,
		uni: number,
		id: string | number = getRandomId()) {

		this.nome = n;
		this.preco = preco;
		this.qtd = qtd;
		this.fornecedor = f;
		this.unidade = uni;
		this.id = id;
	}
	getId(): (string | number) { return this.id };
	getNome(): string { return this.nome }
	getPreco(): number { return this.preco }
	getQtd(): number { return this.qtd }
	getFornecedor(): string { return this.fornecedor }
	getUnidade(): number { return this.unidade };
	getPrecoUnitario(): number { return this.getPreco() / this.getQtd() }
	getTotal(): number { return this.getPrecoUnitario() }
	getQtdFormatedWithUnidade(): string {
		return !!this.getUnidade() ? `${this.getQtd()}/${this.getUnidade()}` : `${this.getQtd()}`
	}

	setNome(n: string) { this.nome = n }
	setPreco(p: number) { this.preco = p }
	setQtd(q: number) { this.qtd = q }
	setFornecedor(f: string) { this.fornecedor = f }
	setUnidade(u: number) { this.unidade = u }

}