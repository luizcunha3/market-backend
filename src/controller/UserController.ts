import {
    Schema,
    model,
    connect
} from 'mongoose'
import {
    runInContext
} from 'vm'
import { Item, itemToMongooseModel } from '../models/Item'
import ItemSchema from '../models/ItemSchema'



class UserController {

    static async testConection() {
        const url = "mongodb+srv://luizcunha:familia1@cluster0.l36ci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        let item: Item = {
            brand: 'Ble',
            ean: 'Ble',
            flavor: 'Ble',
            name: 'BleBle',
            price: 20.52,
            quantity: 3
        }
        let doc = itemToMongooseModel(item)
        await connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        await doc.save()
    }


}

export default UserController