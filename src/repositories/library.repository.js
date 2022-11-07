const pool = require('../database');



class LibraryRepository {
    constructor() { }


    async Create(library) {

        try {
            console.log("data", library);
            await pool.query(`INSERT INTO "libraries"(name, description, user_id) 
            VALUES($1, $2, $3) `, [library.name, library.description, library.user_id]);

            return { status: 'ok' }
        } catch (err) {
            throw new Error(err);
        }


    }

    async GetAll(user_id) {

        try {
            const libraries = await pool.query(`SELECT * FROM libraries WHERE user_id = ${user_id}`);
            return libraries.rows;

        } catch (err) {
            throw new Error(err);
        }
    }


    async GetById(id) {
        try {
            const library = await pool.query(`SELECT * FROM libraries WHERE id = ${id}`);
            return library.rows;
        } catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = new LibraryRepository();