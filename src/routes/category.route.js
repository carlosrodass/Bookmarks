const express = require('express');
const app = express();

const CategoryController = require('../controllers/category.controller');
var jwt = require('jsonwebtoken');

app.post('/Create', verifyTokenProvided, async (req, res) => {

    try {

        jwt.verify(req.token, 'secretkeycr', (err, authdata) => {
            if (err)
                res.sendStatus(403);
        });

        var result = await CategoryController.Create(req.body);
        res.json(result);

    } catch (error) {

        throw new Error(error)
    }
});

app.get('/getallbylibrary/:categoryId', verifyTokenProvided, async (req, res) => {

    try {

        jwt.verify(req.token, 'secretkeycr', (err, authdata) => {
            if (err)
                res.sendStatus(403);
        });

        var result = await CategoryController.GetAll(req.params.categoryId);
        res.json(result);

    } catch (error) {

        throw new Error(error);

    }
});

app.get('/getbyid/:id', verifyTokenProvided, async (req, res) => {

    try {

        jwt.verify(req.token, 'secretkeycr', (err, authdata) => {
            if (err)
                res.sendStatus(403);
        });

        var result = await CategoryController.GetById(req.params.id);
        res.json(result);

    } catch (error) {

        throw new Error(error);

    }
});


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