export default class Item {
	protected nome: string;
	protected preco: number;
	protected qtd: number;
	protected fornecedor: string;
	protected unidade: number;
	protected precoUnitario: number;
	constructor(n: string, preco: number, qtd: number, f: string, uni: number, precoUni: number) {
		this.nome = n;
		this.preco = preco;
		this.qtd = qtd;
		this.fornecedor = f;
		this.unidade = uni;
		this.precoUnitario = precoUni;
	}
	getNome(): string{ return this.nome}
	getPreco(): number{ return this.preco}
	getQtd(): number{ return this.qtd}
	getFornecedor(): string{ return this.fornecedor}
	getUnidade(): number{return this.unidade};
	getPrecoUnitario(): number{return this.precoUnitario}
}