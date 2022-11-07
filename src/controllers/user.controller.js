const userService = require("../services/user.service");


class UserController {

    async GetUsers() {
        return await userService.GetUsers();
    }

    async GetById(userId) {
        return await userService.GetById(userId);
    }

    async CreateUser(user) {
        return await userService.CreateUser(user);
    }

    async Login(user) {
        return await userService.Login(user);
    }
    // async UpdateUser(user) {


    //     return await userService.UpdateUser(user);
    // }
}

module.exports = new UserController();

