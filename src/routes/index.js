var express = require("express");

const apiRouter = express.Router();

const auth = require('./auth');
const user = require('./user.route');
const library = require('./library.route');
const category = require('./category.route');
const link = require('./link.route');

apiRouter.use('/auth', auth)
apiRouter.use('/user', user);
apiRouter.use('/library', library);
apiRouter.use('/category', category);
apiRouter.use('/link', link);



module.exports = apiRouter;