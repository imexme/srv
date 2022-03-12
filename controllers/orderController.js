const {Order} = require('../models/models')
const ApiError = require('../error/ApiError')


class OrderController {
        async checkout (req, res){
            const {user_id} = req.body
            const order = await Order.create({user_id})
            return res.json(order)
        }
        // async create (req, res){
        //     const {create} = req.body
        //     const order = await Order.({create})
        //     return res.json(order)
        // }

}

module.exports = new OrderController()