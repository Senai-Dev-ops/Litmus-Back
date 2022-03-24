const { Router } = require('express')

const router = Router()

const UserController = require('./src/controller/UserController')

router.get('/user-list', UserController.userList)

router.patch('/user-update/:id', UserController.updateUser)
router.patch('/user-update-adm/:id', UserController.updateUserAdm)

router.post('/user-create', UserController.createUser)
router.post('/user-create-adm', UserController.createUserAdm)



module.exports = router