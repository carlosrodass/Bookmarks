const LibraryService = require('../services/library.service');


class LibraryController {


    //Create new Library
    async Create(library) {
        return await LibraryService.CreateLibrary(library);
    }
    async GetAll(UserId) {
        return await LibraryService.GetAllLibrary(UserId);
    }
    //Get library detail
    async GetById(id) {
        // logger.info("Controller::: GetByIdLibrary");
        return await LibraryService.GetLibraryById(id);
    }
    //Delete library
    async Delete() {
        // logger.info("Controller::: DeleteLibrary");
    }

}

// //Get all Libraries 


// //Get library detail by user
// async GetByUserId() {
//     logger.info("Controller::: GetByIdLibrary");
// }

//Get all Libraries 
// async GetAllByUserId(UserId) {
//     // logger.info("Controller::: Get All By User");
//     // return await LibraryService.GetAllLibraryByUser(UserId);
// }




module.exports = new LibraryController();