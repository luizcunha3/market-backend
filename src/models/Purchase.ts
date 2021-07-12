import Item from './Item'

type Purchase = {
    date: Date
    market: String;
    items: [Item];
}

export default Purchase