
const libraryRepository = require('../repositories/library.repository');
const userService = require('./user.service');
// const logger = require('../Logger/api.logger');

class LibraryService {

    constructor() { }

    async CreateLibrary(library) {

        if (library.user_id == null || library.name == null) return null;

        var resultUser = await userService.GetById(library.user_id);

        if (resultUser == null) return null;

        try {

            var result = await libraryRepository.Create(library);

            console.log(result, "RESULT SERVICE");

            if (result == null) return null;

            return result;

        } catch (err) {

            throw new Error(err);
        }
    }

    async GetLibraryById(id) {
        return await libraryRepository.GetById(id);
    }

    async GetAllLibrary(user_id) {
        return await libraryRepository.GetAll(user_id);
    }

    async DeleteLibrary() {

    }

}

module.exports = new LibraryService();

    // async GetAllLibraryByUser(UserId) {

    //     // var filteredElements = [];

    //     // if (UserId == null) return null;

    //     // var result = await libraryRepository.GetAll();

    //     // if (result == null) return null;

    //     // result.forEach(element => {

    //     //     if (element.UserId == UserId) {
    //     //         filteredElements.push(element);
    //     //     }
    //     // });

    //     // return filteredElements;
    // }



    // async filtering(value, UserId) {

    //     if (value.UserId == UserId) {

    //         return value;
    //     }
    // }




