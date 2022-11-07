const LinkService = require('../services/link.service');



class LinkController {


    async Create(link) {
        return await LinkService.CreateLink(link);
    }
    async GetAll(categoryId) {
        return await LinkService.GetAllLinks(categoryId);
    }
    //Get library detail
    async GetById(id) {
        return await LinkService.GetLinkById(id);
    }
    //Delete library
    async Delete() {
    }

}

module.exports = new LinkController();