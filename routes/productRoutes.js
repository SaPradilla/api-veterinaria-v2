const express = require('express')
const router = express.Router()

const Routes = [
    {path:'/register/product/accessory', controller: require('../controllers/Product/Create').createAccessory},
]
//En rutador
Routes.forEach((route) =>{
    router.use(route.path, route.controller)
})
module.exports = router