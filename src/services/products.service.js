import { productsMongo } from "../DAL/daos/products.dao.js"


class ProductsService {

    async getAll() {
        return productsMongo.getAll();
    }
}

export const productsService = new ProductsService();