const pool = require('../database');


class CategoryRepository {

    constructor() { }


    async Create(category) {

        try {
            // console.log("data", library);
            await pool.query(`INSERT INTO "categories"(name, description, imageurl,library_id) 
            VALUES($1, $2, $3, $4) `, [category.name, category.description, category.imageurl, category.library_id]);

            return { status: 'ok' }
        } catch (err) {
            throw new Error(err);
        }


    }

    async GetAll(library_id) {

        try {
            const categories = await pool.query(`SELECT * FROM categories WHERE library_id = ${library_id}`);
            return categories.rows;

        } catch (err) {
            throw new Error(err);
        }
    }


    async GetById(id) {
        try {
            const category = await pool.query(`SELECT * FROM categories WHERE id = ${id}`);
            return category.rows;
        } catch (err) {
            throw new Error(err);
        }
    }


}

module.exports = new CategoryRepository();