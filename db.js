
const {Sequelize} = require('sequelize')


module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // ПАРОЛЬ
    {
        dialect: 'postgres',
        define: {
            timestamps: false
        },
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
     }
)









// const { Pool } = require('pg')
// const pool = new Pool()  // connects to postgress
//
// module.exports = {
//     query: (text, params) => pool.query(text, params),
// }