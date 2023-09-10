const db = require('../models')
const Producto = db.producto

const CreateProduct = async(req,res) =>{
    try{
        const {tipo_producto,precio,unidades,volumen} = req.body

        const newProduct = await Producto.create({
            tipo_producto:tipo_producto,
            precio:precio,
            unidades:unidades,
            volumen:volumen
        })
        return res.status(200).json({
            msg:'Producto creado correctamente.',
            Producto:newProduct
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el Producto.',
            error: error
        })
    }
}
module.exports = CreateProduct