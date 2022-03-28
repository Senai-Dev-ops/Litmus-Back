const { Router } = require('express')

const router = Router()

const UserController = require('../controller/UserController')
const MaquinaController = require('../controller/MaquinaController')
const { validateToken } = require('../middlewares/middlewares')

router.get('/user-list', UserController.userList)
router.get('/maquina-list', MaquinaController.maquinaList)

router.patch('/user-update/:id', UserController.updateUser)
router.patch('/user-update-adm/:id', UserController.updateUserAdm)

router.post('/user-create', UserController.createUser)
router.post('/login', UserController.userAuth)
router.get('/auth', validateToken, UserController.validToken)

module.exports = router