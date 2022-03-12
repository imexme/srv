require("dotenv").config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const fileUpload = require('express-fileupload')
const models = require('./models/models')
const path = require('path')

const router = require('./routes/index')
// const errorhandler = require('/middleware/errorHandling')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Error hendler
// app.use(errorhandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connection has been established successfully.");
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`server is up on port ${PORT}`);
        })


    } catch (e) {
        console.error("Unable to connect to the database:", e);
    }
}
start()
