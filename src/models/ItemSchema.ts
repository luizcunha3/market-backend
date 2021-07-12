import { Document, Model, model, Types, Schema, Query } from "mongoose"
import Item from "./Item"

const schema = new Schema<Item>({
    price: { type: Number, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: false },
    flavor: { type: String, required: false },
    quantity: { type: Number, required: false },
    ean: { type: String, required: false },
})

export default model<Item>("Item", schema)