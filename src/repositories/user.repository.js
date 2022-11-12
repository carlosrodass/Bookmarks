const pool = require('../database');


class userRepository {

    constructor() { }

    async GetUserLogin(user) {
        let data = {};

        try {


            data = await pool.query(`SELECT * FROM users 
                                        WHERE users.email = $1`, [user.email]);

            // console.log(data.rows[0]);
            return data.rows[0]

        } catch (error) {

            throw new Error(error);
        }
    }

    async CreateUser(user) {
        let data = {};

        try {
            data = await pool.query(`INSERT INTO "users"(name, email, password) 
                                        VALUES($1, $2, $3) `, [user.name, user.email, user.password]);

            console.log(data);
        } catch (err) {
            throw new Error(err);
        }
        return data;

    }


    // async GetUsers() {

    //     try {

    //         const users = await pool.query('SELECT * FROM users');
    //         return users.rows;
    //     } catch (err) {
    //         console.log(err);
    //         throw new Error(err);
    //     }
    // }

    async GetById(userId) {
        let data = {};
        try {
            data = await pool.query(`SELECT * FROM users 
                                        WHERE users.id = ${userId}`);
            return data.rows;

        } catch (error) {

            throw new Error(error);
        }
    }



    async UpdateUser(user) {
        // let data = {};
        // try {
        //     data = await db.User.update({ ...user });
        // } catch (err) {
        //     logger.error('Error::' + err);
        // }
        // return data;
    }

    // async deleteUser(userId) {
    //     let data = {};
    //     try {
    //         data = await this.db.Users.destroy({
    //             where: {
    //                 id: userId
    //             }
    //         });
    //     } catch (err) {
    //         logger.error('Error::' + err);
    //     }
    //     return data;
    //     // return { status: `${data.deletedCount > 0 ? true : false}` };
    // }

}

module.exports = new userRepository();