import BasicMongo from "./basic.dao.js";
import { cartsModel } from "../models/carts.model.js";

class CartsMongo extends BasicMongo {
    constructor() {
        super(cartsModel);
    }

    async getAllPopulated() {
        return this.model.find().populate("products.product", ["title", "price"]);

    }
}

export const cartsMongo = new CartsMongo();