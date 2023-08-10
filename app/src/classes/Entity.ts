export default class Entity {
    private preco: number;
    private quantidade: number;
    private result: number = 1;
    private ref: string;
    constructor(r: string, p: number, q: number) {
        this.preco = p;
        this.quantidade = q
        this.result = this.preco * this.quantidade
        this.ref = r;
    }
    public getPreco() { return this.preco }
    public getQuantidade() { return this.quantidade }
    public getResult() { return this.result }
    public getRef() { return this.ref }
    public setPreco(p: number) { this.preco = p }
    public setQuantidade(q: number) { this.quantidade = q }
    public seRef(r: string) { this.ref = r }
    public setResult(r: number) { this.result = r }
    public recalcular() {
        const p: number = this.getPreco() == 0 ? 1 : this.getPreco()
        const q: number = this.getQuantidade() == 0 ? 1 : this.getQuantidade()
        if (p < 0 || q < 0)
            this.setResult(0)
        else 
            this.setResult(p * q)
    }
}