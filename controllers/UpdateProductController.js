const db = require('../models')
const Producto = db.producto

const UpdateProduct = async(req,res) =>{
    try{
        const {id} = req.params
        const {tipo_producto,precio,unidades,volumen} = req.body

        const updateProduct = await Producto.update({
            tipo_producto:tipo_producto,
            precio:precio,
            unidades:unidades,
            volumen:volumen
        },{
            where:{
                id
            }
        })
        if(updateProduct != 0){
            return res.status(200).json({
                msg:'Producto editado correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id del producto no se encontró, No se pudo editar correctamente.'
            })
        }
        
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar el Producto.',
            error: error
        })
    }
}
module.exports = UpdateProduct