export default class ProductsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getProducts = async() => {
        let result = this.dao.getAll();
        return result;
    }

    createProduct = async(obj) => {
        let result = this.dao.createOne(obj);
        return result;
    }
}