const CategoryRepository = require('../repositories/category.repository');
const LibraryService = require('./library.service');


class CategoryService {
    constructor() { }

    async CreateCategory(category) {

        if (category.library_id == null || category.name == null) return null;

        var resultLibrary = await LibraryService.GetLibraryById(category.library_id);

        if (resultLibrary == null) return null;

        try {

            var result = await CategoryRepository.Create(category);

            console.log(result, "RESULT SERVICE");

            if (result == null) return null;

            return result;

        } catch (err) {

            throw new Error(err);
        }
    }

    async GetCategoryById(id) {
        return await CategoryRepository.GetById(id);
    }

    async GetAllCategories(library_id) {
        return await CategoryRepository.GetAll(library_id);
    }

    async DeleteCategory() {

    }

}

module.exports = new CategoryService();