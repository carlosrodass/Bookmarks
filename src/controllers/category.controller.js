const CategoryService = require('../services/category.service');



class CategoryController {


    async Create(category) {
        return await CategoryService.CreateCategory(category);
    }
    async GetAll(libraryId) {
        return await CategoryService.GetAllCategories(libraryId);
    }
    //Get library detail
    async GetById(id) {
        return await CategoryService.GetCategoryById(id);
    }
    //Delete library
    async Delete() {
    }

}

module.exports = new CategoryController();