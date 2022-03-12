const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

const {response} = require("express");

router.post('/registration',userController.registration)
router.get('/auth', userController.check)
router.get('/login', authMiddleware, userController.login)
// router.get('/:id ',  userController.search)

module.exports = router