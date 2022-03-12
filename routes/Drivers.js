
const Router = require('express')
const router = new Router()
const driverController = require('../controllers/driversController')


router.post('/reg', driverController.create )
router.get('/', driverController.getAll)
router.get('/:id', driverController.getOne)
// router.post('/auth', driverController.login)



module.exports = router