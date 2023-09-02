import IEntity from "./IEntidty";
import Item from "./Item";

export default class Produto implements IEntity{
	public id!: string | number;
	private nome: string;
	private preco: number;
	private qtd: number;
	private cliente: string;
	private items: Array<Item> = [];
	constructor(nome: string, preco: number, qtd: number, cliente: string){
		this.nome = nome;
		this.preco = preco;
		this.qtd = qtd;
		this.cliente = cliente;
	}
	getNome(){return this.nome}
	getPreco(){return this.preco}
	getQtd(){ return this.qtd}
	getCliente(){return this.cliente}
	getAllItems(): Array<Item>{return this.items}
	getTotal(){return this.preco * this.qtd}

	setNome(n: string){ this.nome = n}
	setPreco(p: number){ this.preco =p}
	setQtd(q: number){this.qtd=q}
	setCliente(c: string){this.cliente=c}
	
}