const db = require('../models')
const VentaProducto = db.venta_producto

const UpdateSalesProduct = async(req,res) =>{
    try{
        const {id} = req.params
        const {clienteId,productoId,dirrecion,valor_total} = req.body

        const updateSaleProduct = await VentaProducto.update({
            clienteId:clienteId,
            productoId:productoId,
            dirrecion:dirrecion,
            valor_total:valor_total
        },{
            where:{
                id
            }
        })
        if(updateSaleProduct != 0){
            return res.status(200).json({
                msg:'Venta de producto editada correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id de la venta de producto no se encontró, No se pudo editar correctamente.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar la Venta de Producto',
            error: error
        })
    }
}
module.exports = UpdateSalesProduct