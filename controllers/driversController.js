const {Drivers, DriverInfo, City, License_Type } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class DriverController {

    async create(req, res, next) {
        try {
            const {
                id,
                name,
                surname,
                price,
                rating,
                password,
                info
            } = req.body

            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DriverInfo.create({
                        title: i.title,
                        description: i.description,
                        driversId: drivers.id
                    })
                )
            }

            const drivers = await Drivers.create({
                id,
                name,
                surname,
                price,
                rating,
                img: fileName,
                password
            })
            return res.json(drivers)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }


    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Drivers.findOne(
            {
                where: {id},
                include: [{model: DriverInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }


    async getAll(req, res) {
        let {cityId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let drivers;
        if (!cityId && !typeId) {
            drivers = await Drivers.findAndCountAll({limit, offset})
        }
        if (cityId && !typeId) {
            drivers = await Drivers.findAndCountAll({where: {cityId}, limit, offset})


        }
        if (!cityId && typeId) {
            drivers = await Drivers.findAndCountAll({where: {typeId}, limit, offset})

        }
        if (cityId && typeId) {
            drivers = await Drivers.findAndCountAll({where: {typeId, cityId}, limit, offset})

        }
        return res.json(drivers)

    }


}

module.exports = new DriverController()