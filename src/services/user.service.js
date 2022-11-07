const { json } = require('body-parser');
const userRepository = require('../repositories/user.repository');


class UserService {

    constructor() { }


    async CreateUser(user) {
        try {
            return await userRepository.CreateUser(user);

        } catch (error) {

            throw new Error(error);

        }
    }


    async Login(user) {

        try {
            var isCreated = await userRepository.GetUserLogin(user);

            if (isCreated.email == user.email) {
                if (isCreated.password == user.password) {

                    return isCreated;
                }
                return false;
            }
            console.log(isCreated, "IS");

            return false;

        } catch (error) {
            console.log(error);
            throw new Error(error);

        }
    }

    async GetUsers() {
        return await userRepository.GetUsers();
    }

    async GetById(userId) {
        try {
            var result = await userRepository.GetById(userId);
            console.log(result);
            return result;

        } catch (error) {
            throw new Error(error);
        }
    }


    async UpdateUser(user) {

        try {

            var userFound = await userRepository.GetById(user.Id);

            if (userFound == null) return json("Not found");

            if (user.name != null)

                return await userRepository.UpdateUser(user);

        } catch (error) {

            throw new Error(error);

        }
    }

}

module.exports = new UserService();