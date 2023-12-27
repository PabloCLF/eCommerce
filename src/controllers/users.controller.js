import { usersService } from "../Repositories/index.js";

class UsersController {

    async findAllUsers(req, res) {
        try {
            const allUsers = await usersService.getUsers();
            res.status(200).json({ message: 'Users', users: allUsers });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async findUser(req, res) {
        const { idUser } = req.params;
        console.log(idUser)
        try {
            const user = await usersService.getUserById(idUser);
            res.status(200).json({ message: 'User', user: user });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createUser(req, res) {
        const user = req.body;

        try {
            const result = await usersService.createUser(user);
            res.status(200).json({ message: 'User', user: result });
        } catch (error) {
            res.status(500).json(error);
        }
    }

}

export const usersController = new UsersController();