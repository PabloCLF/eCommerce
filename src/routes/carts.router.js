import { Router } from 'express';
import { cartsController } from '../controllers/carts.controller.js';

const router = Router();

router.get('/', cartsController.findAllCarts);
router.post('/', cartsController.createCart);

export default router;