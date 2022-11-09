var express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

var jwt = require('jsonwebtoken');
var auth = require('../auth');
require('dotenv').config();


const userController = require("../../controllers/user.controller");
const SECRET_KEY = process.env.SECRET_KEY;

//User SignUp
app.post("/signup", async (req, res) => {

    try {

        var result = await userController.CreateUser(req.body);
        console.log(result);
        if(result == false) res.json({Error: 'User already exist'});
        

    } catch (error) {

        throw new Error(error);

    }
})

//User Login
app.post("/login", async (req, res) => {

    try {

        if (req.body.email == null || req.body.password == null) {

            res.status(403).send({
                message: "No field provided"
            });
        }

        //Checking user
        var exist = await userController.Login(req.body);
        console.log(exist.rows, "EX");

        if (exist == false) {
            res.status(403).send({
                message: "Wrong credentials"
            });
        }


        const token = jwt.sign({ exist }, SECRET_KEY, {
            expiresIn: '1h'
        });

        res.status(200).json({ Token: token });

    } catch (error) {
        console.log(error);
        throw new Error(error);

    }
});


module.exports = app;