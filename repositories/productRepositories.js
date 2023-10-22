const {accesorio} = require('../models')
const {producto} = require('../models')

const createAccesory = async(accesoryData)=>{
    const newAccesory = await accesorio.Create(accesoryData)
    return newAccesory 
}
const createProduct = async(productData) =>{
    const newProduct = await producto.Create(productData)
    return newProduct
}

module.exports = {
    createAccesory,
    createProduct
}