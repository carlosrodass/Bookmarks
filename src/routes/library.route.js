var express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

var jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;


const libraryController = require('../controllers/library.controller');

app.post('/Create', verifyTokenProvided, async (req, res) => {

    try {

        jwt.verify(req.token, SECRET_KEY, (err, authdata) => {
            if (err)
                res.sendStatus(403);
        });

        var result = await libraryController.Create(req.body);
        res.json(result);

    } catch (err) {
        throw new Error(err)
    }
})
// app.get("/getallbyuser/:UserId", verifyTokenProvided, async (req, res) => {

//     try {

//         jwt.verify(req.token, SECRET_KEY, (err, authdata) => {
//             if (err)
//                 res.sendStatus(403);
//         });

//         var result = await libraryController.GetAll(req.params.UserId);
//         res.json(result);

//     } catch (error) {

//         throw new Error(error);
//     }
// })


app.get("/getbyid/:libraryId", verifyTokenProvided, async (req, res) => {

    try {

        jwt.verify(req.token, SECRET_KEY, (err, authdata) => {
            if (err)
                res.sendStatus(403);
        });

        var result = await libraryController.GetById(req.params.libraryId);
        res.json(result);

    } catch (error) {

        throw new Error(error);
    }

})



app.get("/getall/:user_id", verifyTokenProvided, async (req, res) => {

    try {

        jwt.verify(req.token, SECRET_KEY, (err, authdata) => {
            if (err)
                res.sendStatus(403);
        });

        var result = await libraryController.GetAll(req.params.user_id);
        res.json(result);

    } catch (error) {

        throw new Error(error);
    }
})


function verifyTokenProvided(req, res, next) {

    let token = req.headers['authorization'];

    if (typeof token !== 'undefined') {
        const bearerToken = token.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).send({
            message: "No token provided!"
        });

    }
}


module.exports = app;
