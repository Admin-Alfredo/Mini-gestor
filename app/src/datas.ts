import Item from "./entities/Item"
import Produto from "./entities/Produto"

const itemNomes = ['Arroz', 'Marmelada', 'Melacia', 'Maioneze']
const produtoNomes = ['Branco', 'Admiro', 'Manuel', 'Miguel']
const Nomes = ['Hamburque', 'Melacia', 'Fejoada', 'Miguel']

export const items: Item[] = [0, 1, 2, 3, 4, 9].map((_, i) => {
    return new Item(itemNomes[Math.floor(Math.random() * itemNomes.length)], 20000, 10, 'Angolisal', 3)
})
export const produtos: Produto[] = [0, 1, 2, 3, 4, 9].map((_, i) => {
    return new Produto(Nomes[Math.floor(Math.random() * Nomes.length)],1500,5,produtoNomes[Math.floor(Math.random() * produtoNomes.length)])
})