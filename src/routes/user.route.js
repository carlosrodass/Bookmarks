var express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

var jwt = require('jsonwebtoken');
var auth = require('../auth');


const userController = require("../controllers/user.controller");


//User detail
app.get("/getbyid/:userId", verifyTokenProvided, async (req, res) => {

    try {

        jwt.verify(req.token, 'secretkeycr', (err, authdata) => {
            if (err)
                res.sendStatus(403);
        });

        var result = await userController.GetById(req.params.userId);
        res.json(result);

    } catch (error) {

        throw new Error(error);
    }

})


// app.put("/update", verifyTokenProvided, async (req, res) => {

//     try {

//         jwt.verify(req.token, 'secretkeycr', (err, authdata) => {
//             if (err)
//                 res.sendStatus(403);
//         });

//         var result = await userController.UpdateUser(req.body);
//         res.json(result);

//     } catch (error) {

//         throw new Error(error);
//     }
// })


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