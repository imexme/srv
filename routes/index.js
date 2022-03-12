const Router = require('express')
const router = new Router()


const driversRouter = require('./Drivers')
const userRouter = require('./Users')
const orderRouter = require('./Order')
const typeRouter = require('./typeRouter')
// const checkoutRouter = require('./checkoutRouter')


router.use('/users', userRouter)
router.use('/drivers', driversRouter)
router.use('/order', orderRouter)
router.use('/type', typeRouter)

module.exports = router

//
// //get all drivers
// app.get("/api/v1/drivers", async (req, res) => {
//     try {
//         const results = await db.query("select * from drivers");
//         console.log(results)
//         res.status(200).json({
//             status: "suxses",
//             results: results.rows.length,
//             data: {
//                 drivers: results.rows,
//             },
//         });
//     } catch (err) {
//         console.log(err)
//     }
// })
//
//
//
//
// //get one driver
//
// app.get("/api/v1/drivers/:id", async (req, res) => {
//     console.log(req.params.id)
//     try {
//         const results = await db.query(
//             "select * from drivers where id = $1",
//             [req.params.id]);
//         console.log(results)
//         res.status(200).json({
//             status: "suxses",
//             data: {
//                 drivers: results.rows[0],
//             },
//         });
//     } catch (err) {
//         console.log(err)
//     }
// });
//
// // create a driver
//
// app.post("/api/v1/drivers", async (req, res) => {
//
//     console.log(req.body)
//     try {
//         const results = await db.query("insert into drivers (name, surname, type, price, city) values ($1, $2, $3, $4, $5) returning * ",
//             [req.body.name, req.body.surname, req.body.type, req.body.price, req.body.city]
//         );
//
//         console.log(results);
//
//         res.status(201).json({
//             status: "suxses",
//             data: {
//                 drivers: results.rows[0],
//             },
//         });
//     } catch (err) {
//         console.log(err);
//     }
//
// });
//
//
// //Update driver
//
//
// app.put("/api/v1/drivers/:id", async (req, res) => {
//     console.log(req.body)
//     try {
//         const results = await db.query("UPDATE drivers SET name = $1, surname = $2, type = $3, price=$4, city=$5 WHERE id=$6 returning *",
//             [req.body.name, req.body.surname, req.body.type, req.body.price, req.body.city, req.params.id]
//         );
//
//         console.log(results);
//
//
//         res.status(200).json({
//             status: "succes",
//             data: {
//                 drivers: "d"
//             },
//         });
//     } catch (err) {
//         console.log(err);
//     }
//
// });
//
//
// //delete driver
//
//
// app.delete("/api/v1/drivers/:id", async (req, res) => {
//
//     console.log(req.body)
//     try {
//         const results = await db.query("delete from drivers  where id=$1",
//             [req.params.id]
//         );
//
//         res.status(204).json({
//             status: "suxses",
//         });
//     } catch (err) {
//     }
//
// });
//
//
