import IEntity from "./IEntidty";

export default class Item implements IEntity{
	public id!: string | number;
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
		uni: number) {

		this.nome = n;
		this.preco = preco;
		this.qtd = qtd;
		this.fornecedor = f;
		this.unidade = uni;
	}
	getNome(): string { return this.nome }
	getPreco(): number { return this.preco }
	getQtd(): number { return this.qtd }
	getFornecedor(): string { return this.fornecedor }
	getUnidade(): number { return this.unidade };
	getPrecoUnitario(): number { return this.getPreco() / this.getQtd() }
	getTotal(): number { return this.getPrecoUnitario() }
	getQtdFormatedWithUnidade(): string{
		return !!this.getUnidade() ? `${this.getQtd()}/${this.getUnidade()}` : `${this.getQtd()}`
	}
}