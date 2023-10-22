const productoRepo = require('../repositories/productRepositories')

const createAccesory = async(accesoryData) =>{

    const newAccessory = await productoRepo.createAccesory(accesoryData)
    
    let productData
    productData = { 
        accesorioId: newAccessory.id,
        cantidad_total: accesoryData.cantidad_total,
        unidades_disponibles: accesoryData.unidades_disponibles
    }
    await productoRepo.createProduct(productData)

    return newAccessory
    
}

module.exports = {
    createAccesory
}
