import { cartsService } from "../Repositories/index.js";

class CartsController {
    async findAllCarts(req, res) {
        try {
            const allCarts = await cartsService.getCarts();
            res.status(200).json({ message: 'Cart', carts: allCarts });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createCart(req, res) {
        const cart = req.body;
        console.log(cart);
        try {
            const result = cartsService.createCart(cart);
            res.status(200).json({ message: 'Cart', cart: result });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export const cartsController = new CartsController();