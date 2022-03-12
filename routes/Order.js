const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')


// const {response} = require("express");
// const deleteOrder = require('./deleteOrder')
// router.get('/check', orderController.checkout)


router.post('/check', orderController.checkout)
// router.create('/:id', orderController.create)


module.exports = router