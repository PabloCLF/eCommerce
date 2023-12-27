import { productsMongo } from "../DAL/daos/products.dao.js";
import { cartsMongo } from "../DAL/daos/carts.dao.js";
import { usersMongo } from "../DAL/daos/users.dao.js";
import ProductsRepository from "./Products.repository.js";
import CartsRepository from "./Carts.repository.js";
import UsersRepository from "./Users.repository.js";


export const productsService = new ProductsRepository(productsMongo);

export const cartsService = new CartsRepository(cartsMongo);

export const usersService = new UsersRepository(usersMongo);