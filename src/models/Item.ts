import { Schema, model, connect } from 'mongoose'
import ItemSchema from './ItemSchema'

type Item = {
    price: Number;
    name: String;
    brand: String;
    flavor: String;
    quantity: Number;
    ean: String;
}

export function itemToMongooseModel(item: Item): ItemSchema {
    return new ItemSchema({
        price: item.price,
        name: item.name,
        brand: item.brand,
        flavor: item.flavor,
        quantity: item.quantity,
        ean: item.ean
    })
}

export { Item } 