const pool = require('../database');

class LinkRepository {

    constructor() { }


    async Create(link) {

        try {
            
            await pool.query(`INSERT INTO "links"(name, description, imageurl,urllink,category_id) 
            VALUES($1, $2, $3, $4, $5) `, [link.name, link.description, link.imageurl, link.urllink, link.category_id]);

            return { status: 'ok' }
        } catch (err) {
            throw new Error(err);
        }


    }

    async GetAll(category_id) {

        try {
            const links = await pool.query(`SELECT * FROM links WHERE category_id = ${category_id}`);
            return links.rows;

        } catch (err) {
            throw new Error(err);
        }
    }


    async GetById(id) {
        try {
            const link = await pool.query(`SELECT * FROM links WHERE id = ${id}`);
            return link.rows;
        } catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = new LinkRepository();