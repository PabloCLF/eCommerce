export default class UsersRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getUsers = async() => {
        let result = await this.dao.getAll();
        console.log('result');
        return result;
    }

    getUserById = async(id) => {
        let result = await this.dao.getById(id);
        return result;
    }

    createUser = async(obj) => {
        let result = await this.dao.createOne(obj);
        return result;
    }
}