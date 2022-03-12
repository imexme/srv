const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: false, allowNull: false },
    surname: { type: DataTypes.STRING, unique: false, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.INTEGER, allowNull: false },
    driver_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    time: { type: DataTypes.INTEGER, allowNull: false },
})



const Drivers = sequelize.define('drivers', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    surname: { type: DataTypes.STRING, unique: true },
    price: { type: DataTypes.INTEGER },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
})

const City = sequelize.define('city', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})


const DriverInfo = sequelize.define('driver_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.STRING, allowNull: false },
})

// const Rating = sequelize.define('rating', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     rate: {type: DataTypes.INTEGER, allowNull: false},
// })
//
const LicenseType = sequelize.define('license', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, allowNull: false },
})

const DriversUsers = sequelize.define('drivers_users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})






// Users.belongsTo(Order)
// Order.hasOne(Users)


User.belongsToMany(Drivers, { through: DriversUsers })
Drivers.belongsToMany(User, { through: DriversUsers })


City.hasMany(Drivers)
Drivers.belongsTo(City)

License_Type.hasOne(Drivers)
Drivers.belongsTo(License_Type)

Drivers.hasMany(Order)
Order.belongsTo(Drivers)

User.hasMany(Order)
Order.belongsTo(User)

DriverInfo.hasMany(Drivers, { as: 'info' })
Drivers.belongsTo(DriverInfo)
//
// Order.hasOne(Rating)
// Rating.belongsTo(Order)
//
// Rating.belongsTo(DriverInfo)
// DriverInfo.hasMany(Rating)
//
DriverInfo.hasMany(License_Type)
License_Type.belongsTo(DriverInfo)




module.exports = {
    User, Order, Drivers,
    City,
    License_Type,
    // Rating,
    DriverInfo,
    DriversUsers
}