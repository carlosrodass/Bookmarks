const { json } = require('body-parser');
const userRepository = require('../repositories/user.repository');


class UserService {

    constructor() { }


    async CreateUser(user) {
        try {

            var resultUser = await this.checkingUserEmail(user);
            if (resultUser == false) return false;

            return await userRepository.CreateUser(user);

        } catch (error) {

            throw new Error(error);

        }
    }


    async Login(user) {

        try {

            var resultUser = await this.checkingUser(user);
            if (resultUser == false) return false;
            return resultUser;


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


    async checkingUser(user) {

        var isCreated = await userRepository.GetUserLogin(user);
        console.log(isCreated);

        if (isCreated != null || isCreated != 'undefined') {

            if (isCreated.email == user.email) {
                if (isCreated.password == user.password) {

                    return isCreated;
                }
                return false;
            }
            console.log(isCreated, "IS");

            return false;
        }

        return false;
    }


    async checkingUserEmail(user) {

        var isCreated = await userRepository.GetUserLogin(user);

        if (isCreated == 'undefined' || isCreated == null) {
            return true;
        }

        return false;
    }

}

module.exports = new UserService();