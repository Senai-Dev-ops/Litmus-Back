const {Router} = require('express');

const routes = new Router();

const UserController = require('./controller/UserController')


routes.post('/users/', UserController.store)

routes.get('/users/', UserController.index)


routes.get('/', "helllo World")