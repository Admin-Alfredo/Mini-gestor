import Item from "./entities/Item"

const names = ['Arroz', 'Marmelada', 'Melacia', 'Maioneze']

export const items: Array<Item> = [0, 1, 2, 3, 4, 9, 0, 1, 2, 3, 4, 9].map((_, i) => {
    return new Item(
        names[Math.floor(Math.random() * names.length)],
        20000,
        10,
        'Angolisal',
        3,
        1000)
})