const LinkRepository = require('../repositories/link.repository');
const CategoryService = require('./category.service');


class LinkService {
    constructor() { }

    async CreateLink(link) {

        if (link.category_id == null || link.name == null) return null;

        var resultCategory = await CategoryService.GetCategoryById(link.category_id);

        if (resultCategory == null) return null;

        try {

            var result = await LinkRepository.Create(link);

            console.log(result, "RESULT SERVICE");

            if (result == null) return null;

            return result;

        } catch (err) {

            throw new Error(err);
        }
    }

    async GetLinkById(id) {
        return await LinkRepository.GetById(id);
    }

    async GetAllLinks(category_id) {
        return await LinkRepository.GetAll(category_id);
    }

    async DeleteCategory() {

    }


}

module.exports = new LinkService();