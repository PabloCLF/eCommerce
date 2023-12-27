import { productsService } from "../Repositories/index.js";

class ProductsController {

    async findAllProducts(req, res) {
        try {
            const allProducts = await productsService.getProducts()
            res.status(200).json({ message: 'Products', products: allProducts });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createProduct(req, res) {
        const product = req.body;

        try {
            const result = await productsService.createProduct(product);
            res.status(200).json({ message: 'Product', product: result });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export const productsController = new ProductsController();