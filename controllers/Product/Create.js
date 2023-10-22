const productService = require('../../repositories/productRepositories')
const { successResponseWithData, ErrorResponse} = require('../../adapters/http/sendResponse')

const CreateAccessory = async(req,res) =>{
    try{
        const accesoryData  = req.body
        const accessory = await productService.createAccesory(accesoryData)
        successResponseWithData(res,'Accesorio Registrado con exito',accessory)

    }catch(error){
        ErrorResponse(res,'Error al crear el accesorio',error)
    }
}
module.exports = {CreateAccessory}