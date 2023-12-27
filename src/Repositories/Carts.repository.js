export default class CartsRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getCarts = async() => {
        let result = this.dao.getAllPopulated();
        return result;
    }

    createCart = async(obj) => {
        console.log('repository', obj);
        let result = this.dao.createOne(obj);
        return result;
    }
}