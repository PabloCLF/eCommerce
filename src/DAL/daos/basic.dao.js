export default class BasicMongo {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return this.model.find();

    }

    async getById(id) {
        return this.model.findById(id);
    }

    async createOne(obj) {
        console.log(obj)
        return this.model.create(obj);
    }

    async deleteOne(id) {
        return this.model.findByIdAndDelete(id);
    }

    async updateOne(id, obj) {
        return this.model.updateOneupdateOne({ _id: id }, obj);
    }
}