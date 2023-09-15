const express = require('express')
const router = express.Router()
const AdminUser = require('./Adminuser/UserAdminRoutes')

const routersList = [
    {
        path:'/admin',  
        route:AdminUser
    }
]
//En rutador
routersList.forEach((route) =>{
    router.use(route.path, route.route)
})
module.exports = router
